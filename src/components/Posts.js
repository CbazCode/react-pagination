import React from 'react'

export const Posts = ({ posts, loading}) => {

    if(loading){
        return <h2>Loading ... </h2>
    }

    return (
        <ul>
           {posts.map(post => {
               return (<li key={post.id}>{post.title}</li>);
           })} 
        </ul>
    )
}
