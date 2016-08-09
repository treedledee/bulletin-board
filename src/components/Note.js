import React from 'react';

var Note = React.createClass({
  getInitialState: function() {
    return {editing: false}
  },

  componentWillMount: function() {
    this.style = {
      right: this.randomBetween(0, window.innerWidth - 150) + 'px',
      top: this.randomBetween(0, window.innerHeight - 150) + 'px',
      transform: 'rotate(' + this.randomBetween(-15, 15) + 'deg)'
    };
  },

  randomBetween: function(min, max) {
    return (min + Math.ceil(Math.random() * max));
  },

  edit: function() {
    this.setState({ editing: true });
  },

  save: function() {
    //let val = this.refs.newText.value;
    this.props.onChange(this.refs.newText.value, this.props.index);
    this.setState({ editing: false });
  },

  remove: function() {
    this.props.onRemove(this.props.index);
  },

  renderDisplay: function() {
    return (
      <div className="note" style={this.style} >
        <p>{this.props.children}</p>
        <span>
          <button onClick={this.edit} className="btn btn-primary btn-sm glyphicon glyphicon-pencil" />
          <button onClick={this.remove} className="btn btn-danger btn-sm glyphicon glyphicon-trash" />
        </span>
      </div>
    );
  },

  renderForm: function() {
    return (
      <div className="note" style={this.style}>
        <textarea ref="newText" defaultValue={this.props.children} className="form-control"></textarea>
        <button onClick={this.save} className="btn btn-success btn-sm glyphicon glyphicon-floppy-disk" />
      </div>
      );
  },

  render: function() {
    return (this.state.editing ? this.renderForm() : this.renderDisplay());
  },
});

Note.propTypes = {
  children: React.PropTypes.node,
};

export default Note;
