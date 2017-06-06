import React, { Component, PropTypes } from 'react';
import Banner from './layout/Banner';


class Services extends Component {

  render () {
    return (
      <div>

	      	<Banner />

      	  <div className="services">

      	  	<h3>Contact</h3>

           Visit <a href="https://github.com/meingorn">My GitHub</a><br/>
           Visit <a href="https://www.linkedin.com/in/maximeingorn/">My LinkedIn</a><br/>
           <a href="https://github.com/meingorn">查看我的源代码</a><br/>
          <a href="https://www.linkedin.com/in/maximeingorn/">连接我在LinkedIn</a><br/>

        

	      </div>

      </div>
    );
  }
}

export default Services;
