import * as React from 'react';
import {getCategory} from './data.js';
import {getTop10} from './data.js';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';

export default function RankingsPage(props) {

    // input props.num is the number of categories

    const categories: JSX.Element[] = [];
    for (let i = 0; i < props.num; i++) {

	const items: JSX.Element[] = [];
	
	const listElements = getTop10(i);
	const listCategory = getCategory(i);
	
	for (let j = 0; j < listElements.length; j++) {
	    // push items
	    items.push(
		    <Divider component="li" />
	    );
	    items.push(
		    <ListItem alignItems="flex-start">
			<ListItemIcon>{j+1}</ListItemIcon>
			<ListItemText secondary={"{} recommendations"} primary={listElements[j]} />
		    </ListItem>
	    );
	}

	// Push top10 list for one category into container
	categories.push(
	    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', marginBottom: '3px' }}>
		<header>{listCategory}</header>
		{items}
	    </List>
	);
    }
    
    return (
	<div>
	    {categories}
	</div>
    );
}
