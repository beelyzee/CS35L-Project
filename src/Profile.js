import ThreeList from './List';
import Edit from './Edit';
import { useState } from 'react';
import { useEffect } from 'react';
import './profile.css';
import EditableProfile from './EditableProfile';
import { AppBar, Button } from '@mui/material';
import ResponsiveAppBar from './AppBar';
import { getCategories } from './data.js';
import { useParams } from 'react-router-dom';
import { auth } from './firebase-config';

function Profile() {

    let { userID } = useParams();
    let UID = userID.substring(1);
  //  console.log(userID); 
  //  console.log(UID);

    const [editText, setEditText] = useState("Edit");
    const [load, loadState] = useState({
	isLoading: true,
	categories: []
    });

    useEffect(() => {
	const getDataWrapper = async () => {
	    const response = await getCategories();
	    loadState({
		isLoading: false,
		categories: response
	    });
	}

	getDataWrapper();
    });
    
    const categories = load.categories; 

    let id = null;
    const user = auth.currentUser;
    if (user) {
        id = user.uid;
      } else {
        console.log("no user signed in")
      }
    
    const lists: JSX.Element[] = [];
    for (let i = 0; i < categories.length; i++) {
	lists.push(
		<ThreeList key={categories[i] + "-list"} username={UID} category={categories[i]} />
	);
    }
    
    if (editText == "Edit" && id != null && id == UID) {
        return (
            <div className='full-page'>
                <ResponsiveAppBar />
                <Edit text={editText} setText={setEditText}/>
                <h1>FirstName LastName's Profile</h1>
                <div className= 'display-lists'>
		{lists}
                </div>
            </div>
            );
    }

    else if (id == null || id != UID) {
        console.log({id})
        return (
            <div className='full-page'>
                <ResponsiveAppBar />
                <h1>FirstName LastName's Profile</h1>
                <div className= 'display-lists'>
		            {lists}
                </div>
            </div>
        )
    }

    else {
        return (
            <div className='full-page'>
                <ResponsiveAppBar />
                <EditableProfile username={UID} categories={categories} text={editText} setText={setEditText} />
            </div>
            );
        
    }
}

export default Profile;