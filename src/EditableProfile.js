import Edit from './Edit';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import getData from "./data.js";
import { updateData } from "./data.js";
import { getState } from 'react';
import { useState } from 'react';
import { createItem } from './data.js';
import { deleteItem } from './data.js';
import { getItemKey } from './data.js';
import { createBookmark } from './data.js';
import { getTopRankedItems } from './data.js';
import { getBookmarks } from './data.js';

function EditableProfile(props) {

    const [reload, setReload] = useState(false);
    const [refresh, setRefresh] = useState(false);
    const [editType, setEditType] = useState("none");
    const listCategories = props.categories;
    const elements: JSX.Element[] = [];
    
    const handleClick = (category) => {
	createItem(props.username, category);
	setReload(!reload);
    }
    const handleDelete = (category, index) => {
	deleteItem(props.username, category, index);
	setReload(!reload);
    }    
    const handleEdit = (category, index, replacement, type) => {
	let replace = {title: "", description: ""};
	
	if (type == "title") {
	    replace.title = replacement;
	    replace.description = getData(props.username, category)[index].description;
	} else if (type == "description") {
	    replace.title = getData(props.username, category)[index].title;
	    replace.description = replacement;
	}
	
	if (type != editType && editType != "none") {
	    setEditType(type);
	    setReload(!reload);
	}

	updateData(props.username, category, index, replace);
    }
    
    for (let i = 0; i < listCategories.length; i++) {
	const listElements = getData(props.username, listCategories[i]);
	const items: JSX.Element[] = [];

	for (let k = 0; k < listElements.length; k++) {
	    const itemKey = getItemKey(props.username, listCategories[i], k);
	    createBookmark(props.username, props.username, listCategories[i], k);
	    items.push(
		<div key={listCategories[i] + "-editable-item-" + itemKey + "-tag-" + listElements[k].title}>	    
		    <TextField fullWidth defaultValue={listElements[k].title} onChange={e => handleEdit(listCategories[i], k, e.target.value, "title")}/>
		    <br></br>
		    <TextField multiline fullWidth defaultValue={listElements[k].description} onChange={e => handleEdit(listCategories[i], k, e.target.value, "description")}/>
		    <Button key={listCategories[i] + "-item-" + itemKey + "-delete-button"} onClick={() => handleDelete(listCategories[i], k)}>Delete previous item</Button>
		    <br></br>
		</div>
	    );
	}

	items.push(
	    <div key={"cat-" + i + "-" + listCategories[i] + "-add-item-button-div"}>
		<Button key={"category-" + i + "-" + listCategories[i] + "-add-item-button"} onClick={() => handleClick(listCategories[i])}>Add item in {listCategories[i]}</Button>
	    </div>
	);
	
	elements.push(
	    <form name={listCategories[i]}>
		<h1>{listCategories[i]}</h1>
		{items}
	    </form>
	);
		   
    }

    let bookmarks = getBookmarks(props.username);

    for (let i = 0; i < bookmarks.length; i++) {
	console.log(bookmarks[i]);
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
