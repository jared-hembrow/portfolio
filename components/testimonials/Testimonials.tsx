import Image from "next/image";
import config from "../../next.config";

type PersonTestomonial = {
    name: string;
    avatar: null | string
    position: string;
    testimonial: string
}

const people: PersonTestomonial[] = [
    {
        name: "Dan albocer",
        position: "Pickey CPO",
        avatar: "test-avatar.svg",
        testimonial: `A self motivated and dynamic full-stack web developer with two years of
        hands-on experience at Pickey, an Israeli startup. With a decade-long
        background as a skilled Metal fabricator/welder, I bring a unique
        problem-solving perspective. I offer a unique blend of technical prowess,
        adaptability, and a proven track record across the software development
        lifecycle, making me a valuable asset to any project or team.`
    },
    {
        name: "Itzhar",
        avatar: "test-avatar.svg",
        position: "Pickey CTO",
        testimonial: `A self motivated and dynamic full-stack web developer with two years of
        hands-on experience at Pickey, an Israeli startup. With a decade-long
        background as a skilled Metal fabricator/welder, I bring a unique
        problem-solving perspective. I offer a unique blend of technical prowess,
        adaptability, and a proven track record across the software development
        lifecycle, making me a valuable asset to any project or team.`
    }
]
const empty = []
const Testimonials = () => {
    return <div id="experience" className="testimonials-container">
        <div className="exp-container">
            
        
        <div className="job-container">
            <div className="job-title">Full stack web developer</div>
            <div className="job-time-period">Dec 2021 - oct 2023</div>
            <div className="job-description">
            As a Full Stack Web Developer i held a multifaceted position where I played a pivotal role in the end-to-end development of a comprehensive web application. My responsibilities spanned various aspects of the project, including authentication, authorization, API gateway implementation, and the design and development of a sophisticated dynamic SOP (Standard Operating Procedure) rule engine.
            </div>
            <div></div>
        </div>
        <div className="testimonials-items">

        {empty.map(item => {
            return <div className="testimonial-person-container">
                <div className="testimonial-person-avatar">
                    {!item.avatar ? null : <Image
				className="testimonial-person-avatar-image"
				src={`${config.basePath}/assets/avatars/test-avatar.svg`}
				alt={`Cover Image`}
				width={100}
				height={100}
			/>}
                </div>
                <div className="testimonial-person-content">
                    <div className="testimonial-person-content-name">{item.name}</div>
                    <div className="testimonial-person-content-position">{item.position}</div>
                    <div className="testimonial-person-content-text">{item.testimonial}</div>
                </div>
            </div>
        })}
        </div>
</div>
    </div>
}

export default Testimonials