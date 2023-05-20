import './App.css';
import News from './Components/News/News';

const App = () => {
  return (
    <div className='App'>
      <News />
      {/* main novost/selectovana novost
          -leva strana sirina 60% sa tekstom-
          desne novosti/sticky odvojen overflow
          -sirine 40% samo title and img-
      */}
    </div>
  );
};

export default App;
