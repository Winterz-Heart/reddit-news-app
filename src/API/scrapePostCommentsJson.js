export async function scrapePostComments(subreddit, postId) {
    const url = `https://www.reddit.com/r/${subreddit}/${postId}.json`;
    const headers = {
        'User-Agent': 'Winterz-heart/Post-Comments-Scraper'
    }

    function processComment(commentData) {
        return {
            id: commentData.id,
            author: commentData.author || '[deleted]',
            body: commentData.body || '',
            created_utc: new Date(commentData.created_utc * 1000),
            replies: commentData.replies && commentData.replies.data && commentData.replies.data.children ? commentData.replies.data.children.map(child => processComment(child.data)) : []
        };
    }

    try {
        const response = await fetch(url, { headers })
        const data = await response.json()
        const commentsData = data[1];
        const comments = []

        for (const child of commentsData.data.children) {
            comments.push(processComment(child.data));
        }
        return comments
    } catch (error) {
        console.error('Error Scraping:', error.message);
        throw error;
    }
}

// Test scrapePostComments
scrapePostComments('news', '1ppt1yx').then(comments => {
    console.log('First Comment Chain:', JSON.stringify(comments[0], null, 2));
}).catch(error => {
    console.error('Test failed:', error);
})