/**
 * File: setting.js
 * Purpose: Allows the user to change the applications language
 * @AUTHOR: Yixin Li
 * Course: CS 2212
 */
import React from 'react'
import {Link} from 'react-router'

let Chooselanguage = React.createClass({

    getInitialState(){
        return{}
    },

    render(){
        return(
            <div>
                <h1 id="settings_header">/ LANGUAGE</h1>
                <button id="back"><Link to="/setting" style={{display: 'block', height: '100%'}}></Link></button>
                <h1>Choose Your Language</h1>
                <br/>
                <select>
                  <option value ="english">English</option>
                  <option value ="frensh">Frensh</option>
                  <option value="other">Other</option>
                </select>
            </div>
        )
    },
});

export class chooselanguage extends React.Component{
    render(){
        return(<Chooselanguage/>);
    }
}