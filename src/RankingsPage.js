import * as React from 'react';
import { getCategories } from './data.js';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';

export default function RankingsPage() {
	  
    //const categories: JSX.Element[] = [];
    //for (let i = 0; i < categoryHeaders.length; i++) {

	const items: JSX.Element[] = [];
	
    const listElements = ["test", "test", "test"];
	//const listCategory = categoryHeaders[i];
	
	for (let j = 0; j < listElements.length; j++) {
	    // push items
	    items.push(
		    <Divider component="li" />
	    );
	    items.push(
		    <ListItem alignItems="flex-start">
			<ListItemIcon>{j+1}</ListItemIcon>
			<ListItemText secondary={"{} bookmarks"} primary={listElements[j]} />
		    </ListItem>
	    );
	}

	/*
	// Push top10 list for one category into container
	categories.push(
	    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', marginBottom: '3px' }}>
		<header>{listCategory}</header>
		{items}
	    </List>
	    );*/
    //}
    
    return (
	<div>
	    {items}
	</div>
    );
}
