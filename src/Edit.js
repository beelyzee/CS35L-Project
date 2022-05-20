import React, { useState } from 'react';
import Button from '@mui/material/Button';

function Edit(props) {
    const handleClick = () => {
        if (props.text === "Edit") 
            {props.setText("Done")}
        else 
            {props.setText("Edit")}
    }
    return (
        <div>
        <Button onClick={handleClick}> 
            { props.text }
        </Button>        
        <input float="right" placeholder="Username"/>
        <input type="password" placeholder="Password"/>
        </div>
    );
}



export default Edit;
