var React     = require('react');
var Carousel  = require('nuka-carousel');
var Arrows    = require('./Arrows.jsx');
var SlideItem = require('./SlideItem.jsx');

var Slides = React.createClass({
  mixins: [Carousel.ControllerMixin],
  render() {
    var list = this.props.slideData.map(function(slideProps){
      return <SlideItem key={ slideProps.slideId } { ...slideProps } />
    });

    return (
      <Carousel decorators={ Arrows } easing="easeInOutCubic">
        { list }
      </Carousel>
    )
  }
});

module.exports = Slides;
