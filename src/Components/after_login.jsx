import React, {useState, useEffect} from 'react';
import { getAllUsers } from '../util/users';
import SearchResult from './search';
import './after_login.scss';
import { Link } from 'react-router-dom';
import Auth from './auth';
import Greetings from './greetings';

export default class AfterLogin extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            users: [],
            search: '',
            userId: ''
        }
        this.updateField = this.updateField.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.show = this.show.bind(this);
        this.logout = this.logout.bind(this);
    }
    componentDidMount(){
        getAllUsers().then(users => {
            this.setState({users: users})
        })
    }

    updateField(e){
        this.setState({search: e.currentTarget.value })
    }

    logout(e){
        Auth.signout();
        this.props.history.push('/login');
    }

    handleSearch(e) {
        const { users, search } = this.state;
        if (users.length > 0 && search !== '') {
            users.map(user => {
                if (user.first_name.contains(search) || user.last_name.contains(search) || JSON.stringify(user.order_total.amount).contains(search)) {

                }
            })
        }

    }

    show(user) {
        return <Link to={`/users/${user.id}`}>
                    <li key={user.id}className="user-details" onClick={(e) => this.setState({userId: user})}>
                    <p  className="user-full-name">{user.first_name} {user.last_name}, {user.gender} - {user.age}</p>
                    <p><strong>Address:</strong></p>
                    <ul className="address-details">
                        <li>{user.address.address1} {user.address.address2}</li>
                        <li>{user.address.city}, {user.address.state}, {user.address.zip}</li>
                    </ul>
                    <p><strong>order_total:</strong> ${user.order_total.amount/100}</p>
                </li>
            </Link>
    }

    render(){
        if (this.state.users.length  === 0) { return null;}
        const allUsers = this.state.users.map(user => {
            return this.show(user)
        })
        return (
            <div className="splash">
            <Greetings
                history={this.props.history}
            />
            <div className="after-login">
                <div>
                    <input type="text"
                        className="search-bar"
                        placeholder="search..."
                        value={this.state.search}
                        onChange={(e) => this.updateField(e)}
                    />
                </div>
                <div>
                    {this.state.search === '' &&  this.state.userId === '' ?  <ul>{allUsers}</ul> :
                        <SearchResult
                            users={this.state.users}
                            search={this.state.search}
                            show={this.show}
                        />
                }
                </div>
            </div>
            </div>
        )
    }
}