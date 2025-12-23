import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSubreddit, fetchSubreddit } from "./SubredditSlice";
import { useParams } from "react-router-dom";

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

    return (
        <div>
            <section>
                {errors ? (
                    <p>Something went wrong!</p>
                ) : status === "pending" ? (
                    <p>Loading</p>
                ) : (
                    posts.map(post => (
                        <div key={post.id} style={{ border: "1px solid #ccc", margin: "1em 0", padding: "1em" }}>
                            <h2>{post.title}</h2>
                            <p>by {post.author} | Score: {post.score} | Comments: {post.num_comments}</p>
                            <p>{post.selftext}</p>
                        </div>
                    ))
                )}
            </section>
        </div>
    );
}

export default Subreddit;