import React, { useState } from "react";
import "./styles.css";
import SearchBar from "../SearchBar";
import Repos from "../Repos";
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
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div className='main'>
			<SearchBar clickHandler={handleResults} searchHandler={handleSearch} />
			<div className='repo-wrapper'>
				{repos.length
					? repos.map((repo, index) => {
							return (
								<Repos key={index} repoLink={repo.html_url} name={repo.name} />
							);
					  })
					: "Loading..."}
			</div>
		</div>
	);
};

export default Wrapper;
