var React = require('react');
var Nav = require('Nav');

// var Main = React.createClass({
//   render: function() {
//     return (
//       <div>
//         <Nav/>
//         <h3>Main component</h3>
//         {this.props.children}
//       </div>
//     );
//   }
// });

var Main = (props) => {
  return (
    <div>
      <Nav />
      <h3>Main component</h3>
      {props.children}
    </div>
  );
}

module.exports = Main;
