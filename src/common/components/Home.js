import React, { Component } from 'react';
import Banner from './layout/Banner';
import About from './About';
import Portfolio from './Portfolio'
import Services from './Services'

class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      showAbout: false,
      showPortfolio: false,
      showContact: false
    };
    this.eventToggleSidebar = this.eventToggleSidebar.bind(this);
  }

  eventToggleSidebar(e) {
    e.preventDefault();
    this.props.toggleSidebar(!this.props.layout.sidebarOpen);
  }

  render() {

    return (

      <div className="posts">

  			<div className="post banner">
          <h3 className="post-title">I{`'`}m an NYC-based web developer who likes to build things with React,{` `} JavaScript and Rails. I{`'`}m interested in using the power of the internet to improve our lives. I also enjoy cooking,{` `} coffee,{` `} and music. </h3>
          <div className="homeExpander">
            <a href="#" onClick={() => this.setState({ showAbout: false } ? { showAbout: true } : { showAbout: false })}> More about me ▼ </a>{this.state.showAbout ? <About /> : null}
            <br />
            <a href="#" onClick={() => this.setState({ showPortfolio: false } ? { showPortfolio: true } : { showPortfolio: false })}> My portfolio ▼ </a>{this.state.showPortfolio ? <Portfolio /> : null}
            <br />
            <a href="#" onClick={() => this.setState({ showContact: false } ? { showContact: true } : { showContact: false })}> Contact Me ▼ </a>{this.state.showContact ? <Services /> : null}
          </div>
			  </div>

  		</div>

    );
  }
}

export default Home;
