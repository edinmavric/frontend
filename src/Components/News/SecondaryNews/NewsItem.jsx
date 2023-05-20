import './SecondaryNews.css';

const NewsItem = ({ news, onClick }) => {
  const handleClick = () => {
    onClick(news);
  };

  return (
    <div className="News-Item" onClick={handleClick}>
      <h4>{news.title}</h4>
      <p>{news.date}</p>
    </div>
  );
};

export default NewsItem;
