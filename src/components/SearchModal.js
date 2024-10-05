import React from "react";

export default function Modal(props) {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <p>{props.title}</p>
      </div>
      <div className="mb-3">
        <label htmlFor="discription" className="form-label">
          Discription
        </label>
        <p>{props.discription}</p>
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Tag
        </label>
        <p>{props.tags}</p>
      </div>
    </form>
  );
}
