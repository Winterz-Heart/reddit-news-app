import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSubreddit, fetchSubreddit } from "./SubredditSlice";
import { useParams } from "react-router-dom";
import PostCard from "../../components/PostCard/PostCard";
import './Subreddit.css'

function Subreddit() {
    const dispatch = useDispatch();
    const { display_name } = useParams();

    useEffect(() => {
        document.title = `Subreddit | ${display_name}`;
        const action = { subreddit: display_name };
        dispatch(fetchSubreddit(action));
    }, [dispatch, display_name]);

    const subreddit = useSelector(selectSubreddit);
    const { posts, errors, status } = subreddit;

    const subredditName = posts[0].subreddit
    const subredditIcon = posts[0].subredditIcon
    const subredditIconUrl = subredditIcon.split('?')[0]

    return (
        <div>
            <div className="page-header">
                <img src={subredditIconUrl} alt={subredditName + ' icon'} className="subreddit-header-icon" />
                <h2>r/{subredditName}</h2>
            </div>
            <section>
                {errors ? (
                    <p>Something went wrong!</p>
                ) : status === "pending" ? (
                    <p>Loading</p>
                ) : (
                    posts.map(post => (
                        <PostCard
                            subredditIcon={post.subredditIcon}
                            id={post.id}
                            title={post.title}
                            author={post.author}
                            created_utc={post.created_utc}
                            score={post.score}
                            num_comments={post.num_comments}
                            url={post.url}
                            subreddit={post.subreddit}
                        />
                    ))
                )}
            </section>
        </div>
    );
}

export default Subreddit;