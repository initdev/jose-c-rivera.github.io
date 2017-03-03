/**
 * File: northAmerica.js
 * Purpose: Cuisine map for the North American and Caribbean region
 * @AUTHOR: Jose Rivera
 * Course: CS 2212
 */
import React, { Component } from 'react'
import {Link} from 'react-router'
import ReactDOM from 'react-dom'




class NorthAmerica extends Component{
    componentDidMount() {
        const el = ReactDOM.findDOMNode(this.display);
        jQuery(el).vectorMap({
            map: 'north_america_mill',
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
                <button id="back"><Link to="/discover" style={{display: 'block', height: '100%'}}/></button>
                <h1 id="discover_header">/ NORTH AMERICA</h1>
                <div id="map" ref={display => this.display = display} style={{width: '1000px', height: '700px'}}/>
            </div>
        )
    }
}

export class northAmerica extends React.Component{
    render(){
        return(<NorthAmerica/>);
    }
}