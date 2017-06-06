import React, { Component } from 'react';

class Banner extends Component {

  render() {

    return (
	    <div className="contact-banner">
      		<p>Contact me at </p>
          <ul>
            <li href="http://twitter.com/maximeingorn"></li>
            <li ref="https://github.com/meingorn"></li>
            <li href="https://www.linkedin.com/in/maximeingorn"></li>

          </ul>

      	</div>
    );
  }
}

export default Banner;
