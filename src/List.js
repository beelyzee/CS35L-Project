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
    
    const listElements = getData(props.username)[props.index];
    const listCategory = getCategory(props.index);

    console.log(listCategory);
    
    const items: JSX.Element[] = [];
    for (let i = 0; i < listElements.length; i++) {
	items.push(
	<Accordion>
            <AccordionSummary
		expandIcon={<ExpandMoreIcon />}
                aria-controls={"panel" + (i+1) + "a-content"}
                id={"panel" + (i+1) + "a-header"}
            >
		<header>{listElements[i]}</header>
            </AccordionSummary>
            <AccordionDetails>
		        <p>
                    This is my justification. It is verbose. I have nothing to say but I am going to use as many words as I possibly ever could to say just exactly that, which is that I have nothing to say. Thank you for reading this.
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
