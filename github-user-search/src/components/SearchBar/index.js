import React from "react";
import "./styles.css";

const SearchBar = ({ clickHandler, searchHandler }) => {
	return (
		<form className='search-form'>
			<input
				className='search-bar'
				onChange={searchHandler}
				placeholder='Search user repositories...'
			/>
			<button onClick={clickHandler} className='search-button'>
				Search
			</button>
		</form>
	);
};

export default SearchBar;
