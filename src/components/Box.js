import React from 'react';

var Box = React.createClass({
  getDefaultProps: function() {

  },

  getInitialState: function() {
    return {
      backgroundColor: "blue",
      height: 200,
      width: 200
    }
  },
  componentWillReceiveProps: function(nextProps) {
    var color = this.props.colors.split(',')[nextProps.colorIndex];
  },
  render: function() {
    return <div style={this.state}></div>;
  }

})

export default Box;