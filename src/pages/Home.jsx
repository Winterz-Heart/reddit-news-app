import { useEffect, useState } from "react";
import { getSubredditIcon } from "../API/scrapeSubredditIcon";


function Home() {
    const [iconUrl, setIconUrl] = useState(null);

    useEffect(() => {
        getSubredditIcon('news').then(url => setIconUrl(url));
    }, []);

    return(
        <div>
            <h1>Home</h1>
            {iconUrl ? (
                <img src={iconUrl} alt="r/news icon" />
            ) : (
                <p>Loading icon...</p>
            )}
        </div>
    );
}

export default Home;