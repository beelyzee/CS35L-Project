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
import { getUsername } from './data.js';

function Profile() {

    let { userID } = useParams();
    let UID = userID.substring(1);
  //  console.log(userID); 
  //  console.log(UID);

    
    const userName = getUsername(UID);

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

	if (load.isLoading) getDataWrapper();
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
                <h1>{userName}'s Profile</h1>
                <div className= 'display-lists'>
		{lists}
                </div>
            </div>
            );
    }

    else if (UID == "null" || UID == "" || UID == null){
        return(
            <div>
                <ResponsiveAppBar />
                <div className='error-message'>
                <h1>Error: Cannot display profile</h1>
                <h2>Possible Reasons:</h2>
                    <ul>
                        <li>You are trying to view your profile and you are not logged in</li>
                        <br></br>
                        <li>You searched for an invalid profile</li>
                    </ul>
                </div>
            </div>
        );
    }

    else if (id == null || id != UID) {
        console.log({id})
        console.log({userName})
        return (
            <div className='full-page'>
                <ResponsiveAppBar />
                <h1>{userName}'s Profile</h1>
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
