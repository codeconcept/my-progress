import React from 'react';

export default function TechnoAdd() {
  return (
    <div className="techno-add">
      <h1>Add a techno</h1>
      <div>
        <form>
          <label htmlFor="techno-name">Name:</label>
          <br />
          <input type="text" name="techno-name" id="techno-name" />
          <br />
          <label htmlFor="techno-category">Category:</label>
          <br />
          <select name="techno-category" id="techno-category">
            <option value="">Select a category</option>
            <option value="front">Front</option>
            <option value="back">Back</option>
            <option value="fullstack">Full Stack</option>
            <option value="other">Other</option>
          </select>
          <br />
          <label htmlFor="description">Description</label>
          <br />
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
          ></textarea>
          <br />
          <input type="submit" value="Add" />
        </form>
      </div>
      <br />
    </div>
  );
}
