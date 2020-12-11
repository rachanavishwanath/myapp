import React, { Component } from 'react';
import {Switch, Route, Redirect } from 'react-router-dom';
import Auth from '../Components/auth';

export const UnProtected = ({ component: Component, ...rest }) => {
    return <Route {...rest} render={(props) => {
        // return (document.cookie.includes("yucky") || document.cookie.includes("")) ? <Component {...props} /> : <Redirect to="/" />
        return (!document.cookie.includes("yummy")) ? <Component {...props} /> : <Redirect to="/" />
    }} />
}

export const Protected = ({ component: Component, ...rest }) => {
    return <Route {...rest} render={(props) => {
        return document.cookie.includes("yummy") ? <Component {...props} /> : <Redirect to="/login" />
    }}/>
}
