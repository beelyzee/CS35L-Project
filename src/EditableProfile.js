import Edit from './Edit';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import getData from "./data.js";
import { updateData } from "./data.js";
import { getState } from 'react';
import { useState } from 'react';
import { createItem } from './data.js';
import { deleteItem } from './data.js';

function EditableProfile(props) {

    const [reload, setReload] = useState(false);
    const listCategories = props.categories;
    const elements: JSX.Element[] = [];
    
    const handleClick = (category) => {
	createItem(props.username, category);
	console.log("Handled addition");
	setReload(!reload);
    }
    const handleDelete = (category, index) => {
//	console.log("Help!!");
	deleteItem(props.username, category, index);
	console.log("Handled deletion");
	setReload(!reload);
    }

    for (let i = 0; i < listCategories.length; i++) {
	const listElements = getData(props.username, listCategories[i]);
	const items: JSX.Element[] = [];

	for (let k = 0; k < listElements.length; k++) {
	    items.push(
		<div key={listCategories[i] + "-editable-item-" + k + "-tag-" + listElements[k].title}>	    
		    <TextField fullWidth defaultValue={listElements[k].title} onChange={e => updateData(props.username, listCategories[i], k, {title: e.target.value, description: listElements[k].description})} />
		    <br></br>
		    <TextField multiline fullWidth defaultValue={listElements[k].description} onChange={e => updateData(props.username, listCategories[i], k, {title: listElements[k].title, description: e.target.value})}/>		    
		    <Button key={listCategories[i] + "-item-" + k + "-delete-button"} onClick={() => handleDelete(listCategories[i], k)}>Delete previous item</Button>
		    <br></br>
		</div>
	    );
	}

	items.push(
	    <div>
		<Button key={listCategories[i] + "-add-item-button"} onClick={() => handleClick(listCategories[i])}>Add item in {listCategories[i]}</Button>
	    </div>
	);
	
	elements.push(
	    <form name={listCategories[i]}>
		<h1>{listCategories[i]}</h1>
		{items}
	    </form>
	);
		   
    }

    return (
            <div id='test'>
            <Edit text={props.text} setText={props.setText}/>
            <div className="edit-items">
	    {elements}
            </div>
        </div>
    );
}

export default EditableProfile;
