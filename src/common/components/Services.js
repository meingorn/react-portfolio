import React, { Component, PropTypes } from 'react';
import Banner from './layout/Banner';


class Services extends Component {

  render () {
    return (
      <div>

	      	<Banner />

      	  <div className="services">

      	  	<h3>Prototypes/MVPs</h3>

      	  	<p>I can build you a prototype or a minimal viable product (MVP)for your idea. </p>

	      </div>

      </div>
    );
  }
}

export default Services;
