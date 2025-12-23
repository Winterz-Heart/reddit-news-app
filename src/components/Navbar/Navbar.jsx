import { useState, useEffect } from "react";
import { SubredditList } from "../../SubredditList";
import { getSubredditIcon } from "../../API/scrapeSubredditIcon";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";
import './Navbar.css'

function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar)

    // Prepare static items (Home, All)
    const staticItems = [
        {
            title: 'Home',
            path: '/',
            icon: <AiIcons.AiOutlineHome style={{ width: 24, height: 24, borderRadius: '50%', marginRight: 8 }}/>,
            className: 'nav-text'
        },
        {
            title: 'All',
            path: '/all',
            icon: <AiIcons.AiOutlinePlayCircle style={{ width: 24, height: 24, borderRadius: '50%', marginRight: 8 }}/>,
            className: 'nav-text'
        }
    ];

    // State for subreddit icons
    const [subredditIcons, setSubredditIcons] = useState({});

    useEffect(() => {
        SubredditList.forEach(subreddit => {
            getSubredditIcon(subreddit).then(url => {
                setSubredditIcons(prev => ({ ...prev, [subreddit]: url }));
            });
        });
    }, []);

    return(
        <>
            <IconContext.Provider value={{ color: 'white' }} >
                <div className="navbar" >
                    <Link to ='#' className="menu-button" onClick={showSidebar} >
                        <FaIcons.FaBars />
                    </Link>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className="nav-menu-items" onClick={showSidebar} >
                        <li className="menu-button-close" >
                            <Link to='#' >
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        {/* Render static items */}
                        {staticItems.map((item, index) => (
                            <li key={item.title} className={item.className} >
                                <Link to={item.path} >
                                    {item.icon}
                                    <span>| {item.title}</span>
                                </Link>
                            </li>
                        ))}
                        {/* Render subreddit icons */}
                        {SubredditList.map((subreddit) => (
                            <li key={subreddit} className="nav-text" >
                                <Link to={`/${subreddit}`} >
                                    {subredditIcons[subreddit] ? (
                                        <img src={subredditIcons[subreddit]} alt={`${subreddit} icon`} style={{ width: 24, height: 24, borderRadius: '50%', marginRight: 8 }} />
                                    ) : (
                                        <AiIcons.AiOutlineReddit style={{ width: 24, height: 24, display: 'inline-block', marginRight: 8 }} />
                                    )}
                                    <span>| {subreddit}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
}

export default Navbar