import React, { useState } from 'react';
import Auth from '../auth';
import AfterLogin from '../after_login';
// import { useAuth0 } from "@auth0/auth0-react";
import './login.scss';


export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            AuthService: false
        }
        this.login = this.login.bind(this);
        this.updateField = this.updateField.bind(this);
    }

    updateField(e, field) {
        switch(field) {
            case 'userName':
                this.setState({ [field]: e.currentTarget.value});
                break;
            case 'password':
                this.setState({ [field]: e.currentTarget.value});
                break;
        }
    }

    login() {
        // Auth.authenticate(this.state.userName).then(authentication => {
        //     debugger
        //     this.props.history.push("/");
        // });
        Auth.authenticate(this.state.userName);
        this.props.history.push("/");
    }

    render(){
        const { userName,  password} = this.state;
        return  (
        <div className="login-component">
            <form className="login-form">
                <label>Username
                    <input 
                        type="text" 
                        onChange={(e) => this.updateField(e, 'userName')}
                        value={userName}
                    />
                </label>
                <br/>
                <br/>
                <label>Password
                    <input 
                        type="password" 
                        onChange={(e) => this.updateField(e, 'password')}
                        value={password}
                        />
                </label>
                 <br/>
                 <br/>
                <button
                    className="login-button"
                    onClick={() => this.login()}
                >Login</button>
            </form>
        </div>
    )
    }

}



// export default (props) => {
//     const [userName, setuserName] = useState("");
//     const [password, setpassword] = useState("");
//     const [AuthService, setAuthService] = useState(false);

//     function Login() {
//         Auth.authenticate(userName).then(() => {
//             this.props.history.push("/");
//         });
//         setAuthService(true)
//     }

//     function Logout() {
//         Auth.signout();
//         setAuthService(false);
//         setuserName("");
//         setpassword("");
//     }

//     function updateField(e, field) {
//         switch(field) {
//             case 'userName':
//                 setuserName(e.currentTarget.value);
//                 break;
//             case 'password':
//                 setpassword(e.currentTarget.value);
//                 break;
//         }
//     }
//     // const { loginWithRedirect } = useAuth0();
//     return  (
//         <div className="login-component">
//             <form className="login-form">
//                 <label>Username
//                     <input 
//                         type="text" 
//                         onChange={(e) => updateField(e, 'userName')}
//                         value={userName}
//                     />
//                 </label>
//                 <br/>
//                 <br/>
//                 <label>Password
//                     <input 
//                         type="password" 
//                         onChange={(e) => updateField(e, 'password')}
//                         value={password}
//                         />
//                 </label>
//                  <br/>
//                  <br/>
//                 <button
//                     className="login-button"
//                     onClick={() => Login()}
//                 >Login</button>
//             </form>
//         </div>
//     )
//     // ) : (
//     //     <div className="splash">
//     //         <nav className="splash-nav">
//     //             <h1 className="welcome">Welcome {userName}</h1>
//     //             <button className="login-button" onClick={() => Logout()}>Log Out</button>
//     //         </nav>
//     //         <AfterLogin />
//     //     </div>
//     // )
// }
