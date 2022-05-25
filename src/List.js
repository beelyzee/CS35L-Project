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
    
    const listCategory = getCategory(props.index);
    const listElements = getData(props.username, listCategory);
    
    const items: JSX.Element[] = [];
    for (let i = 0; i < listElements.length; i++) {
	items.push(
	<Accordion>
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
		   <header className="list-category">{listCategory}</header>
		   {items}
         </Grid>
       </Grid>
     </Box>
    );  
}
//builtupon material UI lists demonstrations
