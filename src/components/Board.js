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
      notes: []
    };
  },

  nextId: function() {
    this.uniqueId = this.uniqueId || 0;
    return this.uniqueId++;
  },

  add: function(text) {
    var arr = this.state.notes;
    arr.push({
      id: this.nextId(),
      note: text
    });
    this.setState({notes: arr});
  },

  update: function(newText, i) {
    var arr = this.state.notes;
    arr[i].note = newText;
    this.setState({notes: arr});
  },

  remove: function(i) {
    var arr = this.state.notes;
    arr.splice(i, 1);
    this.setState({notes: arr});
  },

  eachNote: function(note, i) {
    return (        
        <Note key={note.id} 
              index={i} 
              onChange={this.update}
              onRemove={this.remove}
        >{note.note}</Note>
      );
  },

  render: function() {
    return (
      <div className="board">
        <button onClick={this.add.bind(null, "new note")} className="btn btn-success btn-sm glyphicon glyphicon-plus"/>
        {this.state.notes.map(this.eachNote)}
      </div>
    );
  }

});

export default Board;
