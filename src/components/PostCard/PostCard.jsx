import './PostCard.css'

function PostCard (props) {
    const created_utc = props.created_utc
    const date = new Date(created_utc * 1000)
    const formattedTime = date.toLocaleTimeString()
    const formattedDate = date.toLocaleDateString()

    return (
        <div className='post-card'>
            <div className='post-card-header'>
                <img className='subreddit-icon' src={props.subredditIcon} alt={props.subreddit + ' icon'} />
                <p> r/{props.subreddit} | {props.author} | {formattedTime} {formattedDate} </p>
            </div>
            <div className='post-card-content'>
                <p> {props.title} </p>
                <a href={props.url} target='_blank' rel="noreferrer" > {props.url} </a>
            </div>
            <div className='post-card-footer'>
                <p>Upvote | {props.score} | Downvote</p>
                <p>Comments | {props.num_comments} </p>
            </div>
        </div>
    )
}

export default PostCard;