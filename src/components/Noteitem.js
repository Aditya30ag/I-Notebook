import React,{useContext} from "react";
import Notecontext from '../context/notes/NotesContext';

export default function Noteitem(props) {
  const a=useContext(Notecontext)
  const deletenote=()=>{
    a.deleteNotes(props.note._id)
    props.showalert()
  }
  return (
    <div className="col-md-3">
      <div className="card my-3" style={{backgroundColor:'#DED9DF'}}>
        <div className="card-body">
          <h5 className="card-title">{props.note.title}</h5>
          <p className="card-text">
          {props.note.discription}
          </p>
          <div className="d-flex justify-content-end">
          <i className="fa-regular fa-trash-can" onClick={deletenote}></i>
          <i className="fa-regular fa-pen-to-square mx-4" onClick={()=>{props.updatenote(props.note)}}></i>
          </div>
        </div>
      </div>
    </div>
  );
}
