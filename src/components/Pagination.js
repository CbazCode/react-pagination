import React from 'react'

export const Pagination = ({ postsPerPage, totalPosts, paginate}) => {

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);     
    }

    return (
        <nav>
            <ul className='flex justify-end'>
                {
                    pageNumbers.map(number => (
                        <li key={number} className='inline-block px-2 md:px-3 border border-white border-8 rounded-md md:mx-1 border-white-400 bg-green-400 text-md md:text-lg hover:bg-blue-500 transition-all cursor-pointer text-white'>
                            <a onClick = {()=> paginate(number)}
                                href="!#">
                                {number}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}
