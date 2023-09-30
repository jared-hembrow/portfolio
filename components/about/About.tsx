import Image from "next/image";
import React from "react";

const About = () => {
	return (
		<div id="about" className="about-container">
			<div className="about-content-container">
				<div className="about-content-image">
					<Image
						className="about-avatar"
						src={"/assets/main/me.jpg"}
						alt={`Cover Image`}
						width={1536}
						height={1651}
					/>
				</div>
				<div className="about-content-text-container">
					<p className="about-content-text">
						I am a full stack web developer with 2 years of experience working
						in a israeli start up
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
