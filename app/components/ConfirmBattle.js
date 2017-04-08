import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import styles from '../styles';
import UserDetails from './UsersDetails';
import UserDetailsWrapper from './UserDetailsWrapper';
import MainContainer from './MainContainer';
import Loading from './Loading';

const ConfirmBattle = (props) => {
    return props.isLoading === true
        ? <Loading text='Waiting' speed={800}  />
        : <MainContainer>
            <h1>Confirm Players</h1>
            <div className="col-sm-8-sm-offset-2">
                <UserDetailsWrapper header="Player One">    
                    <UserDetails info={props.playersInfo[0]} />
                </UserDetailsWrapper>
            </div>
            <div className="col-sm-8-sm-offset-2">
                <UserDetailsWrapper header="Player Two">    
                    <UserDetails info={props.playersInfo[1]} />
                </UserDetailsWrapper>
            </div> 
            <div className="col-sm-12" style={styles.space}> 
                <button type="button" className="btn btn-lg btn-success" onClick={props.onInitialBattle}>
                Initiate battle!!
                </button>
            </div>
            <div className="col-sm-12" style={styles.space}> 
                <Link to='/playerone'>
                    <button type="button" className= "btn btn-lg btn-danger">
                    Reselect Player!!
                    </button>
                </Link>
            </div> 
          </MainContainer>
}

ConfirmBattle.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    playersInfo: PropTypes.array.isRequired,
    onInitialBattle: PropTypes.func.isRequired
    
}

export default ConfirmBattle;