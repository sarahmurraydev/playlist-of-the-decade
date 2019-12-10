import React from 'react'
import { API_URL } from './constants'


class Login extends React.Component{
    render(){
        return <div id='login'>
            <h1>This is an example of the Authorization Code flow</h1>
            <a href={`${API_URL}/api/login`} className="btn btn-primary">Log in with Spotify</a>
        </div>
    }
}

export default Login