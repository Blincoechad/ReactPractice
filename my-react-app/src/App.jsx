import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('rgb(20, 173, 187)');
  const [textIndex, setTextIndex] = useState(0);

  const textArray = ['Click The Button', 'Chad is...', 'Learning React'];

  const changeColors = () => {
    setColor(prev =>
      prev === 'rgb(20, 173, 187)'
        ? 'rgb(212, 45, 193)'
        : 'rgb(20, 173, 187)'
    );
  };

  const ChangeText = () => {
    setTextIndex(prev => (prev + 1) % textArray.length);
  };

  return (
    <>
      <div>
        <h1 className="frameWorks">My FrameWork Practice Page</h1>
      </div>

      <div className="buttonCards">
        {/* CARD 1 */}
        <div className="cards card1">
          <p className="button-title" style={{ color }}>
            Click Button To Count!
          </p>
          <button
            className="button1"
            onClick={() => setCount(count + 1)}
          >
            count is {count}
          </button>
          <p className="button-subTitle" style={{ color }}>
            <em>A button that keeps count</em>
          </p>
        </div>

        {/* CARD 2 */}
        <div className="cards card2">
          <p className="button-title" style={{ color }}>
            Click Button To
          </p>
          <button
            className="button2"
            onClick={changeColors}
          >
            Change buttons Text Color
          </button>
          <p className="button-subTitle" style={{ color }}>
            <em>A button that Changes Text Colors</em>
          </p>
        </div>

        {/* CARD 3 */}
        <div className="cards card3">
          <p className="button-title" style={{ color }}>
            {textArray[textIndex]}
          </p>
          <button
            className=" cards button3"
            onClick={ChangeText}
          >
            Click Me
          </button>
          <p className="button-subTitle" style={{ color }}>
            <em>A button that Changes Text</em>
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
