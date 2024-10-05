import React from 'react'
import Notes from './Notes';
import Addnotes from './Addnotes';

export default function Home(props) {
  return (
    <>
      <Addnotes showalert={props.showalert}/>
      <Notes showalert={props.showalert}/>
    </>
  );
}
