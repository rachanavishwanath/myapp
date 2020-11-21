import React, { useState } from 'react';
import AfterLogin from '../after_login';
// import { useAuth0 } from "@auth0/auth0-react";
import './login.scss';
import Auth from '../auth';

export default (props) => {
    const [userName, setuserName] = useState("");
    const [password, setpassword] = useState("");
    const [AuthService, setAuthService] = useState(false);

    function Login() {
        Auth.authenticate(userName).then(() => {
            this.props.history.push("/");
        });
        setAuthService(true)
    }

    function Logout() {
        Auth.signout();
        setAuthService(false);
        setuserName("");
        setpassword("");
    }

    function updateField(e, field) {
        switch(field) {
            case 'userName':
                setuserName(e.currentTarget.value);
                break;
            case 'password':
                setpassword(e.currentTarget.value);
                break;
        }
    }
    // const { loginWithRedirect } = useAuth0();
    return  (
        <div className="login-component">
            <form className="login-form">
                <label>Username
                    <input 
                        type="text" 
                        onChange={(e) => updateField(e, 'userName')}
                        value={userName}
                    />
                </label>
                <br/>
                <br/>
                <label>Password
                    <input 
                        type="password" 
                        onChange={(e) => updateField(e, 'password')}
                        value={password}
                        />
                </label>
                 <br/>
                 <br/>
                <button
                    className="login-button"
                    onClick={() => Login()}
                >Login</button>
            </form>
        </div>
    )
    // ) : (
    //     <div className="splash">
    //         <nav className="splash-nav">
    //             <h1 className="welcome">Welcome {userName}</h1>
    //             <button className="login-button" onClick={() => Logout()}>Log Out</button>
    //         </nav>
    //         <AfterLogin />
    //     </div>
    // )
}