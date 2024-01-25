import React, { Component } from 'react';
import Country from "./Country";
import City from "./City";
import Founded from "./Founded";

export default class Content extends Component{
    render(){
        return(
            <>
                <div className="wrapper__content">
                    <Country/>
                    <City/>
                    <Founded/>
                </div>
            </>
        )
    }
    
}