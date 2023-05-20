import MainNews from './MainNews/MainNews';
import SecondaryNews from './SecondaryNews/SecondaryNews';
import { useState } from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';
import './News.css';

const newsItems = [
  {
    id: 1,
    title: 'NOVI PAZAR 1',
    date: `2023-05-19`,
    calender: <AiOutlineCalendar />,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ',
    image: 'https://picsum.photos/100/100',
  },
  {
    id: 2,
    title: 'NOVI PAZAR 2',
    date: `2023-05-28`,
    calender: <AiOutlineCalendar />,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud,Ut enim ad minim veniam, quis nostrud ',
    image: 'https://picsum.photos/100/',
  },
  {
    id: 3,
    title: 'NOVI PAZAR 3',
    date: `2023-05-8`,
    calender: <AiOutlineCalendar />,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud,Ut enim ad minim veniam, quis nostrud ',
    image: 'https://picsum.photos/100/90',
  },
];

const News = () => {
  const [selectedNews, setSelectedNews] = useState(newsItems[0]);

  const handleNewsItemClick = news => {
    setSelectedNews(news);
  };

  return (
    <div className="News">
      <MainNews selectedNews={selectedNews} />
      <SecondaryNews
        newsItems={newsItems}
        onNewsItemClick={handleNewsItemClick}
        selectedNews={selectedNews}
      />
    </div>
  );
};

export default News;
