import * as React from "react";
import getData from "./data.js";
import { getCategory } from "./data.js";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { getItemKey } from './data.js';
import { createBookmark } from './data.js';
import './list.css'
import { auth } from "./firebase-config.js";


export default function ThreeList(props) {


    /*
        function toggleBookmark(e){
      console.log('The checkbox was toggled for ' + listElements[i].title + i);
      bookmark[i] = !bookmark[i];
      if(bookmark[i]){
        writeUserBookmark(props.username, props.category, listElements[i].title, listElements[i].description, true);//creats bookmark
        console.log("bookmark created");
      }
      else{
        writeUserBookmark(props.username, props.category, listElements[i].title, listElements[i].description, false);//remove bookmark
        console.log("bookmark removed");
      }
    };

  items.push(
  <Accordion>
            <AccordionSummary
    expandIcon={<ExpandMoreIcon />}
                aria-controls={"panel" + (i+1) + "a-content"}
                id={"panel" + (i+1) + "a-header"}
            >
    <header>{listElements[i].title}</header>
      <Checkbox
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
        onChange={toggleBookmark}
      />
            </AccordionSummary>
            <AccordionDetails>
    <p>
        {listElements[i].description}
                </p>
      </AccordionDetails>
  </Accordion>
  );
    */

    const handleBookmark = (username, category, index) => {
	console.log("Bookmark created!");
	const user = auth.currentUser.uid;
	console.log(user);
	createBookmark(user, username, category, index);
   }
	  
    const listElements = getData(props.username, props.category);
   
    const items: JSX.Element[] = [];
    for (let i = 0; i < listElements.length; i++) {
	items.push(
	    <Accordion key={getItemKey(props.username, props.category, i)}>
	    <AccordionSummary
		expandIcon={<ExpandMoreIcon />}
                aria-controls={"panel" + (i+1) + "a-content"}
                id={"panel" + (i+1) + "a-header"}
            >
		<div className = "item-button-pair">
		<header>{listElements[i].title}</header>
		<div className="icon-button">
                    <IconButton key={listElements[i]} size="small" children={<AddCircleOutlineIcon></AddCircleOutlineIcon>} onClick={() => handleBookmark(props.username, props.category, i)}/>
                </div>
		    </div>
            </AccordionSummary>
            <AccordionDetails>
		<p>
		    {listElements[i].description}
                </p>
	    </AccordionDetails>
	</Accordion>
	);
    }
    
    return (
	<Box sx={{ width: "100%", bgcolor: "background.paper" }}>
	    <Grid container>
         <Grid item xs={10}>
		   <header className="list-category">{props.category}</header>
		   {items}
         </Grid>
       </Grid>
     </Box>
    );  
}
//builtupon material UI lists demonstrations
