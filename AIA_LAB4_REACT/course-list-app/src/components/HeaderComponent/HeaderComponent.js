import React, { Component } from 'react';
import './HeaderComponent.css';

class HeaderComponent extends Component{
    // constructor(){
    //     super();
    // }

    render(){
        return(
            <header>
                <h1>Course List</h1>
                <button>Add course</button>
            </header>
        );
    }
}

export default HeaderComponent;