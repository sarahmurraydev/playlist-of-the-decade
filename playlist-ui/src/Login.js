import React from 'react'
// import { API_URL } from './constants'
import { connect } from 'react-redux'
import {
    getUserData
} from './actions/actionCreator';


class Login extends React.Component{
    render(){

        const {
            getProfile
        } = this.props;

        return <div id='login'>
            <h1>This is an example of the Authorization Code flow</h1>
            <a href="http://localhost:3001/api/login" className="btn btn-primary">Log in with Spotify</a>
        </div>
    }
}

const mapStateToProps = state => {
    return {
        userData: state.userData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getProfile: () => dispatch(getUserData)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)