import React from 'react';

var Note = React.createClass({
  getInitialState: function() {
    return {editing: false}
  },

  edit: function() {
    this.setState({ editing: true });
  },

  save: function() {
    let val = this.refs.newText.getDOMNode().value;
    //alert("TODO: save note value and val");
    this.setState({ editing: false });
  },

  remove: function() {
    alert('removing note');
  },

  renderDisplay: function() {
    return (
      <div className="note">
        <p>{this.props.children}</p>
        <span>
          <button onClick={this.edit} className="btn btn-primary glyphicon glyphicon-pencil" />
          <button onClick={this.remove} className="btn btn-danger glyphicon glyphicon-trash" />
        </span>
      </div>
    );
  },

  renderForm: function() {
    return (
      <div className="note">
        <textarea ref="newText" defaultValue={this.props.children} className="form-control"></textarea>
        <button onClick={this.save} className="btn btn-success btn-sm glyphicon glyphicon-floppy-disk" />
      </div>
      );
  },

  render: function() {
    return (this.state.editing ? this.renderForm() : this.renderDisplay());
  }
});

Note.propTypes = {
  children: React.PropTypes.node,
};

export default Note;
