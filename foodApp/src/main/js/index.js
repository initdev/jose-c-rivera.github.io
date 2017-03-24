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
import { ProfileApp } from './profile'
import { Menus } from './menu'
import { DiscoverApp } from './discover'
import { northAmerica } from './continents/northAmerica'
import { southAmerica } from './continents/southAmerica'
import { europe } from './continents/europe'
import { africa } from './continents/africa'
import { asia } from './continents/asiaME'
import { australia } from './continents/australia'
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

        {/*-------------------------------------------MAIN PAGES--------------------------------------*/}
        <Route path="/" component={UserSignIn}/>
        <Route path="/Menu" component={Menus}/>
        <Route path="/CreateAccount" component={CreateAccount} />
            <Route path="/CreateProfile" component={GetProfileData} />
            <Route path="/profile" component={ProfileApp}/>
        <Route path="/Discover" component={DiscoverApp}/>
        <Route path ="/Setting" component={SettingApp}/>
        <Route path="/Planner" component={planner}/>

        {/*----------------------------------------CONTINENT PAGES------------------------------------*/}
        <Route path="/NorthAmerica" component={northAmerica}/>
        <Route path="/SouthAmerica" component={southAmerica}/>
        <Route path="/Europe" component={europe}/>
        <Route path="/Asia" component={asia}/>
        <Route path="/Africa" component={africa}/>
        <Route path="/Australia" component={australia}/>

        {/*-----------------------------------------PLANNER PAGES-------------------------------------*/}
        <Route path="/planner-SUB/AddFriends" component={friendsAdd}/>
        <Route path="/planner-SUB/FindRestaurant" component={findRestaurant}/>
        <Route path="/planner-SUB/GroupVote" component={groupVote}/>

        {/*-----------------------------------------SETTINGS PAGES------------------------------------*/}
        <Route path ="/settings/ChooseLanguage" component={chooselanguage}/>
        <Route path ="/settings/Delete" component={deleteAcc}/>
        <Route path ="/settings/EditEmail" component={editemail}/>
        <Route path ="/settings/EditPic" component={editpic}/>
        <Route path ="/settings/EditPhone" component={editphone}/>
        <Route path ="/settings/EditPassword" component={editpassword}/>
        <Route path ="/settings/EditName" component={editname}/>
        <Route path ="/settings/EditTastes" component={edittastes}/>
        <Route path ="/settings/EditLocation" component={editlocation}/>
        <Route path ="/settings/ManageFav" component={managefav}/>
        <Route path ="/settings/ManageFriends" component={managefriends}/>
        <Route path ="/settings/OrderHistory" component={orderhistory}/>

        {/*-------------------------------------------------------------------------------------------*/}
    </Router>

), document.getElementById('root'));

