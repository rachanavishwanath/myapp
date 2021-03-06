import Login from './login/login';
import AfterLogin from './after_login';
import EditUser from './edit_user';
import React, {Component} from 'react';
import './reset.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import {UnProtected, Protected} from '../util/route_util';
import Footer from './footer';


const Root = () => {
    return (
    <div className="app-container">
        <h1 className="title">SnapCheck Inc Coding Challenge</h1>
        {/* <Switch> */}
        <UnProtected exact path="/login" component={Login}/>
       
        <Protected exact path="/users/:user_id" component={EditUser} />
         <Protected path="/" component={AfterLogin}/>
        {/* </Switch> */}
        <Footer/>
    </div>
    )
}

export default Root;