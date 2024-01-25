import React, {Component} from "react";
import './pictures.scss';
import pic from "./allPic";
import PictureItem from "./PictureItem";

export default class Pictures extends Component {
    render() {
        return(
            <>
            <div className="wrapper__pictures">
            {pic.map(elem => <PictureItem 
                                        key = {elem.id}
                                        url = {elem.url}
                                        />)}
                
            </div>
            </>
        )
    }
}