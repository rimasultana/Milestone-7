import './post.css'

export default function Posts ((post)){

    const {title, body, id, userId} = post;
    return(
        <div className='class'>
        <h3>Title:{title}</h3>
        <p><small>userId:{userId}</small></p>
        <p><small>postId:{id}</small></p>
        <p>{body}</p>
        </div>
    )
}