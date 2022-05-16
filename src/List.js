import * as React from "react";
import getData from "./data.js";
import getCategory from "./data.js";
import Box from "@mui/material/Box";
//import List from "@mui/material/List";
//import ListItem from "@mui/material/ListItem";
//import ListItemButton from "@mui/material/ListItemButton";
//import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
//import ListSubheader from "@mui/material/ListSubheader";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";

export default function ThreeList(props) {
    
    const listElements = getData(props.username)[props.index];
    const listCategory = getCategory(props.index);

    console.log(listElements);

    const items: JSX.Element[] = [];
    for (let i = 0; i < listElements.length; i++) {
	let PanelID = "panel" + (i+1) + "a";
	items.push(
	<Accordion>
            <AccordionSummary
		expandIcon={<ExpandMoreIcon />}
                aria-controls={PanelID + "-content"}
                id={PanelID + "-header"}
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
               <Grid item xs={4}>
		   <header>{listCategory}</header>
		   {items}
         </Grid>
       </Grid>
     </Box>
    );  
}
//builtupon material UI lists demonstrationsB
