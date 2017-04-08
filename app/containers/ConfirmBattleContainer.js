import React, { PropTypes } from 'react';

import ConfirmBattle from '../components/ConfirmBattle.js';
import githubHelpers from '../utils/githubHelpers.js';

class ConfirmBattleContainer extends React.Component {
  constructor() {
    super();
    this.state = { 
        isLoading: true,
        playersInfo: []    
    };
  }
  
  componentDidMount() {
      var query = this.props.location.query;
      githubHelpers.getPlayersInfo([query.playerone, query.playertwo])
        .then((players) => {
            this.setState({
                isLoading: false,
                playersInfo: [players[0], players[1]]
            })
        })
  }

  handleInitialBattle = () => {
    this.context.router.push({
        pathname: '/results',
        state: {
            playersInfo: this.state.playersInfo
        }
    })
  }
  
  render() {
      return (
        <ConfirmBattle 
            isLoading={this.state.isLoading} 
            playersInfo={this.state.playersInfo}
            onInitialBattle={this.handleInitialBattle} />
      )
  }
}

ConfirmBattleContainer.contextTypes = {
    router: PropTypes.object.isRequired
}

export default ConfirmBattleContainer;
