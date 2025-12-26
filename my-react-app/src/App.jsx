import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('black');

  const changeColors = () => {
    setColor(prev => (prev === 'rgb(20, 173, 187)' ? 'rgb(212, 45, 193)' : 'rgb(20, 173, 187)'));
  };

  return (
    <>
      <div>
        <h1 className="frameWorks">My FrameWork Practice Page</h1>
      </div>

      <div className="buttonCards">
        <div className="cards card1">
          <p className="button-title" style={{ color }}>
            Click Button To Count!
          </p>
          <button className="button1" onClick={() => setCount(count + 1)}>
            count is {count}
          </button>
          <p className="button-subTitle" style={{ color }}>
            <em>A button that keeps count</em>
          </p>
        </div>

        <div className="cards card2">
          <p className="button-title" style={{ color }}>
            Click Button To 
          </p>
          <button className="button2" onClick={changeColors}>Change buttons Text Color</button>
          <p className="button-subTitle" style={{ color }}>
            <em>A button that</em>
          </p>
        </div>
      </div>

      
    </>
  );
}

export default App;
