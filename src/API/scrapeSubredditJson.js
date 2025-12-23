export async function scrapeSubredditJson(subreddit, sort='hot', limit=100, timeframe='all') {
    const url = `https://www.reddit.com/r/${subreddit}/${sort}.json`;
    const proxyUrl = 'https://corsproxy.io/?';
    const params = new URLSearchParams({
        'limit': limit.toString(),
        't': timeframe,
    })

    try {
        const response = await fetch(proxyUrl + encodeURIComponent(url + '?' + params));
        const data = await response.json()
        const posts = []

        for (const child of data.data.children) {
            const post = child.data;
            posts.push({
                id: post.id,
                title: post.title,
                author: post.author || '[deleted]',
                created_utc: new Date(post.created_utc * 1000),
                score: post.score,
                num_comments: post.num_comments,
                url: post.url,
                selftext: post.selftext || '',
                subreddit: post.subreddit,
                permalink: `https://www.reddit.com${post.permalink}`
            })
        }
        return posts;
    } catch (error) {
        console.error('Error Scraping Subreddit:', error)
        return [];
    }
};

// Test scrapeSubredditJson
scrapeSubredditJson('news', 'hot', 5).then(posts => {
    console.log('Fetched posts:', posts);
}).catch(error => {
    console.error('Test failed:', error);
});
