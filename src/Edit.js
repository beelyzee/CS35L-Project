import React, { useState } from 'react';
import Button from '@mui/material/Button';
import './edit.css'

function Edit() {
    const [text, setText] = useState("Edit")
    const handleClick = () => {
        if (text === "Edit") 
            {setText("Done")}
        else 
            {setText("Edit")}
    }
    return (
        <div id="edit-button">
        <Button onClick={handleClick}> 
            { text }
        </Button>        
        </div>
    );
}



export default Edit;