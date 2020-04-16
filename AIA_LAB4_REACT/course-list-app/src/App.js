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
      id: 3,
      courses: coursesJson.map((course) => course),
      showForm: false,
      filterInput: "",
      sortBy: "",
    };
  }

  addCourseHandler = (name, imageUrl, rating, description) => {
    this.setState((prevState) => {
      return {
        courses: [
          ...prevState.courses,
          {
            id: prevState.id + 1,
            rating: rating,
            name: name,
            description: description,
            image: imageUrl,
          },
        ],
        id: prevState + 1,
        showForm: false,
      };
    });
  };

  showModalHandler = () => {
    this.setState((prevState) => {
      return {
        showForm: !prevState.showForm,
      };
    });
  };

  deleteCourseHandler = (id) => {
    console.log(id);
    this.setState((prevState) => {
      return {
        courses: prevState.courses.filter((course) => course.id !== id),
      };
    });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const courseItems = this.state.courses
      .filter(
        (course) =>
          this.state.filterInput === "" ||
          course.name.includes(this.state.filterInput)
      )
      .sort((course1, course2) => {
        switch (this.state.sortBy) {
          case "title":
            return course1.name.localeCompare(course2.name);
          case "rating":
            return parseInt(course2.rating) - parseInt(course1.rating);
        }
      })
      .map((course) => {
        return (
          <CourseItem
            key={course.id}
            id={course.id}
            name={course.name}
            rating={course.rating}
            description={course.description}
            image={course.image}
            deleteCourse={this.deleteCourseHandler}
          />
        );
      });

    return (
      <div className="app">
        <HeaderComponent showModal={this.showModalHandler} />
        {this.state.showForm ? (
          <CourseForm showModal={this.showModalHandler} addCourse={this.addCourseHandler} />
        ) : null}
        <main>
          <section id="entry-text" className="card">
            <p>List of your favourite courses</p>
            <input
              type="text"
              placeholder="Search for a course..."
              name="filterInput"
              value={this.state.filterInput}
              id="filterInput"
              onChange={this.handleChange}
            />
            <select
              id="sortBy"
              value={this.state.sortBy}
              onChange={this.handleChange}
              name="sortBy"
            >
              <option value="">Sort by</option>
              <option value="title">Title</option>
              <option value="rating">Rating</option>
            </select>
          </section>
          <ul id="course-list">{courseItems}</ul>
        </main>
      </div>
    );
  }
}

export default App;
