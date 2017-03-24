/**
 * File: createprofile.js
 * Purpose: After account creation the users will be
 *          will be taken to this view to create a profile.
 * @AUTHOR: Ryan Kennedy
 * Course: CS 2212
 */
import React from 'react';
import Select from 'react-select';
import { Link, browserHistory } from 'react-router'
import AccountStore from "./stores/accountStore"
require('react-select/dist/react-select.css');

var Profile = React.createClass({
    getInitialState(){
        return{
            email: '',
            phoneNum: '',
            location: '',
            value: [],
            options : [
                { value: 'sweet', label: 'Sweet' },
                { value: 'spicy', label: 'Spicy' },
                { value: 'hot', label: 'Hot' },
                { value: 'sour', label: 'Sour' },
                { value: 'vegetarian', label: 'Vegetarian' },
                { value: 'vegan', label: 'Vegan' },
                { value: 'sweet', label: 'Sweet' }]
        }
    },

    handleEmailChange(e){
        e.preventDefault();
        this.setState({email: e.target.value});
    },

    handlePhoneChange(e){
        e.preventDefault();
        this.setState({phoneNum: e.target.value});
    },

    handleLocationChange(e){
        e.preventDefault();
        this.setState({location: e.target.value});
    },

    handleSubmit(e){
        e.preventDefault();
        let name = AccountStore.getUser();
        let email = this.state.email;
        let location = this.state.location;
        let phoneNum = this.state.phoneNum;
        let tastes = this.state.value;
        fetch('http://localhost:8080/createProfile/create?userName=' + name + '&email=' + email +
            '&location=' + location + '&phoneNumber=' + phoneNum + '&value=' + tastes, {
                method: 'POST',
                headers: {
                    "Content-Type": "json"}
            }
        ).then(res => {
            if (res.ok) {
                this.setState({authenticated: true});
                browserHistory.push('/menu')
            }
            else {
                this.setState({authenticated: false})
            }
        })
    },

    handleSelectChange (value) {
        console.log('You\'ve selected:', value);
        this.setState( {value } );
    },


    render (){
        return (
            <div className="profilesetup">
                <form onSubmit={this.handleSubmit}>
                    <strong><b> Thank you for signing up! You're almost done...</b></strong><br/>
                    <label>Email</label>
                    <div>
                        <input type = "text"
                               placeholder="Email"
                               ref="email"
                               onChange = { this.handleEmailChange } />
                    </div>
                    <label>Phone Number</label>
                    <div>
                        <input type = "text"
                               placeholder="Phone#"
                               onChange = {this.handlePhoneChange} />
                    </div>
                    <label>Location</label>
                    <div>
                        <input type = "text"
                               placeholder="Location"
                               onChange={this.handleLocationChange} />
                    </div>
                    <label>Select all flavors you enjoy!</label>
                    <Select
                        name="selectBox"
                        multi={true}
                        value={this.state.value}
                        placeholder="Select your favourite(s)"
                        options={this.state.options}
                        onChange={this.handleSelectChange}/>
                    <input type= "submit"
                           value="Finalize!" />
                </form>
            </div>
        )
    }
});

//This exports the class to be imported by index.js
export class GetProfileData extends React.Component {
    render() {
        return (<Profile/>);
    }
}
