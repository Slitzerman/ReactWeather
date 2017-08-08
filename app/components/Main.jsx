const React = require('react');
const Nav = require('Nav');

var Main = React.createClass({
  render: function() {
    return (
      <div>
        <Nav/>
        <h3>Main component</h3>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Main;
