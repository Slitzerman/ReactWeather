
const React = require('react');
var {Link} = require('react-router');

// var Examples = React.createClass({
//   render: function() {
//     return (
//       <h3>Examples component</h3>
//     );
//   }
// });

var Examples = (props) => {
  return (
    <die>
      <h1 className='text-center'>Examples</h1>
      <p>Here's a few locations to rty out:</p>
      <ol>
        <li>
          <Link to='/?location=Kemi'>Kemi, FI</Link>
        </li>
        <li>
          <Link to='/?location=Athens'>Athens, GR</Link>
        </li>
      </ol>
    </die>
  );
};

module.exports = Examples;
