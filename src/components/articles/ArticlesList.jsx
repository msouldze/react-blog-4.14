import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import ArticleInfo from './ArticleInfo'
import Pagination from '../Pagination';
import '../../assets/styles/ArticlesList.css'

export default function ArticlesList() {
  const { articles } = useLoaderData();
  // const [searchParams, setSearchParams] = useSearchParams();
  
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(5);

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // get current articles
  const indexOfLast = currentPage * articlesPerPage;
  const indexOfFirst = indexOfLast - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirst, indexOfLast);

  return (
    <section className='list'>
      <ul className="articles-list">
        {currentArticles.map(article => (
          <ArticleInfo key={article.id} article={article} />
        ))}
      </ul>
      <Pagination
        articlesPerPage={articlesPerPage}
        length={articles.length}
        currentPage={currentPage}
        handlePagination={handlePagination}
      />
    </section>
  )
}

export const articlesLoader = async () => {
  const response = await fetch(`https://api.realworld.io/api/articles?limit=50`)
  const data = await response.json();

  if(!response.ok) {
    throw Error('Something went wrong. Could not fetch the data. Please try again later.');
  }

  return data;
}