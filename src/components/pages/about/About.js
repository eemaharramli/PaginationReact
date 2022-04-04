import './about.css'
import img from '../../../images/about.jpeg'

const About = () => {
    return(
        <>
            <section id="about">
                <div className="about__header">
                    <h2><span>About </span>Me</h2>
                    <span>The new common language will be more simple and regular than.</span>
                </div>
                <div className="about__footer">
                    <div className="about__footer-img">
                        <img src={img} alt="portrait"/>
                    </div>
                    <div className="about__footer-content">
                        <h4><span>A Quick </span>Bio</h4>
                        <p>Web Bean has everything you need to get your new website up and running in no time! All of the templates and themes on Web Bean w3c valid error free code and easy to use. Web Bean has everything you need to get your new website up and running in no time! All of the templates and themes on Web Bean w3c valid error free code and easy to use. Web Bean has everything you need to get your new website up and running in no time! Web Bean w3c valid error free code and easy to use. All of the templates and themes on Web Bean w3c valid error free code and easy to use.</p>
                        <a href="#">Hire Me Now</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;