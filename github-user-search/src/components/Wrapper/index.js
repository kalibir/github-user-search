import React from "react";
import "./styles.css";
import SearchBar from "../SearchBar";

const Wrapper = () => {
	return (
		<div className='main'>
			<SearchBar />
			<div className='repo-wrapper'>
				<div className='repos'>Project</div>
			</div>
		</div>
	);
};

export default Wrapper;
