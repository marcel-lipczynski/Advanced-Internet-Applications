import React, { Component } from "react";
import "./CourseForm.css"

class CourseForm extends Component {
  constructor(props){
      super(props);
  }

  render() {
    return (
      <div className="modal card">
        <div className="modal_content">
          <label for="name">Course name</label>
          <input type="text" name="name" id="name" />
          <label for="image-url">Image URL</label>
          <input type="text" name="image-url" id="image-url" />
          <label for="description">Description</label>
          <input type="text" name="description" id="description" />
          <label for="rating">Rating</label>
          <input type="number" name="rating" id="rating" />
        </div>
        <div className="modal_actions">
          <button id="cancelButton" onClick={this.props.showModal}>Cancel</button>
          <button id="addButton">Add</button>
        </div>
      </div>
    );
  }
}

export default CourseForm;
