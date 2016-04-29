var React    = require('react');
var ReactDOM = require('react-dom');

var Navbar   = require('./components/Navbar.jsx');
var Slides   = require('./components/Slides.jsx');

var Presentation = React.createClass({
  render: function() {
    return (
      <div>
        <Navbar/>
        <Slides/>
      </div>
    )
  }
});

var element = React.createElement(Presentation, {});
ReactDOM.render(element, document.querySelector('.container'));
