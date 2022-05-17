import ThreeList from './List';
import Edit from './Edit';
import { useState } from 'react';
import './profile.css';

function Profile() {

const [editText, setEditText] = useState("Edit");

    if (editText === "Edit") {
        return (
            <div>
                <Edit text={editText} setText={setEditText}/>
                <div className='display-lists'>
                    <ThreeList username={"example-user"} index={0} />
                    <ThreeList username={"example-user"} index={1} />
                    <ThreeList username={"example-user"} index={2} />
                </div>
            </div>
            );
    }
    else {
        return (
            <div>
                <Edit text={editText} setText={setEditText}/>
                <div className="edit-items">
                    <form name="TV Shows">
                        <h1>TV Shows</h1>
                        <input type="text" placeholder='Show 1' />
                        <br></br>
                        <input type="text" placeholder='Show 2' />
                        <br></br>
                        <input type="text" placeholder='Show 3' />
                    </form>
                    <form name="Movies">
                        <h1>Movies</h1>
                        <input type="text" placeholder='Movie 1' />
                        <br></br>
                        <input type="text" placeholder='Movie 2' />
                        <br></br>
                        <input type="text" placeholder='Movie 3' />
                    </form>
                    <form name="Songs">
                        <h1>Songs</h1>
                        <input type="text" placeholder='Song 1' />
                        <br></br>
                        <input type="text" placeholder='Song 2' />
                        <br></br>
                        <input type="text" placeholder='Song 3' />
                    </form>
                </div>
            </div>)
            ;
        
    }
}

export default Profile;