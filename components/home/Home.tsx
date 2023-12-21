import Image from "next/image";
import React, { FC } from "react";
import Link from "next/link";
import { Icon } from "semantic-ui-react";
import config from "../../next.config";
const Home: FC = () => {
	const onGoToAbout = () => {
		if (typeof window === "undefined") return;
		const about = document.getElementById("about");
		const rect = about.getBoundingClientRect();

		console.log();
		window.scrollTo({
			top: window.scrollY + rect.top, // Add the current scroll position to the element's top position
			behavior: "smooth", // Optional: Add smooth scrolling animation
		});
	};
	const onGoToExperience = () => {
		if (typeof window === "undefined") return;
		const experience = document.getElementById("experience");
		const rect = experience.getBoundingClientRect();

		console.log();
		window.scrollTo({
			top: window.scrollY + rect.top, // Add the current scroll position to the element's top position
			behavior: "smooth", // Optional: Add smooth scrolling animation
		});
	};
	const onGoToProjects = () => {
		if (typeof window === "undefined") return;
		const experience = document.getElementById("projects");
		const rect = experience.getBoundingClientRect();

		console.log();
		window.scrollTo({
			top: window.scrollY + rect.top, // Add the current scroll position to the element's top position
			behavior: "smooth", // Optional: Add smooth scrolling animation
		});
	};
	return (
		<div className="home-container">
			<div className="home-navbar-container">
				<div className="home-navbar-item" onClick={onGoToAbout}>
					<p className="home-navbar-item-text">About</p>
				</div>
				<div className="home-navbar-item" onClick={onGoToExperience}>
					<p className="home-navbar-item-text">Experience</p>
				</div>
				<div className="home-navbar-item">
					<p className="home-navbar-item-text" onClick={onGoToProjects}>Projects</p>
				</div>
			</div>
			<Image
				className="home-image"
				src={`${config.basePath}/assets/main/dark-laptop-code.jpg`}
				alt={`Cover Image`}
				width={1300}
				height={630}
			/>
			<div className="home-header-title">
				<div className="home-header-title-content">
					<div>
						<h1 className="home-header home-header-title-text">
							{"Hello, my name is Jared."}
						</h1>
					</div>
					<div>
						<h2 className="home-header home-header-title-sub-text">
							{"I build full stack web applications"}
						</h2>
					</div>
				</div>
			</div>
			{/* <div className="home-header-description">
			</div> */}
			<ul className="home-follow-me-list">
				<li className="home-follow-me-list-item">
					<Link href={"https://github.com/jared-hembrow"}>
						<Image
							className="logo"
							src={`${config.basePath}/assets/main/github-logo.png`}
							alt={`Cover Image`}
							//   className={cn('shadow-sm w-full', {
							//     'hover:shadow-lg transition-shadow duration-200': slug,
							//   })}
							width={50}
							height={50}
						/>
					</Link>
				</li>
				<li className="home-follow-me-list-item">
					<Link href={"https://www.linkedin.com/in/jared-hembrow-21b786212"}>
						<Image
							className="logo"
							src={`${config.basePath}/assets/main/linkedin-logo.png`}
							alt={`Cover Image`}
							//   className={cn('shadow-sm w-full', {
							//     'hover:shadow-lg transition-shadow duration-200': slug,
							//   })}
							width={50}
							height={50}
						/>
					</Link>
				</li>
			</ul>
			<div className="home-learn-more" onClick={onGoToAbout}>
				<p>Learn more about what i do</p>
				<Icon name="chevron down" className="home-learn-more-icon" />
			</div>
		</div>
	);
};

export default Home;
