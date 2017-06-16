import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';


class Banner extends Component {

  render() {

    return (
	    <div className="contact-banner">
      <SocialIcon url="http://twitter.com/jaketrent" />
            Visit <img className="img-responsive" href="https://github.com/meingorn" />
            Visit <a href="https://www.linkedin.com/in/maximeingorn/">My LinkedIn</a>
            <a href="https://github.com/meingorn">查看我的源代码</a>
            <a href="https://www.linkedin.com/in/maximeingorn/">连接我在LinkedIn</a>
      	</div>
    );
  }
}

export default Banner;
