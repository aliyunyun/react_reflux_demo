require('normalize.css/normalize.css');
require('styles/App.css');

var myStyle = require('styles/HelloWorldCss.css');

import React from 'react';
import {HelloWorld} from './HelloWorld';
import {About} from './About';
import {Contact} from './Contact';
import {Link} from 'react-router';


let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <header>
          <ul className="navigation">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </header>
        <img src={yeomanImage} alt="Yeoman Generator" />
        <HelloWorld/>

        {this.props.children}
      </div>


    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
