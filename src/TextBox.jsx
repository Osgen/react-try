import React from 'react';

const TextBox =(props)=>{
  return (
    <input onChange={(event)=>props.onChange(event.target.value)} value={props.value} type={props.type} name={props.name} id={props.id}/>
  )
}

export default TextBox;