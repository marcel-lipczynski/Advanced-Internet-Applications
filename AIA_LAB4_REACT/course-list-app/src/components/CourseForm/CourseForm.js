import React, { Component } from "react";

class CourseForm extends Component {
  // constructor(){
  //     super();
  // }

  redner() {
    return (
      <div className="modal_card">
        <div className="modal_content">
          <label for="title">Course title</label>
          <input type="text" name="title" id="title" />
          <label for="image-url">Image URL</label>
          <input type="text" name="image-url" id="image-url" />
          <label for="description">Description</label>
          <input type="text" name="description" id="description" />
          <label for="rating">Rating</label>
          <input type="number" name="rating" id="rating" />
        </div>
        <div className="modal_actions">
          <button className="">Cancel</button>
          <button className="">Add</button>
        </div>
      </div>
    );
  }
}

export default CourseForm;
