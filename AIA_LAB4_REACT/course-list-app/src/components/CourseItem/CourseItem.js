import React, { Component } from 'react';
import "./CourseItem.css"
import "../../App.css"

class CourseItem extends Component{
    // constructor(){
    //     super()
    // }

    render(){
        return(
            <li className="course_element">
                <div className="course_element_image">
                    <img src="https://bit.ly/3entrY5" alt="new item"/>
                </div>
                <div className="course_element_section">
                    <div className="course_element_info">
                        <h2>JavaScrip Complete Guide</h2>
                        <p className="description">Would recommend!</p>
                        <p>5/5 stars</p>
                    </div>
                    <div className="course_element_action">
                        <button id="rateButton">Rate</button>
                        <button id="deleteButton">Delete</button>
                    </div>
                </div>
            </li>
        );
    }

}

export default CourseItem;