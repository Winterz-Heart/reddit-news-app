export async function getSubredditIcon(subreddit) {
    const url = `https://www.reddit.com/r/${subreddit}/about.json`
    const proxyUrl = 'https://corsproxy.io/?';
    try {
        const response = await fetch(proxyUrl + encodeURIComponent(url));
        if (!response.ok) {
            console.error(`Failed to fetch icon for ${subreddit}: ${response.status} ${response.statusText}`);
            return null;
        }
        const data = await response.json();
        console.error(data)
        const iconUrl = data.data?.community_icon;
        return iconUrl.split('?')[0];
    } catch (error) {
        console.log(`Error retrieving icon for ${subreddit}:`, error.message);
        return null;
    }
}

// // Test getSubredditIcon
// (async () => {
//     const iconUrl = await getSubredditIcon('news');
//     console.log('Icon URL for r/news:', iconUrl);
// })();