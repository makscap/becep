import React from 'react';
import { Link } from 'react-router-dom';
import s from './Pagination.module.css';

function Pagination({ productsPerPage, allArticlesLength, paginate, currentPage }) {
  let pageNumbers = [];

  const page = Math.ceil(allArticlesLength / productsPerPage);

  for (let i = 1; i <= page; i++) {
    pageNumbers.push(i);
  }

  const decrementPage = page => {
    if (page > 1) {
      return currentPage - 1;
    }
    return page;
  };

  const incrementPage = page => {
    if (page < pageNumbers.length) {
      return currentPage + 1;
    }
    return page;
  };

  // RESPONSIVE pagination

  let startPage, endPage;

  if (page <= 10) {
    // less than 10 total pages so show all
    startPage = 1;
    endPage = page;
  } else {
    // more than 10 total pages so calculate start and end pages
    if (currentPage <= 6) {
      startPage = 1;
      endPage = 10;
    } else if (currentPage + 4 >= page) {
      startPage = page - 9;
      endPage = page;
    } else {
      startPage = currentPage - 5;
      endPage = currentPage + 4;
    }
  }

  // calculate start and end item indexes
  // let startIndex = (currentPage - 1) * productsPerPage;
  // let endIndex = Math.min(startIndex + productsPerPage - 1, allArticlesLength - 1);
  // console.log('🚀 ~ file: Pagination.js ~ line 53 ~ Pagination ~ endIndex', endIndex);

  // create an array of pages to ng-repeat in the pager control
  let pages = [...Array(endPage + 1 - startPage).keys()].map(i => startPage + i);

  // return object with all pager properties required by the view

  return (
    <div className={s.paginate}>
      {pageNumbers.length > 1 && (
        <ul className={s.list}>
          <li className={s.item} key={'btn1'}>
            <Link
              to={currentPage}
              className={currentPage === 1 ? s.linkDisable : s.link}
              onClick={e => {
                e.preventDefault();
                paginate(decrementPage);
              }}
            >
              <div className={s.svg}>
                <svg width="30" height="24" viewBox="0 0 30 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.71 15.88L16.83 12L20.71 8.11998C21.1 7.72998 21.1 7.09998 20.71 6.70998C20.32 6.31998 19.69 6.31998 19.3 6.70998L14.71 11.3C14.32 11.69 14.32 12.32 14.71 12.71L19.3 17.3C19.69 17.69 20.32 17.69 20.71 17.3C21.09 16.91 21.1 16.27 20.71 15.88Z" />
                  <path d="M14.71 15.88L10.83 12L14.71 8.11998C15.1 7.72998 15.1 7.09998 14.71 6.70998C14.32 6.31998 13.69 6.31998 13.3 6.70998L8.70998 11.3C8.31998 11.69 8.31998 12.32 8.70998 12.71L13.3 17.3C13.69 17.69 14.32 17.69 14.71 17.3C15.09 16.91 15.1 16.27 14.71 15.88Z" />
                </svg>
              </div>
            </Link>
          </li>
          {pages.map(num => (
            <li key={num} className={num === currentPage ? s.itemActive : s.item}>
              <Link
                to={currentPage}
                className={num === currentPage ? s.linkActive : s.link}
                onClick={e => {
                  e.preventDefault();
                  paginate(num);
                }}
              >
                {num}
              </Link>
            </li>
          ))}
          <li className={s.item} key={'btn2'}>
            <Link
              to={currentPage}
              className={currentPage === page ? s.linkDisable : s.link}
              onClick={e => {
                e.preventDefault();
                paginate(incrementPage);
              }}
            >
              <div className={s.svg}>
                <svg width="30" height="24" viewBox="0 0 30 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.29002 8.12002L13.17 12L9.29002 15.88C8.90002 16.27 8.90002 16.9 9.29002 17.29C9.68002 17.68 10.31 17.68 10.7 17.29L15.29 12.7C15.68 12.31 15.68 11.68 15.29 11.29L10.7 6.70002C10.31 6.31002 9.68002 6.31002 9.29002 6.70002C8.91002 7.09002 8.90002 7.73002 9.29002 8.12002Z" />
                  <path d="M15.29 8.12002L19.17 12L15.29 15.88C14.9 16.27 14.9 16.9 15.29 17.29C15.68 17.68 16.31 17.68 16.7 17.29L21.29 12.7C21.68 12.31 21.68 11.68 21.29 11.29L16.7 6.70002C16.31 6.31002 15.68 6.31002 15.29 6.70002C14.91 7.09002 14.9 7.73002 15.29 8.12002Z" />
                </svg>
              </div>
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Pagination;
