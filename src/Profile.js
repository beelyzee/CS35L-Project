import ThreeList from './List';
import Edit from './Edit';
import { useState } from 'react';
import './profile.css';
import EditableProfile from './EditableProfile';
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
            <div>
                <Edit text={editText} setText={setEditText}/>
                <div className='display-lists'>
		{lists}
                </div>
            </div>
            );
    }
    else {
        return (
		<EditableProfile username={"example-user"} categories={categories} text={editText} setText={setEditText}/>
            );
        
    }
}

export default Profile;
