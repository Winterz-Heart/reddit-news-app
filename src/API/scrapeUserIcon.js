// Fetch user profile icon
export async function getUserIcon(username) {
    if (username === '[deleted]') return null;
    const url = `https://www.reddit.com/user/${username}/about.json`
    const proxyUrl = 'https://corsproxy.io/?';
    try {
        const response = await fetch(proxyUrl + encodeURIComponent(url));
        if (!response.ok) {
            console.error(`Failed to fetch icon for ${username}: ${response.status} ${response.statusText}`);
            return null;
        }
        const data = await response.json();
        const iconUrl = data.data?.icon_img;
        return iconUrl.split('?')[0];
    } catch (error) {
        console.error(`Error retrieving icon for ${username}:`, error.message);
        return null;
    }
}