/**
 * File: editphone.js
 * Purpose: Allows the user to edit their saved phone number
 * @AUTHOR: Yixin Li
 * Course: CS 2212
 */
import React from 'react'
import {Link} from 'react-router'

let Editphone = React.createClass({

    getInitialState: function() {
        return {
            phone: ''
        }
    },

      handleChange(e) {
        e.preventDefault();
        this.setState({phone: e.target.value});
      },

      handleSubmit(e) {
        alert('Your Phone Number is edited: ' + this.state.phone);
        e.preventDefault();
      },

   render(){
           return(
           <div><h1 id="settings_header">/ EDIT PHONE #</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>New Phone
                    <input type="text" value={this.state.phone} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
               <button id="back"><Link to="/setting" style={{display: 'block', height: '100%'}}/></button>
            </div>
        )
    },
});

export class editphone extends React.Component{
    render(){
        return(<Editphone/>);
    }
}
