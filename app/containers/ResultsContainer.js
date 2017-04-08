import React from 'react';

import Results from '../components/Results.js';
import githubHelpers from '../utils/githubHelpers.js';

class ResultsContainer extends React.Component {
  constructor() {
    super();
    this.state = { 
        isLoading: true,
        scores: [] 
    };
  }

  componentDidMount() {
      githubHelpers.battle(this.props.location.state.playersInfo)
        .then((scores) => {
            this.setState({
                scores: scores,
                isLoading: false
            })
        })
      }
  
  render() {
      return (
        <Results 
            isLoading={this.state.isLoading} 
            scores={this.state.scores}
            playersInfo={this.props.location.state.playersInfo} />
      );
  }
}

export default ResultsContainer;
