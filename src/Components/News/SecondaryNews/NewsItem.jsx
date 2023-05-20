const NewsItem = ({ news, active, onClick }) => {
  const handleClick = () => {
    onClick(news);
  };

  return (
    <div
      className={`News-Item${active ? ' active' : ''}`}
      onClick={handleClick}
    >
      <div
        className="News-Item__Image"
        style={{ backgroundImage: `url(${news.image})` }}
      >
        <div className="News-Item__Overlay">
          <h4>{news.title}</h4>
          <p>
            {news.calender}
            {news.date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
