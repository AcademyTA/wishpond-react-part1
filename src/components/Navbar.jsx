var React = require('react');

var Navbar = React.createClass({
  render: function() {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <div className="container">
            <div className="navbar-header">
              <a className="" href="#">
                <img src="/src/images/react.png" className="nav-logo"/>
              </a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <h1 className="header-title">React JS: Building a Simple List App with Reusable Components</h1>
            </div>
          </div>
        </nav>
      </div>
    )
  }
});

module.exports = Navbar;
