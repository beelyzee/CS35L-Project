import * as React from "react";
import getData from "./data.js";
import {getCategory} from "./data.js";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Checkbox from '@mui/material/Checkbox';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { writeUserBookmark } from "./firebase-config.js";
import './list.css'
export default function ThreeList(props) {

    const listElements = getData(props.username, props.category);

    const [bookmark, setBookmark] = React.useState({1:false, 2:false, 3:false});
    const items: JSX.Element[] = [];
    for (let i = 0; i < listElements.length; i++) {
    
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
