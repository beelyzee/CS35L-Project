import Edit from './Edit';
import TextField from '@mui/material/TextField';
import './editable-profile.css'
import Button from '@mui/material/Button';
import getData from "./data.js";
import { updateData } from "./data.js";
import { getState } from 'react';
import { useState, useEffect } from 'react';
import { createItem } from './data.js';
import { deleteItem } from './data.js';
import { getItemKey } from './data.js';
import { createBookmark } from './data.js';
import { getTopRankedItems } from './data.js';
import { getBookmarks } from './data.js';
import { getMatchingUsers } from './data.js';

function EditableProfile(props) {

    //const [reload, setReload] = useState(false);
    const [refresh, setRefresh] = useState(false);
    const [editType, setEditType] = useState("none");
    const listCategories = props.categories;
    const [load, loadState] = useState({
        isLoading: true,
        cats: [...Array(listCategories.length)].map(e => [])
    });


    useEffect(() => {
        const getDataWrapper = async () => {
	    for (let i = 0; i < listCategories.length; i++) {
		const response = await getData(props.username, listCategories[i]);
		const tempCategories = load.cats;
		tempCategories[i] = response;
		loadState({
		    isLoading: false,
                    cats: tempCategories
		});
	    }
        }

        if (load.isLoading) getDataWrapper();
    });


    const elements: JSX.Element[] = [];
    
    const handleClick = (category) => {
	createItem(props.username, category);
	//setReload(!reload);
	loadState({
	    isLoading: true,
	    cats: load.cats
	});
    }
    const handleDelete = (category, index, category_index) => {
	deleteItem(props.username, category, index);
	//setReload(!reload);
	const tempCategories = load.cats;
	tempCategories[category_index] = [];
	loadState({
	    isLoading: true,
	    cats: tempCategories
	});
    }    
    const handleEdit = (category, index, replacement, type, category_index) => {
	let replace = {title: "", description: ""};
	let tempCategories = load.cats;
	
	if (type == "title") {
	    replace.title = replacement;
	    replace.description = load.cats[category_index][index].description;
	    tempCategories[category_index][index].title = replacement;
	} else if (type == "description") {
	    replace.title = load.cats[category_index][index].title;
	    replace.description = replacement;
	    tempCategories[category_index][index].description = replacement;
	}

	updateData(props.username, category, index, replace);

	if (type != editType && editType != "none") {
	    setEditType(type);
	    loadState({
		isLoading: false,
		cats: tempCategories
	    });
	    //setReload(!reload);
	}
    }
    
    for (let i = 0; i < listCategories.length; i++) {
	let listElements = []
	if (load.cats != null)
	    listElements = load.cats[i];/*getData(props.username, listCategories[i]);*/
	const items: JSX.Element[] = [];

	for (let k = 0; k < listElements.length; k++) {
	    const itemKey = getItemKey(props.username, listCategories[i], k);
	    items.push(
		<div key={listCategories[i] + "-editable-item-" + itemKey + "-tag-" + listElements[k].title}>	    
		    <TextField placeholder='Item' fullWidth defaultValue={listElements[k].title} onChange={e => handleEdit(listCategories[i], k, e.target.value, "title", i)}/>
		    <br></br>
		    <TextField  placeholder='Justification' multiline fullWidth defaultValue={listElements[k].description} onChange={e => handleEdit(listCategories[i], k, e.target.value, "description", i)}/>
		    <div className='delete-item'><Button  key={listCategories[i] + "-item-" + itemKey + "-delete-button"} onClick={() => handleDelete(listCategories[i], k)}>Delete previous item</Button></div>
		    <br></br>
		</div>
	    );
	}

	items.push(
	    <div className='add-item' key={"cat-" + i + "-" + listCategories[i] + "-add-item-button-div"}>
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
