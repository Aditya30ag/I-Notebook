import React from "react";
import "./search.css";
import SearchModal from"../components/SearchModal.js";

export default function Searchbtn(props) {
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        style={{ marginTop: "100px" }}
      >
        <div className="modal-dialog">
          <div
            className="modal-content"
            style={{ background: "linear-gradient(#000000,#34053E)" }}
          >
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Reading a Note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body"><SearchModal title={props.title} discription={props.discription} tags={props.tags}/></div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                //ref={props.refclose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <button
        className="btn btn-outline-secondary"
        id="searchbtn"
        type="submit"
        onClick={props.onsearchclick}
      >
        Search
      </button>
    </>
  );
}
