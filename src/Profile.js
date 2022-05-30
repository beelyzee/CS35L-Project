import ThreeList from './List';
import Edit from './Edit';
import { useState } from 'react';
import './profile.css';
import EditableProfile from './EditableProfile';
import { AppBar, Button } from '@mui/material';
import ResponsiveAppBar from './AppBar';
import { getCategories } from './data.js';

function Profile() {

    const [editText, setEditText] = useState("Edit");
    
    const categories = getCategories(); 
    
    const lists: JSX.Element[] = [];
    for (let i = 0; i < categories.length; i++) {
	lists.push(
		<ThreeList key={categories[i] + "-list"} username={"example-user"} category={categories[i]} />
	);
    }
    
    if (editText === "Edit") {
        return (
            <div className='full-page'>
                <ResponsiveAppBar />
                <Edit text={editText} setText={setEditText}/>
                <h1>FirstName LastName\'s Profile</h1>
                <div className= 'display-lists'>
		{lists}
                </div>
            </div>
            );
    }
    else {
        return (
            <div className='full-page'>
                <ResponsiveAppBar />
                <EditableProfile username={"example-user"} categories={categories} text={editText} setText={setEditText} />
            </div>
            );
        
    }
}

export default Profile;
