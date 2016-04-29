var React    = require('react');
var Carousel = require('nuka-carousel');
var Arrows   = require('./Arrows.jsx');

var Slides = React.createClass({
  mixins: [Carousel.ControllerMixin],
  render() {
    return (
      <Carousel decorators={Arrows} edgeEasing="easeInOutElastic">
        <div className="navbar-margin">
          <h2 className="text-center">One</h2>
          <img src="http://fillmurray.com/1150/550"/>
          <div className="container slide-footer"></div>
        </div>
        <div className="navbar-margin">
          <h2 className="text-center">two</h2>
          <img src="http://fillmurray.com/1150/550"/>
          <div className="container slide-footer"></div>
        </div>
        <div className="navbar-margin">
          <h2 className="text-center">Three</h2>
          <img src="http://fillmurray.com/1150/550"/>
          <div className="container slide-footer"></div>
        </div>
        <div className="navbar-margin">
          <h2 className="text-center">Four</h2>
          <img src="http://fillmurray.com/1150/550"/>
          <div className="container slide-footer"></div>
        </div>
        <div className="navbar-margin">
          <h2 className="text-center">Five</h2>
          <img src="http://fillmurray.com/1150/550"/>
          <div className="container slide-footer"></div>
        </div>
      </Carousel>
    )
  }
});

module.exports = Slides;
