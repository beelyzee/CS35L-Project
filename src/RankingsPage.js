import * as React from 'react';
import { getCategories } from './data.js';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import './rankings-page.css'
import ResponsiveAppBar from './AppBar.js';

export default function RankingsPage() {
/*
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
<<<<<<< HEAD
	);
    }
	*/

    
    return (
	<div className='full-page'>
		<ResponsiveAppBar />
		<h1>Most Bookmarked</h1>
		<div className='container'>
			<div className='item'>
				<p>Top Movie{}</p>
			</div>
			<div className='item'>
				<p>Top Song{}</p>
			</div>
			<div className='item'>
				<p>Top TV Show{}</p>
			</div>
		</div>
	    </div>
    );
}
