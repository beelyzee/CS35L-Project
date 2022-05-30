import * as React from 'react';
import { useState, useEffect } from 'react';
import { getCategories } from './data.js';
import { getTopRankedItems } from './data.js';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import './rankings-page.css'
import ResponsiveAppBar from './AppBar.js';


export default function RankingsPage() {
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
    
    const topRanked = getTopRankedItems(categories);

    const items: JSX.Element[] = [];
    for (let j = 0; j < categories.length; j++) {
	items.push(
	    <div style={{textAlign: 'center'}}>
		<h2>Top {categories[j]}</h2>
		<h3>{" " + topRanked[j].title + " "}</h3>
		<p>{" " + topRanked[j].description + " "}</p>
		<br></br>
	    </div>
	);
    }
    
    return (
	<div>
		<ResponsiveAppBar />
		<h1>Most Bookmarked</h1>
		<div>
		    {items}
		</div>
	</div>
    );
}
