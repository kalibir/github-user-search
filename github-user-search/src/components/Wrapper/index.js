import React, { useState } from "react";
import "./styles.css";
import SearchBar from "../SearchBar";
import axios from "axios";

const Wrapper = () => {
	const [user, setUser] = useState("");
	const [repos, setRepos] = useState("");

	const handleSearch = (e) => {
		setUser(e.target.value);
	};

	const handleResults = (e) => {
		e.preventDefault();
		axios
			.get(`https://api.github.com/users/${user}/repos`)
			.then((res) => {
				setRepos(res.data);
				console.log(repos);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div className='main'>
			<SearchBar clickHandler={handleResults} searchHandler={handleSearch} />
			<div className='repo-wrapper'></div>
		</div>
	);
};

export default Wrapper;
