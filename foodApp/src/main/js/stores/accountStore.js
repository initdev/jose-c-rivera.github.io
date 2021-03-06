/**
 * Created by Fate on 3/3/2017.
 */
import { EventEmitter } from "events"

class AccountStore extends EventEmitter {
    constructor(){
        super()
        this.userName = ''
    }
    getUser(){
        return this.userName;
    }

    changeUser(name){
        this.userName = name;
        this.emit("change");
    }
}

let accountStore = new AccountStore;
window.accountStore = accountStore;

export default accountStore