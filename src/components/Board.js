import React from 'react';

import Note from './Note';

var Board = React.createClass({
  propTypes: {
    count: function(props, propName) {
      if (typeof props[propName] !== "number"){
        return new Error('The count prop must be a number.');
      }
      if (props[propName] > 100) {
        return new Error("Creating " + props[propName] + " notes is ridiculous!");
      }
    }
  },

  getInitialState: function() {
    return {
      notes: [
        'one',
        'two',
        'three'
      ]
    };
  },

  render: function() {
    return (
      <div className="board">
        {this.state.notes.map(function(note, i) {
          return (
            <Note key={i}>{note}</Note>
            );
        })}
      </div>
    );
  }

});

export default Board;