import React from "react";
import "./search.css";

export default function Search(props) {
  return (
    <div
      className="container2"
      style={{ display: props.value.length !== 0 ? "" : "none" }}
    >
      {props.value.length !== 0 && props.results.length>0 &&
        props.results.map((result, id) => {
          return (
            <div
              key={id}
              onClick={() => {
                props.onSearch(result.title);
              }}
              id="style"
            >
              {result.title}
            </div>
          );
        })}
        {props.results.length===0 &&
        <div>Result not found</div>
        }
        
    </div>
  );
}
