import React, { FC } from "react";
import { Cards } from "..";
import { CardProps } from "../cards/Card";
import config from "../../next.config";


const Projects: FC = () => {
	const projectList: CardProps[] = [
		{
			title: "QR workbench",
			description:
			`An Electron-based desktop application crafted with TypeScript and React.js, this tool simplifies the generation and storage of QR codes on your local machine. It creates a list of QR codes for various uses. Built for ease of use and flexibility while working with QR codes.`,
			imageUrl: `${config.basePath}/assets/main/qr-workbench-app.png`,
			links: [
				{icon: "github", linkUrl: "https://github.com/jared-hembrow/qr_workbench"}
			]
		},
		{
			title: "Dragon Blackjack",
			description:
				"A discord bot that allows you to enter commands and it will render a game of blackjack inside the text channel",
			imageUrl: `${config.basePath}/assets/main/dragon-blackjack.jpg`,
			links: [
				{icon: "github", linkUrl: "https://github.com/jared-hembrow/dragonBlackJack"}
			]
		},
		// {
		// 	title: "alefbet",
		// 	description:
		// 		"A basic web page where you can practice guessing the letters of the hebrew alefbet",
		// 	imageUrl: `${config.basePath}/assets/main/dragon-blackjack.jpg`,
		// 	links: [
		// 		{icon: "github", linkUrl: "github.com"}
		// 	]
		// },
		
		
	];
	
	return (
		<div className="projects-container" id="projects">
			<div className="projects-description-container">
				<h1>Projects that i've worked on</h1>
			</div>
			<Cards cards={projectList} />
		</div>
	);
};

export default Projects;
