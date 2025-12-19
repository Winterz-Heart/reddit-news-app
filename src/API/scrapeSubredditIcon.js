export async function getSubredditIcon(subreddit) {
        const url = `https://www.reddit.com/r/${subreddit}/about.json`
        const headers = {
            'User-Agent': 'Winterz-heart/Post-Comments-Scraper'
        }
        try {
            const response = await fetch(url, { headers })
            if (!response.ok) {
            console.error(`Failed to fetch icon for ${subreddit}: ${response.status} ${response.statusText}`);
            return null;
            }
            const data = await response.json();
            return data.data?.icon_img
        } catch (error) {
            console.error(`Error retrieving icon for ${subreddit}:`, error.message)
            return null;
        }
    }