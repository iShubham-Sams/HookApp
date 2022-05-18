import React, { useState } from "react";

const Handlingevent =()=>{
    const bgColor="red"
    const [oilc,newc]=useState(bgColor);

    const ChangColor =()=>{
        newc("green")
    }
    const retColor =()=>{
        
        newc("red")
    }

    

    return(
        <>
        <div style={{backgroundColor:oilc}}>
            <button onClick={ChangColor} onDoubleClick={retColor} >click me</button>
        </div>
        </>
    )

}
export default Handlingevent
