import './SecondaryNews.css';
import NewsItem from './NewsItem';

const SecondaryNews = ({ newsItems, onNewsItemClick, selectedNews }) => {
  const handleNewsItemClick = news => {
    onNewsItemClick(news);
  };

  return (
    <div className="Secondary-News__Container">
      {newsItems.map(news => (
        <NewsItem
          key={news.id}
          news={news}
          active={selectedNews.id === news.id}
          onClick={handleNewsItemClick}
        />
      ))}
    </div>
  );
};

export default SecondaryNews;
