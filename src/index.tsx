import * as React from 'react';
import {render} from 'react-dom';

import Stage from './components/Stage';


import './styles.scss';

function App() {
  return (
    <div className="App">
      <Stage />
    </div>
  );
}

const rootElement = document.getElementById('root');
render(<App />, rootElement);
