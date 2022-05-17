import React, { useState } from "react";

const Form=()=>{
    const [oldtex,newtex]=useState();
    const Change=(e)=>{
        newtex(e.target.value) 
        }
      const [newName,oldName]=useState();
    const youClick=(event)=>{
        event.preventDefault()
        oldName(oldtex)

        newpass(oldpt)
    } 
const[oldpt,newpt]=useState();
const Changetwo=(ev)=>{
    newpt(ev.target.value)
}
const[oldpass,newpass]=useState();

      
    return(
      <>
      <form onSubmit={youClick}>
      <div>
          <h1>HELLO  {newName} {oldpass}</h1>
          <input type="text" name="" id="" placeholder="ENTER YOUR NAME" onChange={Change} value={oldtex}/>

          <input 
          type="text" 
          name="" id="" 
          placeholder="ENTER YOUR password" 
          onChange={Changetwo} 
          value={oldpt}/>


          <button type="submit">click me</button>
          </div>
          </form>
      </>
    );
}
export default Form
