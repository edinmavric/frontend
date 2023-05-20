import MainNews from './MainNews/MainNews';
import SecondaryNews from './SecondaryNews/SecondaryNews';
import './News.css';

const newsItems = [
  {
    id: 1,
    title: 'News 1',
    date: '2023-05-19',
    content: 'News 1 content...',
  },
  {
    id: 2,
    title: 'News 2',
    date: '2023-05-18',
    content: 'News 2 content...',
  },
];

const News = () => {
  const handleNewsItemClick = news => {
    console.log('News item clicked:', news);
  };

  return (
    <div className="News">
      <MainNews />
    </div>
  );
};

export default News;
