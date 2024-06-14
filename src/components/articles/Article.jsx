import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import '../../assets/styles/Article.css';

import { convertDate } from '../../utils/convertData';

import Tags from '../Tags';
import Modal from '../Modal';

export default function Article() {
    const [isActive, setIsActive] = useState(false);
    const { article } = useLoaderData();

    function handleToggle(e) {
        let imgUrl = isActive ? 'heart-red.svg' : 'heart1.svg';
        e.target.src = e.target.baseURI + imgUrl
        setIsActive(!isActive)
    }

    return (
        <section className='article-container'>
            <div className='article-details'>
                <div className='article-info'>
                    <div className='article-header'>
                        <h3 className="article-title">{article.title}</h3>
                        <div className='article-like'>
                        <img className='likes-heart' src='/heart1.svg' alt='Like Image' onClick={handleToggle} />
                        <span className='likes-count'>{article.favoritesCount}</span>
                        </div>
                    </div>
                    <div className="article-tags">{<Tags tagsList={article.tagList} />}</div>
                    <p className="article-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className='article-author'>
                    <div className='author-info'>
                        <div className='author-name'>{article.author.username}</div>
                        <div className='article-date'>{convertDate(article.createdAt)}</div>
                    </div>
                    <img src={article.author.image} alt="Author Profile Picture" />
                </div>
                <div className='btns'>
                    <button className='delete-btn'>Delete</button>
                    <button className='edit-btn'>Edit</button>
                </div>
            </div>
            <div className='article-content'>
                <ReactMarkdown>{article.body.replace(/\\n/gi, "\n\n")}</ReactMarkdown>
            </div>
            {/* <Modal /> */}
        </section>
    )
}

export const articleDataLoader = async ({ params }) => {
    const { slug } = params;

    const res = await fetch('https://api.realworld.io/api/articles/' + slug);
    
    if(!res.ok) {
        throw Error('Something went wrong. Could not find that article. Please try again later.');
    }

    return res.json();
}
