
var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function() {
//     return (
//       <p>It's {this.props.temp} in {this.props.location}</p>
//     );
//   }
// });

var WeatherMessage = (props) => {
  return (
    <p>It's {props.temp} in {props.location}</p>
  );
}

module.exports = WeatherMessage;
