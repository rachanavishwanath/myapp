import React, {Component} from 'react';
import Auth from './auth';

export default class Greetings extends Component {
    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout() {
        Auth.signout();
        this.props.history.push('/login');
    }

    render() {
        const userName = localStorage.getItem('username');
        return (
            <nav className="splash-nav">
                    <h1 className="welcome">Welcome {userName}</h1>
                    <button className="login-button" onClick={() => this.logout()}>Log Out</button>
            </nav>
        )
    }

}