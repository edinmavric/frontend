import './SecondaryNews.css';
import NewsItem from './NewsItem';

const SecondaryNews = ({ onNewsItemClick }) => {
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

  const handleNewsItemClick = news => {
    onNewsItemClick(news);
  };

  return (
    <div className="Secondary-News">
      {newsItems.map(news => (
        <NewsItem key={news.id} news={news} onClick={handleNewsItemClick} />
      ))}
    </div>
  );
};

export default SecondaryNews;
