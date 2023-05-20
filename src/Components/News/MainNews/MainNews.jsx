import { useState } from 'react';
import './MainNews.css';
import SecondaryNews from '../SecondaryNews/SecondaryNews';

const MainNews = () => {
  const newsItems = [
    {
      id: 1,
      title: 'News 1',
      date: '2023-05-19',
    },
    {
      id: 2,
      title: 'News 2',
      date: '2023-05-18',
    },
  ];

  const [selectedNews, setSelectedNews] = useState(newsItems[0]);

  const handleNewsItemClick = news => {
    setSelectedNews(news);
  };

  return (
    <div className='News-Main'>
      <div>
        <h2>{selectedNews.title}</h2>
        <p>{selectedNews.date}</p>
      </div>
      <hr />
      <SecondaryNews
        newsItems={newsItems}
        onNewsItemClick={handleNewsItemClick}
      />
    </div>
  );
};

export default MainNews;
