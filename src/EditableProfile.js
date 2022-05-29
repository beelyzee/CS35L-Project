import Edit from './Edit';
import TextField from '@mui/material/TextField';
import './editable-profile.css'

function EditableProfile(props) {
    return (
        <div id='test'>
            <Edit text={props.text} setText={props.setText}/>
            <div className="edit-items">
                <form name="TV Shows">
                    <h1>TV Shows</h1>
                    <TextField fullWidth placeholder='Show 1' />
                    <br></br>
                    <TextField multiline fullWidth placeholder='Justification?' />
                    <br></br>
                    <br></br>
                    <TextField fullWidth placeholder='Show 2' />
                    <br></br>
                    <TextField multiline fullWidth placeholder='Justification?' />
                    <br></br>
                    <br></br>
                    <TextField fullWidth type="text" placeholder='Show 3' />
                    <br></br>
                    <TextField multiline fullWidth placeholder='Justification?' />
                </form>
                <form name="Movies">
                    <h1>Movies</h1>
                    <TextField fullWidth placeholder='Movie 1' />
                    <br></br>
                    <TextField multiline fullWidth placeholder='Justification?' />
                    <br></br>
                    <br></br>
                    <TextField fullWidth placeholder='Movie 2' />
                    <br></br>
                    <TextField multiline fullWidth placeholder='Justification?' />
                    <br></br>
                    <br></br>
                    <TextField fullWidth placeholder='Movie 3' />
                    <br></br>
                    <TextField multiline fullWidth placeholder='Justification?' />
                </form>
                <form name="Songs">
                    <h1>Songs</h1>
                    <TextField fullWidth placeholder='Song 1' />
                    <br></br>
                    <TextField multiline fullWidth placeholder='Justification?' />
                    <br></br>
                    <br></br>
                    <TextField fullWidth placeholder='Song 2' />
                    <br></br>
                    <TextField multiline fullWidth placeholder='Justification?' />
                    <br></br>
                    <br></br>
                    <TextField fullWidth placeholder='Song 3' />
                    <br></br>
                    <TextField multiline fullWidth placeholder='Justification?' />
                </form>
            </div>
        </div>
    );
}

export default EditableProfile;