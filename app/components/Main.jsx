var React = require('react');

//components we need in this Component



var Main = (props) => {
  return (
    <div>
      <Nav/>
        <div className="row">
          <div className="column small-centered medium-6 large-4">
            {/*render children here*/}
            {props.children}
          </div>
        </div>
    </div>
  );
}

module.exports = Main;
