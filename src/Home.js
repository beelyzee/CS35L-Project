import React from 'react'
import { Link } from  'react-router-dom'

function Home() {
    return ( 
	<>
		<Link style={{marginRight: '8px'}} to="/login">Log in</Link>
		<Link to="/signup">Sign Up</Link>
		<Link to="/profile"P>profile</Link>
		<Link to="/search"P>Search</Link>
	</>
	);
}

export default Home;

