import * as React from "react";
import getData from "./data.js";
import {getCategory} from "./data.js";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import './list.css'

export default function ThreeList(props) {
    
    const listElements = getData(props.username)[props.index];
    const listCategory = getCategory(props.index);

    console.log(listCategory);

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

   const breateBookmark = (itemName) => {
       console.log(itemName)
   }

    
    const items: JSX.Element[] = [];
    for (let i = 0; i < listElements.length; i++) {
	items.push(
	<Accordion>
            <AccordionSummary
		        expandIcon={<ExpandMoreIcon />}
                aria-controls={"panel" + (i+1) + "a-content"}
                id={"panel" + (i+1) + "a-header"}
            >
            <div className="item-button-pair">
                <header>{listElements[i]}</header>
                <div className="icon-button">
                    <IconButton key={listElements[i]} size="small" children={<AddCircleOutlineIcon></AddCircleOutlineIcon>} onClick={() => breateBookmark(listElements[i])}/>
                </div>
            </div>
            </AccordionSummary>
            <AccordionDetails>
		        <p>
                    I love this song/movie/TV show. It's the best, for so many reasons that I can't list just one.
                </p>
	    </AccordionDetails>
	</Accordion>
	);
    }
    
    return (
    <Box sx={{ width: "100%" }}>
        <Grid container>
            <Grid item xs={10}>
            <header className="list-category">{listCategory}</header>
            {items}
            </Grid>
        </Grid>
     </Box>
    );  
}
//builtupon material UI lists demonstrations
