/**
 * File: profile.js
 * Purpose: Renders a profile view to the user
 * @AUTHOR: Ryan Kennedy
 * Course: CS 2212
 */
import React from 'react';
import { Link } from 'react-router'

var viewProfile = React.createClass({

    render (){
        return (
            <div className="profile">
                Hi a profile goes here
            </div>
        )
    }
});

export class Profile extends React.Component{
    render(){
        return(<viewProfile/>);
    }
}