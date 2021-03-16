import React, { useEffect, useState } from 'react'
import './App.css';
import { useAxios } from './hooks/useAxios';
import axios from "axios";
import { Posts } from './components/Posts';
import { Pagination } from './components/Pagination';

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
    <div>
      <h1>My blog</h1>
      <Posts posts={currentPosts} loading={loading}/>
      <Pagination postsPerPage = {postsPerPage} totalPosts = {posts?.length} paginate = { paginate } />
    </div>
  )
}

