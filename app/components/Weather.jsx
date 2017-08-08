
const React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      location: 'none',
      temp: 0
    };
  },
  handleSearch: function(location) {
    var that = this;
    openWeatherMap.getTemp(location).then(function(temp) {
      that.setState({
        location: location,
        temp: temp
      });
    }).catch(err);
    alert(err);
  },
  render: function() {
    return (
      <div>
        <WeatherForm onSearch={this.handleSearch}></WeatherForm>
        <WeatherMessage location={this.state.location} temp={this.state.temp}></WeatherMessage>
      </div>
    );
  }
});

module.exports = Weather;
