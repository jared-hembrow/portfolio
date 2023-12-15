import Image from "next/image";
import React from "react";
// import { Icon } from "semantic-ui-react";
import config from "../../next.config";
const About = () => {
	return (
		<div id="about" className="about-container">
			{/* <div className="html-tag-main-open html-tag-main">{"<section>"}</div>
			<div className="html-tag-main-close html-tag-main">{"</section>"}</div> */}
			{/* <Icon
				size="massive"
				className="about-angle-left-icon"
				name="angle left"
			/>
			<Icon
				size="massive"
				className="about-angle-right-icon"
				name="angle right"
			/> */}
			<div className="about-content-container-border">
				<div className="about-content-container">
					<div className="about-content-image">
						<Image
							className="about-avatar"
							src={`${config.basePath}/assets/main/me.jpg`}
							alt={`Cover Image`}
							width={1536}
							height={1651}
						/>
					</div>
					<div className="about-content-text-container">
						<p className="about-content-text">
							{/* Drawing from a rich background as a self-taught full-stack web
							developer, I bring 2 years of hands-on experience gained while
							working in an Israeli startup. Prior to my web development
							journey, I spent a decade as a skilled welder, further
							contributing to my versatile skill set. */}
							As a self motivated and dynamic full-stack web developer with two years of
							hands-on experience at Pickey, an Israeli startup and a decade-long
							background as a skilled Metal fabricator/welder, I bring a unique
							problem-solving perspective. I offer a unique blend of technical prowess,
							adaptability, and a proven track record across the software development
							lifecycle, making me a valuable asset to any project or team.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
