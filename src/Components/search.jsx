import React from 'react';

export default class SearchResult extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    render(){
        const {users, search, show} = this.props;
        const filteredUsers =  users.map(user => {
            if (user.first_name.includes(search) || user.last_name.includes(search) || JSON.stringify(user.order_total.amount).includes(search)) {
                return show(user)
            }
        })
        return (
            <ul>{filteredUsers}</ul>
        )
    }
}