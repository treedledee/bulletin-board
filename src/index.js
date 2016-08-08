import React from "react";
import ReactDOM from "react-dom";

import style from "./style/style.css";
import Note from './components/Note';

class App extends React.Component {
  render() {
    return (
      <div>
        <Note />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('container')
);
