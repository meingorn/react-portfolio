import React, { Component, PropTypes } from 'react';
import Banner from './layout/Banner';
import { SocialIcon } from 'react-social-icons';



class Services extends Component {

  render () {
    return (
      <div>
        <h5>You can reach me via: </h5>
        <a href="https://www.linkedin.com/in/maximeingorn"> LINKEDIN </a>
        <br />
        <a href="https://github.com/meingorn"> GITHUB </a>
      </div>
    );
  }
}

export default Services;
