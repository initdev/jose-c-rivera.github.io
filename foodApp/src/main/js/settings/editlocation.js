/**
 * File: editlocation.js
 * Purpose: Allows the user to modify the saved location that was inputted
 *          during account creation
 * @AUTHOR: Yixin Li
 * Course: CS 2212
 */
import React from 'react'
import {Link} from 'react-router'
import accountStore from '../stores/accountStore'

let Editlocation = React.createClass({

    getInitialState: function() {
        return {
            location: ''
        }
    },

      handleChange(e) {
        e.preventDefault();
        this.setState({location: e.target.value});
      },

      handleSubmit(e) {
          e.preventDefault();
          alert('Your location has been updated: ' + this.state.location);
          let userName = accountStore.getUser();
          let newLocation = this.state.location
          fetch('http://localhost:8080/manageAccount/updateLocation?' + 'userName=' + userName + '&newLocation='
              + newLocation, {
              method: 'POST',
              headers: {}
          });
      },

   render(){
           return(
           <div><h1 id="settings_header">EDIT LOCATION</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>New Name
                    <input type="text" value={this.state.location} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
               <button id="back"><Link to="/setting" style={{display: 'block', height: '100%'}}/></button>
            </div>
        )
    },
});

export class editlocation extends React.Component{
    render(){
        return(<Editlocation/>);
    }
}