import * as React from "react";
import ThreeList from "./List.js";
import getData from "./data.js";

export default function ProfilePage(props) {

    if (getData(props.username) === -1) {
	console.log("help!");
    }
    
    console.log(props.username);
    
    return (
	<div>
	    <ThreeList username={props.username} index={0}/>
	    <ThreeList username={props.username} index={1}/>
	    <ThreeList username={props.username} index={2}/>
	</div>
    );
}
