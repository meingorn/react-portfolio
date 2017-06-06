import React, { Component } from 'react';
import { getPortfolio } from '../api/portfolio';
import classNames from 'classnames';

class Portfolio extends Component {

  render() {

  const portfolio = getPortfolio();
	const RoleRows = (roles) => {
		return roles.map((role) => {
			return (
				<div key={role.title} className="role_wrapper clearfix">
					<p className="role">
          <strong>{role.name}: </strong>{role.title}
					<span className="role_skills"> made with {role.skills}</span></p>
				</div>
			)
		});
	}

    const PortfolioRows = portfolio.map((row) => {
    	const classname = classNames('portfolio_item','clearfix',row.classname);
        return (
        <div>
        <div key={row.title}
         className={classname}>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
        </div>
        <h5><a href={row.link} target="_blank">View Demo</a><br/>
        <a href={row.github} target="_blank"> Source Code</a></h5>
				{RoleRows(row.roles)}
        <br/>
        </div>
        )
    });

    return (
        <div className="posts">
        	{PortfolioRows}
        </div>
    );

  }
}

export default Portfolio;
