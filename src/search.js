import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import "./search.css";
import { getDatabase, ref, child, get } from "firebase/database";
import { useNavigate } from "react-router-dom";
import ResponsiveAppBar from "./AppBar";
import { Button } from "@mui/material";

const dbRef = ref(getDatabase());

var username = 0;

function Search() {
	let Navigate = useNavigate();
	const [inputText, setInputText] = useState("");
	let inputHandler = (e) => {
	  //convert input text to lower case
	  var lowerCase = e.target.value;
	  setInputText(lowerCase);
	};
  
	return (
	  <div className="main">
		  <ResponsiveAppBar />
		<h1>Find Other Profiles</h1>
		<div className="search">
		  <TextField
			id="outlined-basic"
			onChange={inputHandler}
			variant="outlined"
			fullWidth
			label="Search"
		  />
      </div>
	  {username = inputText}
	  <Button onClick={get_data}>Search</Button>
	  <Button>Generate Random Profile</Button>
    </div>
  );

  function get_data() {
	get(child(dbRef, `names/${username}`)).then((snapshot) => { 
	  if (snapshot.exists()) {
		Navigate('/profile:');
		get_data_uid(snapshot.val().userId);
		console.log(snapshot.val());
		
	  } else {
		console.log("No data available");
	  }
	}).catch((error) => {
	  console.error(error);
	});
	}
	function get_data_uid(uid) {
		get(child(dbRef, `users/${uid}`)).then((snapshot) => { 
		  if (snapshot.exists()) {
			Navigate(`/profile:${uid}`);
			console.log(snapshot.val());
			
		  } else {
			console.log("No data available");
		  }
		}).catch((error) => {
		  console.error(error);
		});
		}
}

export default Search;