import React from 'react'

export default function C20241118(props) {
  const msg = (obj1, event) => {
    alert(obj1 + "//" + event.target.id);
    console.log(event);
  }

  return (
  <>
  <div>C20241118 : {props.title}</div>
  <button id="btn01" onClick={(e)=>msg("haha", e)}>안녕하세요!</button>
  </>

)

}