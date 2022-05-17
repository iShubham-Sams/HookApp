import React, { useState } from "react";

const Digitalclock =()=>{
    let time =new Date().toLocaleTimeString();
    const hook =useState();
    const [old,newn]=useState(time);
    
    setInterval(() => {
        time =new Date().toLocaleTimeString();
        newn(time);
    }, 1000);
 
    
    return(
    <>
        <h1>{old}</h1>
    </>)

}

export default Digitalclock