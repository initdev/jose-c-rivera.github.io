/**
 * Created by Fate on 3/24/2017.
 */
import React from 'react';
import { Link, browserHistory } from 'react-router';
import { NavBar } from './navbar'
import accountStore from './stores/accountStore'

let Friends = React.createClass({

    getInitialState(){

        let userName = accountStore.getUser();
        fetch('http://localhost:8080/viewAccount/view?' + 'userName=' + userName, {
            method: 'GET',
            dataType: 'json',
            headers: {
                "accept": "application/json",
                "Content-Type": "application/json"
            }
        }).then((response) => {
            return response.json();
        }).then((responseData) => {
            this.setState({email: responseData.result.friends});
        });

        return{
            userName: userName,
            friends: this.friends,
            toAdd: '',
            toRemove: '',
        }
    },

    handleAddFriendChange(e){
        e.preventDefault();
        this.setState({toAdd: e.target.value});
    },

    handleRemoveFriendChange(e){
        e.preventDefault();
        this.setState({toRemove: e.target.value});
    },

    handleAddFriend () {
        let name = accountStore.getUser();
        let add = this.state.toAdd;
        fetch('http://localhost:8080/manageAccount/addFriend?userName=' + name + '&friend=' + add, {
                method: 'POST',
                headers: {
                    "Content-Type": "json"}
            }
        ).then(res => {
            if (res.ok) {
            }
            else {
            }
        })
    },

    handleRemoveFriend () {
        let name = accountStore.getUser();
        let remove = this.state.toRemove;
        fetch('http://localhost:8080/manageAccount/addFriend?userName=' + name + '&friend=' + remove, {
                method: 'POST',
                headers: {
                    "Content-Type": "json"}
            }
        ).then(res => {
            if (res.ok) {
            }
            else {
            }
        })
    },

    render (){
        return (
            <div>
                < NavBar />
                <div className="Friends">
                    <label>Current Friends</label>
                    <label>{this.state.friends}</label>
                    <br/>
                    <input
                        type="text"
                        placeholder="Friend To Add"
                        onChange={}
                    />
                    <button
                        onKeyPress={this.handleAddFriend}
                        title="Add Friends"/>
                    <button
                        onKeyPress={this.handleRemoveFriend}
                        title="Remove Friend"/>
                </div>
            </div>
        )
    }
});