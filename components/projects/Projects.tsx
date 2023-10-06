import React, { FC } from "react";

type Props = {};

const projectList = [
	{
		name: "QR workbench",
		description:
			"A desktop application capable of generating QR codes and providing a feature to save them in a list, ensuring that they remain accessible even when you close and reopen the application.",
	},
	{ name: "alefbet" },
	{ name: "alefbet" },
	{ name: "alefbet" },
	{ name: "alefbet" },
	{ name: "alefbet" },
	{ name: "alefbet" },
	{ name: "alefbet" },
	{ name: "alefbet" },
	{ name: "alefbet" },
	{ name: "alefbet" },
	{ name: "alefbet" },
];

const Projects: FC = () => {
	return (
		<div className="projects-container">
			<div className="projects-description-container">
				<h1>Projects that i've worked on</h1>
			</div>
			<div className="projects-list-container">
				{projectList.map((p) => {
					return (
						<div key={`project-item-${p.name}`} className="projects-list-item">
							<h3>{p.name}</h3>
							<p>{p.description}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Projects;
