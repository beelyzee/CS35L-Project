import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import ListSubheader from "@mui/material/ListSubheader";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";

export default function ThreeList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const Listone = [
    {
      rank: "1",
      name: "basketball",
      descrip: "john@gmail.com"
    },
    {
      rank: "2",
      name: "football",
      descrip: "fightclud@gmail.com"
    },
    {
      rank: "3",
      name: "soccer",
      descrip: "fightclud@gmail.com"
    }
  ];
  const Listtwo = [
    {
      rank: "1",
      name: "basketball",
      descrip: "I like shooting hoops"
    },
    {
      rank: "2",
      name: "football",
      descrip: "I like touchdowns"
    },
    {
      rank: "3",
      name: "soccer",
      descrip: "I like kicking balls"
    }
  ];

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Grid container>
        <Grid item xs={4}>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                ListOne
              </ListSubheader>
            }
          >
            {Listone.map((item) => (
              <ListItem key={item.rank}>
                <ListItemButton onClick={handleClick}>
                  <ListItemText primary={item.name} />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton>
                      <ListItemText primary={item.descrip} />
                    </ListItemButton>
                  </List>
                </Collapse>
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={4}>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                List Two
              </ListSubheader>
            }
          >
            {Listtwo.map((item) => (
              <ListItem key={item.rank}>
                <ListItemButton>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={4}>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                ListThree
              </ListSubheader>
            }
          >
            {Listone.map((item) => (
              <ListItem key={item.rank}>
                <ListItemButton>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}
//builtupon material UI lists demonstrations