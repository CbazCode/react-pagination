import React from 'react'

export const Posts = ({ posts, loading}) => {

    if(loading){
        return <h2>Loading ... </h2>
    }

    return (
        <ul className='mb-2'>
           {posts.map(post => {
               return (<li className= 'text-lg border border-gray-200 p-4' key={post.id}>{post.title}</li>);
           })} 
        </ul>
    )
}
