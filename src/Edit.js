import React, { useState } from 'react';
import Button from '@mui/material/Button';

function Edit() {
    const [text, setText] = useState("Edit")
    const handleClick = () => {
        if (text === "Edit") 
            {setText("Done")}
        else 
            {setText("Edit")}
    }
    return (
        <div>
        <Button onClick={handleClick}> 
            { text }
        </Button>        
        <input float="right" placeholder="Username"/>
        <input type="password" placeholder="Password"/>
        </div>
    );
}



export default Edit;
