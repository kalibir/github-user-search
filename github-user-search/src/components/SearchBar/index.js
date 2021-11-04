import React from "react";
import "./styles.css";

const SearchBar = () => {
	return (
		<form className='search-form'>
			<input className='search-bar' placeholder='Search user repositories...' />
			<button className='search-button'>Search</button>
		</form>
	);
};

export default SearchBar;
