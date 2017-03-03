/**
 * File: discover.js
 * Purpose: Allows the user to pick from a continental map,
 *          then they will be presented a map to choose cuisine from
 * @AUTHOR: Jose Rivera
 * Course: CS 2212
 */
import React from 'react'
import {Link} from 'react-router'

let Discover = React.createClass({

    getInitialState(){
        return{}
    },

    render(){
        return(
            <div>
                <h1 id="discover_header">/ DISCOVER</h1>
                <button id="back"><Link to="/menu" style={{display: 'block', height: '100%'}}/></button>

                <li><Link to="/">LOG OUT</Link></li>

                <button id="nAmerica"><Link to="/NorthAmerica" style={{display: 'block', height: '100%'}}/></button>
                <button id="sAmerica"><Link to="/SouthAmerica" style={{display: 'block', height: '100%'}}/></button>
                <button id="Europe"><Link to="/Europe" style={{display: 'block', height: '100%'}}/></button>
                <button id="AsiaME"><Link to="/Asia" style={{display: 'block', height: '100%'}}/></button>
                <button id="Africa"><Link to="/Africa" style={{display: 'block', height: '100%'}}/></button>
                <button id="Australia"><Link to="/Australia" style={{display: 'block', height: '100%'}}/></button>
            </div>
        )
    },
});

export class DiscoverApp extends React.Component{
    render(){
        return(<Discover/>);
    }
}