import React, { useState } from 'react';
import Button from '@mui/material/Button';
import './edit.css'

function Edit(props) {
    const handleClick = () => {
        if (props.text === "Edit") 
            {props.setText("Done")}
        else 
            {props.setText("Edit")}
    }
    return (
        <div id="edit-button">
        <Button onClick={handleClick}> 
            { props.text }
        </Button>        
        </div>
    );
}



export default Edit;
