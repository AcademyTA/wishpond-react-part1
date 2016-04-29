var React    = require('react');

var SlideItem = React.createClass({
  render() {
    return (
      <div className="navbar-margin">
        <h2 className="text-center">{ this.props.title }</h2>
        <img src={ this.props.image } className="image-footer"/>
      </div>
    )
  }
});

module.exports = SlideItem;
