import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/news.css'
import {Container, Row, Col} from 'reactstrap'
import {BsSearchHeartFill} from 'react-icons/bs'

const News = () => {
  // define states
  const [news, setNews] = useState([]);
  const [searchNews, setSearchNews] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isSearchLoading, setIsSearchLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('search news');
  const [activeLiCategory, setActiveLiCategory] = useState(null);
  const [activeLiCountry, setActiveLiCountry] = useState(null);
  const [category, setCategory] = useState(() => {
    // we are going to save it in localStorage api
    const savedCategory = localStorage.getItem('SelectedCategory');
    if (savedCategory != null) {
      return savedCategory;
    }
    // default category
    return 'general';
  });

  const [country, setCountry] = useState(() => {
    // we are going to save it in localStorage api
    const savedCountry = localStorage.getItem('SelectedCountry');
    if (savedCountry != null) {
      return savedCountry;
    }
    // default country
    return 'us';
  });

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode != null) {
      return savedMode === 'true';
    }
    // default mode
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // =============================
  // work with useEffect to control API

  useEffect(() => {
    const apiKey = '464c10a4c095459580d221d3a65a12e4';

    // It is for our main data
    const getTopHeadlines = async () => {
      setIsLoading(true);
      const params = {
        country,
        category,
        page,
        apiKey,
      };
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines', 
        // 'https://mocki.io/v1/3ad65262-d13b-4807-bbea-b5c7e5865605',
        { params }
      );
      setNews(response.data.articles);
      setIsLoading(false);
    };

    // define another one for searching news
    const searchForArticles = async () => {
      if (searchQuery) {
        setIsSearchLoading(true);
        const params = {
          q: searchQuery,
          pageSize: 25,
          apiKey,
        };
        const response = await axios.get(
          'https://newsapi.org/v2/everything', 
          // 'https://mocki.io/v1/3ad65262-d13b-4807-bbea-b5c7e5865605',  
          { params }
        );
        setSearchNews(response.data.articles);
        setIsSearchLoading(false);
      }
    };

    // call these functions
    getTopHeadlines();
    searchForArticles();

    // lets save category and country selected by user to local storage
    localStorage.setItem('selectedCategory', category);
    localStorage.setItem('selectedCountry', country);

    // saving toggle b/n dark and light mode
    const body = document.querySelector('body');
    isDarkMode ? body.classList.add('dark') : body.classList.remove('dark');
    localStorage.setItem('darkMode', isDarkMode.toString());
  }, [category, country, page, searchQuery, isDarkMode]);

  // define function for searching
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setPage(1);
  }

  // define function for selecting country
  const handleCountryChange = (e) => {
    setCountry(e.target.getAttribute('value'));
    setActiveLiCountry(e.target)
  }

    // define function for selecting category
    const handleCategoryChange = (e) => {
        setCategory(e.target.getAttribute('value'));
        setActiveLiCategory(e.target)
    }

    // define function to handle page change
    const handlePageChange = (pageNumber) => {
        setPage(pageNumber);
    }
  return (
    // going to define structure
    <>
    <section className='news__container'>
      <div className='news__header'>
        <h1>Environment News Center</h1>

        {/* <div className='d-flex align-items-center' value={country} onClick={handleCountryChange}>
            <ul className='d-flex flex-row gap-4'>
                <li className={`${activeLiCountry === document.querySelector('ul.country li:nth-child(1)') }`} value='us'>United State</li>
                <li className={`${activeLiCountry === document.querySelector('ul.country li:nth-child(2)') }`} value='gb'>United Kingdom</li>
                <li className={`${activeLiCountry === document.querySelector('ul.country li:nth-child(3)') }`} value='ca'>Canada</li>
                <li className={`${activeLiCountry === document.querySelector('ul.country li:nth-child(4)') }`} value='au'>Australia</li>
            </ul>
        </div> */}

        {/* <div className='d-flex align-items-center' value={category} onClick={handleCategoryChange}>
            <ul className='d-flex flex-row gap-4'>
                <li className={`${activeLiCategory === document.querySelector('ul.country li:nth-child(1)') }`} value='general'>General</li>
                <li className={`${activeLiCategory === document.querySelector('ul.country li:nth-child(2)') }`} value='bussiness'>Business</li>
                <li className={`${activeLiCategory === document.querySelector('ul.country li:nth-child(3)') }`} value='entertainment'>Entertainment</li>
                <li className={`${activeLiCategory === document.querySelector('ul.country li:nth-child(4)') }`} value='health'>Health</li>
                <li className={`${activeLiCategory === document.querySelector('ul.country li:nth-child(5)') }`} value='science'>Science</li>
                <li className={`${activeLiCategory === document.querySelector('ul.country li:nth-child(6)') }`} value='sports'>Sports</li>
                <li className={`${activeLiCategory === document.querySelector('ul.country li:nth-child(7)') }`} value='technology'>Technology</li>
            </ul>
        </div> */}


          <div className='news__category d-flex align-items-center' value={category} onClick={handleCategoryChange}>
            <ul>
                <li className={`${activeLiCategory === document.querySelector('ul.country li:nth-child(1)') }`} value='general'>General</li>
                <li className={`${activeLiCategory === document.querySelector('ul.country li:nth-child(2)') }`} value='air'>Air</li>
                <li className={`${activeLiCategory === document.querySelector('ul.country li:nth-child(3)') }`} value='soil'>Soil</li>
                <li className={`${activeLiCategory === document.querySelector('ul.country li:nth-child(4)') }`} value='water'>Water</li>
                <li className={`${activeLiCategory === document.querySelector('ul.country li:nth-child(5)') }`} value='biodiversity'>Biodiversity</li>
                <li className={`${activeLiCategory === document.querySelector('ul.country li:nth-child(6)') }`} value='sports'>Climate Change</li>
            </ul>
          </div>
      </div>



        {/* news will be here */}
      <div className='news__content'>
        <Container>
          <Row>
            <Col className='news__content-main' lg='9'>
                {
                    isLoading? (
                        <div className='d-flex'>
                            ???
                        </div>
                    ) : (
                        news.map((article, index) => (
                            <div className='article__wrapper' key={index}>
                                <div className='article__container'>
                                    <img 
                                        src={article.urlToImage ? article.urlToImage : 'noImg'} 
                                        // src={article.urlToImage} 
                                        alt={article.title}
                                        onError = {(e) => {e.target.src='noImg'}}
                                    />
                                    
                                    <div className='article__content'>
                                        <h2>
                                            {article.title}
                                        </h2>
                                        <p>{article.description}</p>
                                    </div>

                                    <div className='article__extra d-flex align-items-center
                                    justify-content-between'>
                                        <span>
                                            {article.source.name}
                                        </span>
                                        <a href={article.url}
                                        target='_blank'
                                        rel="noreferrer">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ) 
                    ))
                }
            </Col>


            <Col lg='3' className='search__wrapper'>
              <div className='search__new'>
                <form onSubmit={handleSearchSubmit}>
                  <div className='search__form'>
                    <input
                      type='text'
                      value={searchQuery}
                      placeholder='search news articles...'
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <BsSearchHeartFill className='search__icon' />
                    {/* <button className='btn secondary__btn'>Search</button> */}
                  </div>
                </form>

                <div>
                {isSearchLoading ? (
                  <div>
                    ...??
                  </div>
                ) : (
                  <>
                  {
                    searchNews.map((article) => (
                      <>
                      <div className='search__news'>
                        <img 
                          src={article.urlToImage ? article.urlToImage : 'noImg'} 
                          // src={article.urlToImage} 
                          alt={article.title}
                          onError = {(e) => {e.target.src='noImg'}}
                        />
                        <ul>
                          <li key={article.title}>
                            <a href={article.url}>{article.title}</a>
                          </li>
                        </ul>

                                    
                      </div>
                      </>
                    ) )
                  }
                  </>
                )}
                </div>


              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ==================== */}
      {/* Build previous and next page button */}
      <div className='d-flex mb-5'>
        <button 
          className='btn primary__btn'
          onClick={() => handlePageChange(page-1)}
          disabled={page===1}
        >Previous Page
        </button>

        <button 
          className='btn primary__btn'
          onClick={() => handlePageChange(page+1)}
        >Next Page
        </button>
      </div>
    </section>
    </>
  )
};

export default News;
