/**
 * File: editname.js
 * Purpose: Allows the user to edit their name
 * @AUTHOR: Yixin Li
 * Course: CS 2212
 */
import React from 'react'
import {Link} from 'react-router'

let Editname = React.createClass({

    getInitialState: function() {
        return {
            userName: ''
        }
    },

      handleChange(e) {
        e.preventDefault();
        this.setState({userName: e.target.value});
      },

      handleSubmit(e) {
        alert('Your username is edited: ' + this.state.userName);
        e.preventDefault();
      },

   render(){
           return(
           <div><h1 id="settings_header">/ EDIT NAME</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>New Name
                    <input type="text" value={this.state.userName} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
               <button id="back"><Link to="/setting" style={{display: 'block', height: '100%'}}/></button>
            </div>
        )
    },
});

export class editname extends React.Component{
    render(){
        return(<Editname/>);
    }
}