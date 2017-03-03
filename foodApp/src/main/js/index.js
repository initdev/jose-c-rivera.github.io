/**
 * File: index.js
 * Purpose: This JS file imports all the react components,
 *          and handles the navigation between all our different views
 * @AUTHOR: Ryan Kennedy
 * Course: CS 2212
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import { CreateAccount } from './createaccount'
import { GetProfileData } from './createprofile'
import { Menus } from './menu'
import { DiscoverApp } from './discover'
import { northAmerica } from './northAmerica'
import { southAmerica } from './southAmerica'
import { europe } from './europe'
import { africa } from './africa'
import { asia } from './asiaME'
import { australia } from './australia'
import { UserSignIn } from './signin'
import { SettingApp } from './setting'
import { chooselanguage } from './settings/chooselanguage'
import { deleteAcc } from './settings/delete'
import { editemail } from './settings/editemail'
import { editlocation} from './settings/editlocation'
import { editname } from './settings/editname'
import { editpassword} from './settings/editpassword'
import { editphone} from './settings/editphone'
import { editpic} from './settings/editpic'
import { edittastes} from './settings/edittastes'
import { managefav} from './settings/managefav'
import { managefriends } from './settings/managefriends'
import { orderhistory} from './settings/orderhistory'
import { planner } from './planner'
import { friendsAdd} from './planner-SUB/addFriends'
import { findRestaurant } from './planner-SUB/findRestaurant'
import { groupVote } from './planner-SUB/groupVote'


ReactDOM.render((

    <Router history = {browserHistory}>
        <Route path="/" component={UserSignIn}/>
        <Route path="/menu" component={Menus}/>
            <Route path="/createaccount" component={CreateAccount} />
            <Route path="/createprofile" component={ GetProfileData }/>
            <Route path="/discover" component={DiscoverApp}/>
            <Route path ="/setting" component={SettingApp}/>
            <Route path="/planner" component={planner}/>

                <Route path="/NorthAmerica" component={northAmerica}/>
                <Route path="/SouthAmerica" component={southAmerica}/>
                <Route path="/Europe" component={europe}/>
                <Route path="/Asia" component={asia}/>
                <Route path="/Africa" component={africa}/>
                <Route path="/Australia" component={australia}/>

                <Route path="/planner-SUB/addFriends" component={friendsAdd}/>
                <Route path="/planner-SUB/findRestaurant" component={findRestaurant}/>
                <Route path="/planner-SUB/groupVote" component={groupVote}/>

        <Route path ="/settings/chooselanguage" component={chooselanguage}/>
        <Route path ="/settings/delete" component={deleteAcc}/>
        <Route path ="/settings/editemail" component={editemail}/>
        <Route path ="/settings/editpic" component={editpic}/>
        <Route path ="/settings/editphone" component={editphone}/>
        <Route path ="/settings/editpassword" component={editpassword}/>
        <Route path ="/settings/editname" component={editname}/>
        <Route path ="/settings/edittastes" component={edittastes}/>
        <Route path ="/settings/editlocation" component={editlocation}/>
        <Route path ="/settings/managefav" component={managefav}/>
        <Route path ="/settings/managefriends" component={managefriends}/>
        <Route path ="/settings/orderhistory" component={orderhistory}/>
    </Router>

), document.getElementById('root'));

