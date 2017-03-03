/**
 * File: africa.js
 * Purpose: Cuisine map for the African region
 * @AUTHOR: Jose Rivera
 * Course: CS 2212
 */
import React, {Component} from 'react'
import {Link} from 'react-router'
import ReactDOM from 'react-dom';

class Africa extends Component{

    componentDidMount() {
        const el = ReactDOM.findDOMNode(this.display);
        jQuery(el).vectorMap({
            map: 'africa_mill',
            backgroundColor: 'transparent',
            hoverColor: true,
            regionStyle: {
                initial: {
                    fill: '#245b87'
                },
                hover: {
                    fill: "#76c4ea"
                }
            }
        });
    }

    render(){
        return(
            <div>
                <button id="back"><Link to="/discover" style={{display: 'block', height: '100%'}}></Link></button>
                <h1 id="discover_header">/ AFRICA</h1>
                <div id="map" ref={display => this.display = display} style={{width: '1000px', height: '700px'}}/>
                <li><Link to="/discover">DISCOVER</Link></li>
            </div>
        )
    }
}

export class africa extends React.Component{
    render(){
        return(<Africa/>);
    }
}