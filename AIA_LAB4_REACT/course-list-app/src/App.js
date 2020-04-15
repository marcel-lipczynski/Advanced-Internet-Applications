import React, { Component } from "react";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import CourseItem from "./components/CourseItem/CourseItem";
import CourseForm from "./components/CourseForm/CourseForm";
import coursesJson from "./assets/courses.json";

class App extends Component {
  constructor() {
    super();
    this.state = {
      courses: coursesJson.map((course) => {
        return (
          <CourseItem
            key={course.id}
            name={course.name}
            rating={course.rating}
            description={course.description}
            image={course.image}
          />
        );
      }),
      showForm: false,
    };
    this.showModalHandler = this.showModalHandler.bind(this);
  }

  showModalHandler = () => {
    this.setState((prevState) => {
      return {
        showForm: !prevState.showForm,
      };
    });
  };

  render() {
    return (
      <div className="app">
        <HeaderComponent showModal={this.showModalHandler} />
        {this.state.showForm ? (
          <CourseForm showModal={this.showModalHandler} />
        ) : null}
        <main>
          <section id="entry-text" className="card">
            <p>List of your favourite courses</p>
            <input
              type="text"
              placeholder="Search for a course..."
              name="filterInput"
              id="filterInput"
            />
            <select id="sortBy">
              <option defaultChecked>Sort by</option>
              <option>Title</option>
              <option>Rating</option>
            </select>
          </section>
          <ul id="course-list">
            {this.state.courses}
          </ul>
        </main>
      </div>
    );
  }
}

export default App;
