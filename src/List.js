import * as React from "react";
import getData from "./data.js";
import {getCategory} from "./data.js";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import './list.css'

export default function ThreeList(props) {
    
    const listElements = getData(props.username, props.category);
    
    const items: JSX.Element[] = [];
    for (let i = 0; i < listElements.length; i++) {
	items.push(
	<Accordion key={props.category + "-item-" + i}>
            <AccordionSummary
		expandIcon={<ExpandMoreIcon />}
                aria-controls={"panel" + (i+1) + "a-content"}
                id={"panel" + (i+1) + "a-header"}
            >
		<header>{listElements[i].title}</header>
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
