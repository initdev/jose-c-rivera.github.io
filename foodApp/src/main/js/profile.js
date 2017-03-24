/**
 * File: profile.js
 * Purpose: Renders a profile view to the user
 * @AUTHOR: Ryan Kennedy
 * Course: CS 2212
 */
import React from 'react';
import { Link } from 'react-router';
import { NavBar } from './navbar'
import accountStore from './stores/accountStore'

let Profile = React.createClass({

    getInitialState(){

        let userName = accountStore.getUser();

        fetch('http://localhost:8080/viewAccount/view?' + 'userName=' + userName, {
                method: 'GET',
                dataType: 'json',
                headers: {
                    "accept": "application/json",
                    "Content-Type": "application/json"
                }
            }).then((response) => {
            return response.json();
        }).then((responseData) => {
            console.log(responseData.result.phoneNumber);
            console.log(responseData.result);

            this.setState({email: responseData.result.email});
            this.setState({location: responseData.result.location});
            this.setState({phoneNumber: responseData.result.phoneNumber});
            this.setState({tastes: responseData.result.tastes.toString()});
        });

        return{
            userName:userName,
            email: this.email,
            phoneNumber: this.phoneNumber,
            location: this.location,
            tastes: this.tastes
        }
    },


    //This renders the users profile to the view
    render (){
        return (
            <div>
                < NavBar />
                <h1 id="discover_header">PROFILE</h1>
                <button id="back"><Link to="/menu" style={{display: 'block', height: '100%'}}/></button>
                <h1>{this.state.userName}</h1>
                <p>username: {this.state.userName}</p>
                <p>location: {this.state.location}</p>
                <p>email: {this.state.email}</p>
                <p>phone: {this.state.phoneNumber}</p>
                <p>tastes: {this.state.tastes}</p>
            </div>
        )
    }
});

//This exports the class to be imported by index.js
export class ProfileApp extends React.Component{
    render(){
        return(<Profile/>);
    }
}