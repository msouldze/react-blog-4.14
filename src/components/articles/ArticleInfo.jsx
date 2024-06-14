import { useState } from 'react';
import { Link } from 'react-router-dom';
import { convertDate } from '../../utils/convertData';
import Tags from '../Tags'

export default function ArticlesList({article}) {
  const [isActive, setIsActive] = useState(false);

  function handleToggle(e) {
    let imgUrl = isActive ? 'heart-red.svg' : 'heart1.svg';
    e.target.src = e.target.baseURI + imgUrl
    setIsActive(!isActive)
  }

  const date = convertDate(article.createdAt);

  return (
    <li className="article">
      <Link to={article.slug} >
        <div className='article-details'>
          <div className='article-header'>
            <h3 className="article-title">{article.title}</h3>
            <div className="article-tags">{<Tags tagsList={article.tagList} />}</div>
          </div>
          <p className="article-text">{article.description}</p>
        </div>
      </Link>
      <div className='article-footer'>
        <div className='article-author'>
          <div className='author-info'>
            <div className='author-name'>{article.author.username}</div>
            <div className='article-date'>{date}</div>
          </div>
          <img src={article.author.image} alt="Author Profile Picture" />
        </div>
        <div className='article-like' onClick={handleToggle}>
          <img className='likes-heart' src='/heart1.svg' alt='Like Image' />
          <span className='likes-count'>{article.favoritesCount}</span>
        </div>
      </div>
    </li>
  )
}

