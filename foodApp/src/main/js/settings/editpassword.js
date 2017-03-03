/**
 * File: editpassword.js
 * Purpose: Allows the user to change their password
 * @AUTHOR: Yixin Li
 * Course: CS 2212
 */
import React from 'react'
import {Link} from 'react-router'

let Editpassword = React.createClass({

    getInitialState: function() {
        return {
            password: ''
        }
    },

      handleChange(e) {
        e.preventDefault();
        this.setState({password: e.target.value});
      },

      handleSubmit(e) {
        alert('Your password is edited: ' + this.state.password);
        e.preventDefault();
      },

   render(){
           return(
           <div><h1 id="settings_header">/ EDIT PASSWORD</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>New Name
                    <input type="text" value={this.state.password} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
               <button id="back"><Link to="/setting" style={{display: 'block', height: '100%'}}/></button>
            </div>
        )
    },
});

export class editpassword extends React.Component{
    render(){
        return(<Editpassword/>);
    }
}