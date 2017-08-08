
const React = require('react');

var WeatherMessage = React.createClass({
  render: function() {
    return (
      <p>It's {this.props.temp} in {this.props.location}</p>
    );
  }
});

module.exports = WeatherMessage;
