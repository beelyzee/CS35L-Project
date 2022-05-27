import ThreeList from './List';
import Edit from './Edit';
import { useState } from 'react';
import './profile.css';
import EditableProfile from './EditableProfile';

function Profile() {

const [editText, setEditText] = useState("Edit");

    if (editText === "Edit") {
        return (
            <div className='full-page'>
                <Edit text={editText} setText={setEditText}/>
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
                <EditableProfile text={editText} setText={setEditText} />
            </div>
            );
        
    }
}

export default Profile;