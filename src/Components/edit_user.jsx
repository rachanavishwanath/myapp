import React from 'react';
import { getUser, editUser, deleteUser } from '../util/users';
import './edit_user.scss';
import Modal from 'react-modal';
import Greetings from './greetings';

Modal.setAppElement('#root');

export default class EditUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null, 
            first_name: '',
            last_name: '',
            address1:'',
            address2: '',
            city: '',
            state: '',
            zip: '',
            gender: '',
            age: '',
            amount: '',
            showModal: false
        }
        this.update = this.update.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal(e) {
        e.preventDefault();
        this.setState({ showModal: true })
    }

    handleCloseModal(e) {
        e.preventDefault();
        this.setState({ showModal: false })
    }

    componentDidMount(){
        const userId = Number(this.props.location.pathname.split('/')[2]);
        getUser(userId).then(user => {
            let first_Name = user.first_name;
            let last_Name = user.last_name;
            let address1 = user.address.address1;
            let address2 = user.address.address2;
            let state = user.address.state;
            let city = user.address.city;
            let zip = user.address.zip;
            let gender = user.gender;
            let age = user.age;
            let amount = user.order_total.amount;
            this.setState({
                user: user,
                first_name: first_Name,
                last_name: last_Name,
                address1: address1,
                address2: address2,
                state: state,
                city: city,
                zip: zip,
                gender: gender,
                age: age,
                amount: amount
            })
        })
    }
    update(e, field) {
        switch(field) {
            case 'first_name':
                this.setState({ [field]: e.currentTarget.value })
                break;
            case 'last_name':                
               this.setState({ [field]: e.currentTarget.value })
                break;
            case 'address1':
                this.setState({ [field]: e.currentTarget.value })
                break;
            case 'address2':
                this.setState({ [field]: e.currentTarget.value })
                break;
            case 'state':
                this.setState({ [field]: e.currentTarget.value })
                break;
            case 'city':
                this.setState({ [field]: e.currentTarget.value })
                break;
            case 'zip':
                this.setState({ [field]: e.currentTarget.value })
                break;
            case 'gender':
                this.setState({ [field]: e.currentTarget.value })
                break;
            case 'age':
                this.setState({ [field]: Number(e.currentTarget.value) })
                break;
            case 'amount':
                this.setState({ [field]: Number(e.currentTarget.value) })
                break;
        }
    }

    handleClick(e, action) {
        switch(action) {
            case 'save':
                const data = {
                    first_name: this.state.first_name,
                    last_name: this.state.last_name,
                    address: {
                        address1: this.state.address1,
                        address2: this.state.address2,
                        city: this.state.city,
                        state: this.state.state,
                        zip: this.state.zip,
                    },
                    gender: this.state.gender,
                    age: this.state.age,
                    order_total: {
                        amount: this.state.amount,
                    }
                }
                console.log(editUser);
                editUser(this.state.user.id, data).then(() => {
                    this.props.history.push("/");
                });
                
                break;
            case 'cancel':
                this.props.history.push("/");
                break;
        }
    }

    render() {
        const customStyles = {
            content : {
                top                   : '50%',
                left                  : '50%',
                right                 : 'auto',
                bottom                : 'auto',
                marginRight           : '-50%',
                transform             : 'translate(-50%, -50%)',
                backgroundColor       : '#f8b636',
        }};
        if (this.state.user === null) return null;
        return (
            <div className="edit-user">
                <Greetings
                    history={this.props.history}
                />
                <h1>Edit user</h1>
                <form className="edit-user-form">
                    <div className="edit-name">
                        <label>First Name:
                            <input type="text" 
                                value={this.state.first_name}
                                onChange={(e) => this.update(e, 'first_name')}    
                            />
                        </label>
                        <label>Last Name:
                            <input type="text" 
                                value={this.state.last_name}
                                onChange={(e) => this.update(e, 'last_name')}    
                            />
                        </label>
                    </div>
                    <div className="edit-address">
                        <label>Address line 1:
                                <input type="text" 
                                    value={this.state.address1}
                                    onChange={(e) => this.update(e, 'address1')}    
                                />
                        </label>
                        <label>Address line 2:
                            <input type="text" 
                                value={this.state.address2}
                                onChange={(e) => this.update(e, 'address2')}    
                            />
                        </label>
                        <label>City:
                            <input type="text" 
                                value={this.state.city}
                                onChange={(e) => this.update(e, 'city')}    
                            />
                        </label>
                        <label>State:
                            <input type="text" 
                                value={this.state.state}
                                onChange={(e) => this.update(e, 'state')}    
                            />
                        </label>
                        <label>Zip:
                            <input type="text" 
                                value={this.state.zip}
                                onChange={(e) => this.update(e, 'zip')}    
                            />
                        </label>
                    </div>
                    <label>Gender:
                        <input type="text" 
                            value={this.state.gender}
                            onChange={(e) => this.update(e, 'gender')}    
                        />
                    </label>
                    <label>Age:
                        <input type="text" 
                            value={this.state.age}
                        onChange={(e) => this.update(e, 'age')}    
                        />
                    </label>
                    <label>Amount:
                        <input type="text" 
                            value={this.state.amount}
                        onChange={(e) => this.update(e, 'amount')}    
                        />
                    </label>
                    <div className="footer-buttons">
                        <button onClick={e => this.handleOpenModal(e)}>Delete User</button>
                        <button onClick={e => this.handleClick(e, 'save')}>Save User</button>
                        <button onClick={e => this.handleClick(e, 'cancel')}>Cancel</button>
                    </div>
                </form>
                <Modal
                    isOpen={this.state.showModal}
                    onRequestClose={e => this.handleCloseModal(e)}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <div className="react-modal">
                        <h3 className="h3-modal">Are you sure?</h3>
                        <div className="footer-buttons">
                            <button className="login-button" onClick={e => {
                                deleteUser(this.state.user.id);
                                this.handleCloseModal(e);
                                this.props.history.push("/");
                            }}>Yes</button>
                            <button className="login-button" onClick={e => this.handleCloseModal(e)}>Cancel</button>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}