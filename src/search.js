import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import "./search.css";
import { getDatabase, ref, child, get } from "firebase/database";
import { useNavigate } from "react-router-dom";
import ResponsiveAppBar from "./AppBar";

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
		<h1>React Search</h1>
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
	  <button onClick={get_data}>Search</button>
    </div>
  );

  function get_data() {
	get(child(dbRef, `names/${username}`)).then((snapshot) => { 
	  if (snapshot.exists()) {
		Navigate('/profile');
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
			Navigate('/profile');
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