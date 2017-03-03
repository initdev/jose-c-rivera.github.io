/**
 * File: planner.js
 * Purpose: Feature of our application that allows the user to plan
 *          an outing by adding friends to a party
 * @AUTHOR: Jose Rivera
 * Course: CS 2212
 */
import React from 'react'
import {Link} from 'react-router'

let Planner = React.createClass({

    getInitialState(){
        return{}
    },

    render(){
        return(
            <div>
                <h1 id="discover_header">/ PLANNER</h1>
                <button id="back"><Link to="/menu" style={{display: 'block', height: '100%'}}/></button>
                <button id="addFriends"><Link to="/planner-SUB/addFriends" style={{display: 'block', height: '100%'}}>ADD FRIENDS</Link></button>
                <button id="findRestaurants"><Link to="/planner-SUB/findRestaurant" style={{display: 'block', height: '100%'}}>FIND RESTAURANTS</Link></button>
                <button id="vote"><Link to="/planner-SUB/groupVote" style={{display: 'block', height: '100%'}}>GROUP VOTE</Link></button>
            </div>
        )
    },

});

export class planner extends React.Component{
    render(){
        return(<Planner/>);
    }
}