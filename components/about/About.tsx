import Image from "next/image";
import React from "react";
import config from "../../next.config";
const About = () => {
	return (
		<div id="about" className="about-container">
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
						Drawing from a rich background as a self-taught full-stack web
						developer, I bring 2 years of hands-on experience gained while
						working in an Israeli startup. Prior to my web development journey,
						I spent a decade as a skilled welder, further contributing to my
						versatile skill set.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
