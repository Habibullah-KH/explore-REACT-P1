import './post.css'


export default function Post({post}){

    const{title, body, id, userId} = post;

    return(
        <div className='post'>
            <h5>Title: {title}</h5>
            <p><small>userId: {userId}</small></p>
            <p><small>PostId: {id}</small></p>
            <p><small>{body}</small></p>
            <p></p>
        </div>
    )
}