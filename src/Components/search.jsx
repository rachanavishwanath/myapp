import React from 'react';

export default class SearchResult extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    checkNameMatch(user, search){
        let firstNameChecker = user.first_name.toLowerCase().includes(search.toLowerCase());
        let lastNameChecker = user.last_name.toLowerCase().includes(search.toLowerCase());
        return (firstNameChecker || lastNameChecker)
    }

    render(){
        const {users, search, show} = this.props;
        const filteredUsers =  users.map(user => {
            if (this.checkNameMatch(user, search) || JSON.stringify(user.order_total.amount).includes(search)) {
                return show(user);
            }
        })
        return (
            <ul>{filteredUsers}</ul>
        )
    }
}