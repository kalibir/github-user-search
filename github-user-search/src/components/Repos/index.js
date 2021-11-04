import React from "react";
import "./styles.css";
const Repos = ({ name, repoLink }) => {
	return (
		<a href={repoLink} className='repo-link'>
			{name}
		</a>
	);
};

export default Repos;
