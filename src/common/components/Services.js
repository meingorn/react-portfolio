import React, { Component, PropTypes } from 'react';
import Banner from './layout/Banner';
import { SocialIcon } from 'react-social-icons';



class Services extends Component {

  render () {
    return (
      <div>
        <h3>Contact</h3>
        <a href="https://github.com/meingorn" className="nav-link" target="_blank">
          <i className="fa fa-angellist icon"></i>
        </a>
        <Banner />
      </div>
    );
  }
}

export default Services;
