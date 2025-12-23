import './PostCard.css'

function PostCard (props) {
    return (
        <div>
            <img src={props.subredditIcon} alt={props.subreddit + ' icon'} />
            <p> r/{props.subreddit} | {props.author} | {props.created_utc} </p>
            <p> {props.title} </p>
            <a href={props.url}> {props.url} </a>
            <p>Upvote | {props.score} | Downvote</p>
            <p>Comments | {props.num_comments} </p>
        </div>
    )
}

export default PostCard;