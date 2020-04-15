import React, { Component } from "react";
import "./CourseForm.css";

class CourseForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="modal card">
        <div className="modal_content">
          <label htmlFor="name">Course name</label>
          <input type="text" name="name" id="name" />
          <label htmlFor="image-url">Image URL</label>
          <input type="text" name="image-url" id="image-url" />
          <label htmlFor="description">Description</label>
          <input type="text" name="description" id="description" />
          <label htmlFor="rating">Rating</label>
          <input type="number" name="rating" id="rating" />
        </div>
        <div className="modal_actions">
          <button id="cancelButton" onClick={this.props.showModal}>
            Cancel
          </button>
          <button id="addButton">Add</button>
        </div>
      </div>
    );
  }
}

export default CourseForm;
