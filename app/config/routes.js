import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory , Router, Route, IndexRoute } from 'react-router'

import Main from '../components/Main';
import Home from '../components/Home';
import PromptContainer from '../containers/PromptContainer';
import ConfirmBattleContainer from '../containers/ConfirmBattleContainer';
import ResultsContainer from '../containers/ResultsContainer';

const Routes = () => (
	<Router history={hashHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={Home} />
			<Route path='playerone' header='Player One' component={PromptContainer} />
			<Route path='playertwo/:playerone' header='Player Two' component={PromptContainer} />
			<Route path='battle' component={ConfirmBattleContainer} />
			<Route path='results' component={ResultsContainer} />
		</Route>
	</Router>
)

export default Routes;
