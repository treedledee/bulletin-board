import React from 'react';
import ReactDOM from 'react-dom';

import style from './style/style.css';
import Board from './components/Board';
//import Note from './components/Note';

class App extends React.Component {
  render() {
    return (
      <div>
        <Board />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('container')
);
