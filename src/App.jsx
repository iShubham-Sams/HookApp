import React, { useState } from "react";

const App = () => {
    let tiee = new Date().toTimeString();
    let hook = useState();
    const [value, newvalue] = useState(tiee);
    const Changetime = () => {
        tiee = new Date().toTimeString();
        newvalue(tiee);
        console.log(tiee);
    }
    return (
        <>
            <h1>{value}</h1>
            <button onClick={Changetime}> time chnage</button>
            
        </>)
}
export default App;  