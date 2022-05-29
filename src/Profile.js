import ThreeList from './List';
import Edit from './Edit';
import { useState } from 'react';
import './profile.css';
import EditableProfile from './EditableProfile';
import { AppBar, Button } from '@mui/material';
import ResponsiveAppBar from './AppBar';



function Profile() {

const [editText, setEditText] = useState("Edit");

    if (editText === "Edit") {
        return (
            <div className='full-page'>
                <ResponsiveAppBar />
                <Edit text={editText} setText={setEditText}/>
                <h1>FirstName LastName's Profile</h1>
                <div className= 'display-lists'>
                    <ThreeList username={"example-user"} index={0} />
                    <ThreeList username={"example-user"} index={1} />
                    <ThreeList username={"example-user"} index={2} />
                </div>
            </div>
            );
    }
    else {
        return (
            <div className='full-page'>
                <ResponsiveAppBar />
                <EditableProfile text={editText} setText={setEditText} />
            </div>
            );
        
    }
}

export default Profile;