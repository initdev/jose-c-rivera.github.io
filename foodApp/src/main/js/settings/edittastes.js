/**
 * File: edittastes.js
 * Purpose: Allows the user to edit their tastes
 * @AUTHOR: Yixin Li
 * Course: CS 2212
 */
import React from 'react'
import {Link} from 'react-router'

let Edittastes = React.createClass({

    getInitialState: function() {
        return {
            tastes: ''
        }
    },

      handleChange(e) {
        e.preventDefault();
        this.setState({tastes: e.target.value});
      },

      handleSubmit(e) {
        alert('Your tastes is edited: ' + this.state.tastes);
        e.preventDefault();
      },

   render(){
           return(
           <div><h1 id="settings_header">/ EDIT TASTES</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>New Name
                    <input type="text" value={this.state.tastes} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
               <button id="back"><Link to="/setting" style={{display: 'block', height: '100%'}}/></button>
            </div>
        )
    },
});

export class edittastes extends React.Component{
    render(){
        return(<Edittastes/>);
    }
}