/**
 * File: managefav.js
 * Purpose: Allows the user to see and manage their favorite restaurants
 * @AUTHOR: Yixin Li
 * Course: CS 2212
 */
import React from 'react'
import {Link} from 'react-router'

let Managefav = React.createClass({

    getInitialState(){
        return{}
    },

    render(){
        return(
            <div><h1 id="settings_header">/ FAVOURITES</h1>
                <h1>Manage favourites</h1>
                <button id="back"><Link to="/setting" style={{display: 'block', height: '100%'}}/></button>
            </div>
        )
    },
});

export class managefav extends React.Component{
    render(){
        return(<Managefav/>);
    }
}