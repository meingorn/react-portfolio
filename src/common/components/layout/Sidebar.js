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
        <Link to="/about" className="sidebar-nav-item" onClick={this.eventCloseSidebar} activeClassName="active">About</Link>
        <Link to="/portfolio" className="sidebar-nav-item" onClick={this.eventCloseSidebar} activeClassName="active">Portfolio</Link>
        <Link to="/contact" className="sidebar-nav-item" onClick={this.eventCloseSidebar} activeClassName="active">Contact</Link>
		  </nav>
		</div>
    );
  }
}

export default Sidebar;
