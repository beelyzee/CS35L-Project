import * as React from "react";
import getData from "./data.js";
import {getCategory} from "./data.js";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function ThreeList(props) {
    
    const listElements = getData(props.username)[props.index];
    const listCategory = getCategory(props.index);
    
    const items: JSX.Element[] = [];
    for (let i = 0; i < listElements.length; i++) {
	items.push(
	<Accordion>
            <AccordionSummary
		expandIcon={<ExpandMoreIcon />}
                aria-controls={props.username + "-list" + (props.index+1) + "-item" + (i+1) + "-content"}
                id={props.username + "-list" + (props.index+1) + "-item" + (i+1) + "-header"}
            >
		<header>{listElements[i]}</header>
            </AccordionSummary>
            <AccordionDetails>
		<p>
                    Hello
                </p>
	    </AccordionDetails>
	</Accordion>    
	);
    }
    
    return (
       <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
	   <Grid container>
               <Grid item xs={10}>
		   <header>{listCategory}</header>
		   {items}
         </Grid>
       </Grid>
     </Box>
    );  
}
//builtupon material UI lists demonstrationsB
