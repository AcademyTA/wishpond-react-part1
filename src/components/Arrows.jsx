var React    = require('react');
var Carousel = require('nuka-carousel');

var Arrows = [{
  component: React.createClass({
    render() {
      return (
        <div
          onClick={this.props.previousSlide}>
          <i className="fa fa-chevron-circle-left fa-2x"></i>
        </div>
      )
    }
  }),
  position: 'CenterLeft',
  style: {
    padding: 20
  }
},
{
  component: React.createClass({
    render() {
      return (
        <div
          onClick={this.props.nextSlide}>
          <i className="fa fa-chevron-circle-right fa-2x"></i>
        </div>
      )
    }
  }),
  position: 'CenterRight',
  style: {
    padding: 20
  }
},
{
  component: React.createClass({
    render() {
      var self = this;
      var indexes = this.getIndexes(self.props.slideCount, self.props.slidesToScroll);
      return (
        <ul style={self.getListStyles()}>
          {
            indexes.map(function(index) {
              return (
                <li style={self.getListItemStyles()} key={index}>
                  <button
                    style={self.getButtonStyles(self.props.currentSlide === index)}
                    onClick={self.props.goToSlide.bind(null, index)}>
                    <img src="/src/images/react.png" className="bullet-logo"/>
                  </button>
                </li>
              )
            })
          }
        </ul>
      )
    },
    getIndexes(count, inc) {
      var arr = [];
      for (var i = 0; i < count; i += inc) {
        arr.push(i);
      }
      return arr;
    },
    getListStyles() {
      return {
        position: 'relative',
        margin: 0,
        top: -10,
        padding: 0
      }
    },
    getListItemStyles() {
      return {
        listStyleType: 'none',
        display: 'inline-block'
      }
    },
    getButtonStyles(active) {
      return {
        border: 0,
        background: 'transparent',
        color: 'black',
        cursor: 'pointer',
        padding: 10,
        outline: 0,
        fontSize: 24,
        opacity: active ? 1 : 0.5
      }
    }
  }),
  position: 'BottomCenter'
}
];

module.exports = Arrows;
