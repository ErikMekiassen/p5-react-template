import Script from 'react-script-tag-18';
import './App.css';

function App() {
  return (
    <div>
      <h1>hei</h1>
      <div id='Game'>
      <Script type="text/javascript" src="./p5Canvas/sketch.js" />
      <Script type="text/javascript" src="./p5Canvas/grass.js" />
      <Script type="text/javascript" src="./p5Canvas/snake.js" />
      </div>
    </div>
  );
}

export default App;
