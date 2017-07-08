import React, { Component } from 'react';
import Banner from './layout/Banner';
import About from './About';
import Portfolio from './Portfolio'
import Services from './Services'
import {ICON_NAME} from "react-icons/lib/md"


class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      showAbout: false,
      showPortfolio: false,
      showContact: false
    };
    this.eventToggleSidebar = this.eventToggleSidebar.bind(this);
    this.handleAboutClick = this.handleAboutClick.bind(this);
    this.handlePortfolioClick = this.handlePortfolioClick.bind(this);
    this.handleContactClick = this.handleContactClick.bind(this);
  }

  eventToggleSidebar(e) {
    e.preventDefault();
    this.props.toggleSidebar(!this.props.layout.sidebarOpen);
  }

  handleAboutClick() {
    this.setState(prevState => ({
      showAbout: !prevState.showAbout,
    }))
  }

  handlePortfolioClick(e) {
    e.preventDefault();
    this.setState(prevState => ({
      showPortfolio: !prevState.showPortfolio,
    }))
  }

  handleContactClick(e) {
    e.preventDefault();
    this.setState(prevState => ({
      showContact: !prevState.showContact,
    }))
  }

  render() {

    return (

      <div className="posts">
  			<div className="post banner">
          <h3 className="post-title">I{`'`}m an NYC-based web developer who likes to build things with React,{` `} JavaScript and Rails. I{`'`}m interested in using the power of the internet to improve our lives. I also enjoy cooking,{` `} coffee,{` `} and music. </h3>
          <div className="homeExpander">
            <a href="#" onClick={this.handleAboutClick}> More about me ▼ </a>{this.state.showAbout ? <About /> : null}
            <br />
            <a href="#" onClick={this.handlePortfolioClick}> My portfolio ▼ </a>{this.state.showPortfolio ? <Portfolio /> : null}
            <br />
            <a href="#" onClick={this.handleContactClick}> Contact ▼ </a>{this.state.showContact ? <Services /> : null}
          </div>
			  </div>
  		</div>

    );
  }
}

export default Home;
