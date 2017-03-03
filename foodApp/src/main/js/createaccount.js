/**
 * File: createaccount.js
 * Purpose: This view allows the user to create an account if they don't have one
 *          at sign in.
 * @AUTHOR: Ryan Kennedy
 * Course: CS 2212
 */
import React from 'react';
import {Link} from 'react-router'

let CreateAcc = React.createClass({
    getInitialState (){
        return{
            userName : '',
            password : '',
            confirmPassword : '',
            invalidPassword : false,
            success : '',
            email  : '',
            checked : this.checked || false
        }
    },

    handleUserChange (e){
        e.preventDefault();
        this.setState({userName : e.target.value});
    },

    handlePasswordChange (e)
    {
        e.preventDefault();
        this.setState({password : e.target.value});
    },

    handleConfirmChange (e){
      e.preventDefault();
      this.setState({confirmPassword : e.target.value})
    },

    handleSubmit(e){
        e.preventDefault();
        let userName = this.state.userName;
        let password = this.state.password;
        let termsOfService = this.state.checked;
        let confirmPassword = this.state.confirmPassword;

        // Checks the confirmed password for validity
        if(password != confirmPassword) {
            this.setState({invalidPassword : true});
            alert("passwords dont match...should make a component appear to tell you this...")
            this.forceUpdate();
            return;
        }
        else{
            this.setState({invalidPassword : false});
        }
        // Checks if TOS has been agreed to
        if(termsOfService) {
            fetch('http://localhost:8080/createAccount/create?'
                + 'userName=' + userName + '&password=' + password, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "json"
                    }
                }
            ).then(res => {
                if (res.ok) {
                    this.setState({success: 'Account Created!!'});
                }
                else {
                    this.setState({
                        success: this.state.userName +
                        'Account name has already been taken..try again!'
                    });
                }
            })
        }
        else{
            alert("YOU MUST AGREE TO THE TERMS");
        }
    },

    handleClick(e){
        this.setState({checked: e.target.checked})
    },

    render : function() {
       return (

            <div id="CreateAccount">
                <form onSubmit={this.handleSubmit}>
                    <label>UserName</label>
                    <div>
                        <input type = "text"
                               placeholder="Username"
                               ref="username"
                               onChange = {this.handleUserChange} />
                    </div>
                    <label>Password</label>
                    <div>
                        <input type = "password"
                               placeholder="Password"
                               onChange = {this.handlePasswordChange} />
                    </div>
                    <label>Confirm your password</label>
                    <div>
                        <input type = "password"
                               placeholder="Confirm Password"
                               onChange={this.handleConfirmChange} />
                        {this.state.invalidPassword ? <confirmPassword /> : null}
                    </div>
                    <input type= "submit"
                    value="Create Account!" />
                    <input type = "checkbox"
                           checked = {this.state.checked}
                           onClick = {this.handleClick}/>
                    I agree to the terms of service
                </form>

                <button><Link to="/" style={{display: 'block', height: '100%'}}>Sign In</Link></button>

            </div>
            )
        },
    });

/*
This was the class i was using to display a non matching PW error....
 */
var confirmPassword = React.createClass({
   render : function(){
       return(
           <div id="failPW">
               <label>The passwords entered do not match! Try again..</label>
           </div>
       )
   }
});



export class CreateAccount extends React.Component{
    render(){
        return(<CreateAcc/>);
    }
}