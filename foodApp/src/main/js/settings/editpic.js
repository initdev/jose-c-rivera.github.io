/**
 * File: editpic.js
     * Purpose: Allows the user to upload/change their profile picture
 * @AUTHOR: Yixin Li
 * Course: CS 2212
 */
import React from 'react'
import {Link} from 'react-router'

let Editpic = React.createClass({

    getInitialState: function() {
        return {
        }
    },


      handleSubmit(e) {
        alert('Your Profile Picture is edited: ');
        e.preventDefault();
      },

   render(){
           return(
           <div><h1 id="settings_header">/ EDIT PICTURE</h1>
                <form onSubmit={this.handleSubmit}>
                //need the picture upload compoents
                    <input type="submit" value="Submit" />
                </form>
               <button id="back"><Link to="/setting" style={{display: 'block', height: '100%'}}/></button>
            </div>
        )
    },
});

export class editpic extends React.Component{
    render(){
        return(<Editpic/>);
    }
}