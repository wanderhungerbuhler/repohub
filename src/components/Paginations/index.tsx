import React from 'react';
import { Pagination } from './styles';

interface PaginationProps {
  totalPosts: number;
  postsPerPage: number;
  setCurrentPage: (page: any) => {};
}

const Paginations = ({ totalPosts, postsPerPage, setCurrentPage }: PaginationProps) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <Pagination>
      {pages.map((page, index) => (
        <button key={index} onClick={() => setCurrentPage(page)}>
          {page}
        </button>
      ))}
    </Pagination>
  )
}

export default Paginations;
