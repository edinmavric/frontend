import './MainNews.css';
import { AiOutlineCalendar } from 'react-icons/ai';

const MainNews = ({ selectedNews }) => {
  return (
    <div className="News-Main">
      <div
        className="News-Main__Container"
        style={{
          backgroundImage: `url(${selectedNews.image})`,
        }}
      >
        <div className="News-Main__Overlay">
          <h2>{selectedNews.title}</h2>
          <p>
            <AiOutlineCalendar />
            {selectedNews.date}
          </p>
        </div>
      </div>
      <p>{selectedNews.content}</p>
    </div>
  );
};

export default MainNews;
