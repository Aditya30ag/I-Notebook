import React from "react";

export default function Modal2(props) {
  return (
    <>
    <form>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          onChange={props.onchange}
          value={props.notes.title}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="discription" className="form-label">
          Discription
        </label>
        <input
          type="text"
          className="form-control"
          id="discription"
          name="discription"
          onChange={props.onchange}
          value={props.notes.discription}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Tag
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          name="tags"
          onChange={props.onchange}
          value={props.notes.tags}
        />
      </div>
    </form>
    </>
  );
}
