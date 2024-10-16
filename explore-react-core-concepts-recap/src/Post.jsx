import { useEffect, useState } from "react"

export default function Posts (){
    const [posts, setPosts] = useState([]);
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then( res => res.json())
        .then(data => setPosts(data))
    },[])



    return(
        <div>
            <h3>Posts: {posts.length}</h3>
            {
                posts.map(post => <Posts post={post}></Posts>)
            }
        </div>
    )
}

/* 
1. create a state  to store data
2. create  use effect with no dependencies
3.use fetch load data
*/