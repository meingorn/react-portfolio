import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

class Sidebar extends Component {


  constructor(props){
	super(props);
	this.eventCloseSidebar = this.eventCloseSidebar.bind(this)
  }

  eventCloseSidebar (e) {
  	this.props.toggleSidebar(!this.props.layout.sidebarOpen);
  }

  render() {

    return (

    	<div className="sidebar">

		  <nav className="sidebar-nav">
		    <Link to="/home" className="sidebar-nav-item" onClick={this.eventCloseSidebar} activeClassName="active">Home</Link>
		    <Link to="/portfolio" className="sidebar-nav-item" onClick={this.eventCloseSidebar} activeClassName="active">My Portfolio</Link>
        <Link to="/about" className="sidebar-nav-item" onClick={this.eventCloseSidebar} activeClassName="active">About</Link>
		    <Link to="/services" className="sidebar-nav-item" onClick={this.eventCloseSidebar} activeClassName="active">My Services</Link>
		  </nav>

		  <div className="sidebar-item sidebar-footer">

		    <p>
				Visit <a href="https://github.com/meingorn">My GitHub</a><br/>
				Visit <a href="https://www.linkedin.com/in/maximeingorn/">My LinkedIn</a><br/>
				<a href="https://github.com/meingorn">查看我的源代码</a><br/>
        <a href="https://www.linkedin.com/in/maximeingorn/">连接我在LinkedIn</a><br/>
		    </p>
		  </div>

		</div>
    );
  }
}

export default Sidebar;
