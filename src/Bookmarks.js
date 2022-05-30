import ThreeList from './List';
import './profile.css';
import { getCategories } from './data.js';
import getData from './data.js'
import { getTitleWithKey, getTitleWithPath, getUserBookmarksPaths, getUserItemsData, getUserItemsKey, getValueWithKey } from './firebase-config';
import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";


export default function BookmarksPage(props) {
	
	const bookmarkElements = getData("example-user", "bookmarks");
	console.log(bookmarkElements);
	
	for(let i = 0; i < bookmarkElements.length; i++){
		bookmarkElements[i] = getTitleWithKey(bookmarkElements[i].key);
	}
	console.log (bookmarkElements[0]);//should now be array of titles
	
	const items: JSX.Element[] = [];
    for (let i = 0; i < bookmarkElements.length; i++) {
		items.push(
			<List>
			<ListItem disablePadding>
			  <ListItemButton>
				<ListItemText primary={bookmarkElements[i]} />
			  </ListItemButton>
			</ListItem>
		  </List>
		);

	}
	return(
		<Box sx={{ width: "100%", bgcolor: "background.paper" }}>
	    <Grid container
		  direction="column"//center the list and header
		  alignItems="center"
		  justifyContent="center">
         <Grid item xs={12}>
		   <header className="list-category">Bookmarks</header>
		   {items}
         </Grid>
       </Grid>
     </Box>
	);
}