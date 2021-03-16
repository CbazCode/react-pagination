import React from 'react'

export const Posts = ({ posts, loading}) => {

    if(loading){
        return <h2>Loading ... </h2>
    }

    return (
        <ul className='mb-4'>
           {posts.map(post => {
               return (<li className ={`text-lg border p-4 ${(post.id%2 === 0) ? 'bg-green-100 border-none' : '  border-t-green-300'}`} key={post.id}>{post.title}</li>);
           })} 
        </ul>
    )
}
