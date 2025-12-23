import { getUserIcon } from "./scrapeUserIcon.js"

export async function scrapePostComments(subreddit, postId) {
    const url = `https://www.reddit.com/r/${subreddit}/${postId}.json`;
    const proxyUrl = 'https://corsproxy.io/?';

    // Go through the .json file to get the data from the comments. Done here so that it can go thorugh the replies to each comments as well 
    function processComment(commentData) {
        return {
            id: commentData.id,
            author: commentData.author || '[deleted]',
            icon: null,
            body: commentData.body || '',
            created_utc: new Date(commentData.created_utc * 1000),
            replies: commentData.replies && commentData.replies.data && commentData.replies.data.children ? commentData.replies.data.children.map(child => processComment(child.data)) : []
        };
    }

    // Get unique usernames from the comments
    function collectUsers(comments) {
        const users = new Set();
        function checkUsers(comment) {
            if (comment.author && comment.author !== '[deleted]') {
                users.add(comment.author);
            }
            if (comment.replies) {
                comment.replies.forEach(checkUsers);
            }
        }
        comments.forEach(checkUsers);
        return Array.from(users);
    }



    // Add the icons to the usernames
    function addIcons(comment, userIconMap) {
        comment.icon = userIconMap[comment.author] || null;
        if (comment.replies) {
            comment.replies.forEach(reply => addIcons(reply, userIconMap))
        }
    }

    

    try {
        const response = await fetch(proxyUrl + encodeURIComponent(url));
        const data = await response.json()
        const commentsData = data[1];
        const comments = []

        // Get the comments data from the json file
        for (const child of commentsData.data.children) {
            comments.push(processComment(child.data));
        }

        // Get the users and their icons
        const users = collectUsers(comments);
        const iconPromises = users.map(user => getUserIcon(user));
        const icons = await Promise.all(iconPromises);
        const userIconMap = {};
        users.forEach((user, i) => {
            userIconMap[user] = icons[i];
        })

        // Add the user icons to the comment tree
        comments.forEach(comment => addIcons(comment, userIconMap));

        return comments
    } catch (error) {
        console.error('Error Scraping:', error.message);
        throw error;
    }
}

// Test scrapePostComments
scrapePostComments('news', '1pqg6hj').then(comments => {
    console.log('First Comment Chain:', JSON.stringify(comments[0], null, 2));
}).catch(error => {
    console.error('Test failed:', error);
})