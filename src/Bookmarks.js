import ThreeList from './List';
import './profile.css';
import { getCategories } from './data.js';
import getData from './data.js';
import { getTitleWithKey, getTitleWithPath, getUserBookmarksPaths, getUserItemsData, getUserItemsKey, getValueWithKey } from './firebase-config';
import { GetBookmarks } from './data.js';
import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import ResponsiveAppBar from './AppBar.js';

import { auth } from './firebase-config';

export default function BookmarksPage(props) {

    const user = auth.currentUser;
    let id = null;
    if (user) {
	id = user.uid;
    } else {
	console.log("no user signed in")
    }

    let bookmarkElements = [];
    if (id != null) bookmarkElements = GetBookmarks(id);

    for(let i = 0; i < bookmarkElements.length; i++){
	console.log(bookmarkElements[i]);
	//bookmarkElements[i] = getTitleWithKey(bookmarkElements[i].key);
    }

    console.log(id);

    const items: JSX.Element[] = [];
    for (let i = 0; i < bookmarkElements.length; i++) {
	items.push(
	    <div style={{textAlign: 'center'}}>
                <h3>{" " + bookmarkElements[i].title + " "}</h3>
                <p>{" " + bookmarkElements[i].description + " "}</p>
                <br></br>
            </div>
	    /*<List>
		<ListItem disablePadding>
		    <ListItemButton>
			<ListItemText primary={bookmarkElements[i].title} />
		    </ListItemButton>
		</ListItem>
	    </List>*/
	);
    }

    if (id == null) items.push(<p>Error: You must be logged in to view your bookmarks</p>);
    else if (items.length == 0) items.push(<p>You have no bookmarks</p>);

    return(
	<div>
	    <ResponsiveAppBar />
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
	</div>
    );
}
