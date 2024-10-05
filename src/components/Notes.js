/*import React, { useContext, useEffect, useRef, useState } from "react";
import Notecontext from "../context/notes/NotesContext";
import Noteitem from "./Noteitem";
import Modal2 from "./Modal2";
import { useNavigate } from "react-router-dom";

export default function Notes(props) {
  const ref = useRef(" ");
  const refclose = useRef(" ");
  const navigate = useNavigate();
  const a = useContext(Notecontext);

  const [notes, setnotes] = useState({
    id: "",
    title: "",
    discription: "",
    tags: "",
  });
  const onchange = (e) => {
    setnotes({ ...notes, [e.target.name]: e.target.value });
  };
  const handleonClick = (e) => {
    e.preventDefault();
    a.updateNotes(notes.id, notes.title, notes.discription, notes.tags);
    refclose.current.click();
    props.showalert("success", "Note has been Updated");
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      a.getNotes();
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);

  const updatenote = (note) => {
    ref.current.click();
    setnotes({
      id: note._id,
      title: note.title,
      discription: note.discription,
      tags: note.tags,
    });
    console.log(notes);
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        ref={ref}
        style={{ display: "none" }}
      >
        Update a Note
      </button>
      <div className="modal" tabindex="-1" >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <Modal2 notes={notes} onchange={onchange}/>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={refclose}
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={handleonClick}>
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <h1>Your Notes</h1>
        {notes.length === 0 && "Add a Note"}
        {a.notes.map((note) => {
          return (
            <Noteitem
              key={note._id}
              updatenote={updatenote}
              note={note}
              showalert={props.showalert}
            />
          );
        })}
      </div>
    </>
  );
}
/*
<button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        ref={ref}
        style={{ display: "none" }}
      >
        Update a Note
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        style={{marginTop:"100px"}}
      >
        <div className="modal-dialog">
          <div className="modal-content" style={{background:"linear-gradient(#000000,#34053E)"}}>
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Update a Note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <Modal2 notes={notes} onchange={onchange} />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={refclose}
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={handleonClick}>
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
*/
// App.js or index.js
import React, { useContext, useEffect, useState } from "react";
import Notecontext from "../context/notes/NotesContext";
import Noteitem from "./Noteitem";
// import Modal2 from "./Modal2";
import { useNavigate } from "react-router-dom";
import Modal2 from "./Modal2";

export default function Notes (props) {
  const a = useContext(Notecontext);
  const navigate = useNavigate();

  const [notes, setnotes] = useState({
    id: "",
    title: "",
    discription: "",
    tags: "",
  });
  const onchange = (e) => {
    setnotes({ ...notes, [e.target.name]: e.target.value });
  };
  const handleonClick = (e) => {
    e.preventDefault();
    a.updateNotes(notes.id, notes.title, notes.discription, notes.tags);
    //refclose.current.click();
    props.showalert("success", "Note has been Updated");
    hideModal();
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      a.getNotes();
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);

  const updatenote = (note) => {
    //ref.current.click();
    showModal();
    setnotes({
      id: note._id,
      title: note.title,
      discription: note.discription,
      tags: note.tags,
    });
  };

  const Modal = ({ show, handleClose, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
        <section className="modal-main" style={{background: "linear-gradient(#34053E,black)"}}>
          {children}
          <button onClick={handleClose} className="btn btn-outline-secondary" style={{ backgroundColor: "#34053E", color: "whitesmoke" }}>Close</button>
          <button onClick={handleonClick} className="btn btn-outline-secondary" style={{ backgroundColor: "#34053E", color: "whitesmoke", marginLeft:"10px" }}>Save changes</button>
        </section>
      </div>
    );
  };
  
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  return (
    <div className="App">
      <Modal show={show} handleClose={hideModal}>
        <Modal2 notes={notes} onchange={onchange}/>
      </Modal>
      <div className="row my-3">
        <h1>Your Notes</h1>
        {notes.length === 0 && "Add a Note"}
        {a.notes.map((note) => {
          return (
            <Noteitem
              key={note._id}
              updatenote={updatenote}
              note={note}
              showalert={props.showalert}
            />
          );
        })}
      </div>
    </div>
  );
}

