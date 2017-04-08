import React, { PropTypes } from 'react';

import Prompt from '../components/Prompt.js';

class PromptContainer extends React.Component {
	constructor() {
		super();
		this.state = {
			username: '' 
		};
    }

	handleUpdateUser = (e) => {
		this.setState({
			username: e.target.value
		})
	}
  
	handleSubmitUser = (e) => {
		e.preventDefault();
		var username = this.state.username;
		this.setState({
			username: ''
		});

		if (this.props.routeParams.playerone) {
			this.context.router.push({
				pathname: '/battle',
				query: {
					 playerone: this.props.routeParams.playerone,
					 playertwo: this.state.username
				}
			})
		} else {
			this.context.router.push('/playertwo/' + this.state.username)
		}
	}
	
	render() {
		return (
			<Prompt
				onSubmitUser={this.handleSubmitUser}
				onUpdateUser={this.handleUpdateUser}
				header={this.props.route.header}
				username={this.state.username} />
		);
	}
}
 
PromptContainer.contextTypes = {
	router: PropTypes.object.isRequired 
} 

export default PromptContainer;