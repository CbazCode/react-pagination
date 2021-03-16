import React, { useEffect, useState } from 'react'
import './App.css';
import { useAxios } from './hooks/useAxios';
import axios from "axios";
import { Posts } from './components/Posts';
import { Pagination } from './components/Pagination';
import './assets/main.css'

export const App = () => {
  const {loading, data:posts} = useAxios('https://jsonplaceholder.typicode.com/posts');
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(10);

  //Get current post

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts?.slice(indexOfFirstPost, indexOfLastPost);
  
  //Change page

  const paginate = (pageNumber) =>setCurrentPage(pageNumber)
  return (
    <div className = 'container mx-auto '>
      <h1 className='bg-gradient-to-r from-green-400 to-blue-500 text-black text-5xl p-3 my-3'>My posts</h1>
      <div className ='bg-gray-50 p-5 '>
        <Posts  posts={currentPosts} loading={loading}/>
        <Pagination postsPerPage = {postsPerPage} totalPosts = {posts?.length} paginate = { paginate } />
      </div>
    </div>
  )
}

