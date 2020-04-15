import React, { Component } from "react";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import CourseItem from "./components/CourseItem/CourseItem"

class App extends Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <div className="app">
        <HeaderComponent />
        <main>
          <section id="entry-text" className="card">
            <p>List of your favourite courses</p>
            <input type="text" placeholder="Search for a course..." name="filterInput" id="filterInput"/>
            <select id="sortBy">
              <option defaultChecked>Sort by</option>
              <option>Title</option>
              <option>Rating</option>
            </select>
          </section>
          <ul id="course-list">
            <CourseItem/>
            <CourseItem/>
            
          </ul>
        </main>
      </div>
    );
  }
}

export default App;
