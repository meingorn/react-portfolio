vimport React, { Component } from 'react';
import Banner from './layout/Banner';

class Home extends Component {

  constructor(props){
    super(props);
    this.eventToggleSidebar = this.eventToggleSidebar.bind(this)
  }

  eventToggleSidebar(e) {
    e.preventDefault();
    this.props.toggleSidebar(!this.props.layout.sidebarOpen);
  }

  render() {

    return (

      <div className="posts">
  			<div className="post banner">
			    <h3 className="post-title">I like to build things with React, JavaScript and Rails. </h3>
    			<a href="#" onClick={this.eventToggleSidebar}> Find out More</a>
			  </div>
  		</div>

    );
  }
}

export default Home;
