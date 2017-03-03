/**
 * File: setting.js
 * Purpose: Links the user to different settingss that allows the user
 *          to change profile values
 * @AUTHOR: Yixin Li
 * Course: CS 2212
 */
import React from 'react'
import {Link} from 'react-router'

let Setting = React.createClass({

    getInitialState(){
        return{}
    },

    render(){
        return(
            <div><h1 id="settings_header">/ SETTINGS</h1>
                <button id="back"><Link to="/menu" style={{display: 'block', height: '100%'}}/></button>
                <br/>
                <button id="name"><Link to="settings/editname" style={{display: 'block', height: '100%'}}></Link></button>
                <br/>
                <button id="picture"><Link to="settings/editpic" style={{display: 'block', height: '100%'}}></Link></button>
                <br/>
                <button id="phone"><Link to="settings/editphone" style={{display: 'block', height: '100%'}}></Link></button>
                <br/>
                <button id="tastes"><Link to="settings/edittastes" style={{display: 'block', height: '100%'}}></Link></button>
                <br/>
                <button id="friends"><Link to="settings/managefriends" style={{display: 'block', height: '100%'}}></Link></button>
                <br/>
                <button id="history"><Link to="settings/orderhistory" style={{display: 'block', height: '100%'}}></Link></button>
                <br/>
                <button id="email"><Link to="settings/editemail" style={{display: 'block', height: '100%'}}></Link></button>
                <br/>
                <button id="location"><Link to="settings/editlocation" style={{display: 'block', height: '100%'}}></Link></button>
                <br/>
                <button id="password"><Link to="settings/editpassword" style={{display: 'block', height: '100%'}}></Link></button>
                <br/>
                <button id="fav"><Link to="settings/managefav" style={{display: 'block', height: '100%'}}></Link></button>
                <br/>
                <button id="language"><Link to="settings/chooselanguage" style={{display: 'block', height: '100%'}}></Link></button>
                <br/>
                <button id="delete"><Link to="settings/delete" style={{display: 'block', height: '100%'}}></Link></button>
            </div>
        )
    },
});

export class SettingApp extends React.Component{
    render(){
        return(<Setting/>);
    }
}