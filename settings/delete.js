import React from 'react'
import {Link} from 'react-router'

let Delete = React.createClass({

    getInitialState: function() {
        return {
        }
    },

      handleChange(e) {
        e.preventDefault();
      }

      handleSubmit(event) {
        alert('Your account is delete');
        event.preventDefault();
      }

   render(){
           return(
           <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Are you sure to delete your account?
                    </label>
                    <input type="submit" value="Delete" />
                </form>
                <button><Link to="/setting" style={{display: 'block', height: '100%'}}>Back to Setting</Link></button>
            </div>
        )
    },
});

export class delete extends React.Component{
    render(){
        return(<Delete/>);
    }
}
