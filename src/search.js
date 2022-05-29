import "./search.css"
import React, {useState, useEffect} from 'react';

function Search(props) {

    return (
	<div>
	    <p className="titleText">Search for Users</p>
		<input type="text"
		className="searchBar"
		onChange={(event) => setValue(event.target.value)}
		value={value}
		/>
		<div className='searchBack'>
			<div className='aearchEntry'>
				This is a placeholder
			</div>
			<div className='searchEntry'>
				This is a placeholder
			</div>
		</div>
	</div>
    );
}

export default Search;