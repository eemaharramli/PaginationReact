import { Link } from "react-router-dom";

import './footer.css'

const Footer = () => {
    return(
        <footer>
            <div className="footer__container">
                <div className="footer__addresses">
                    <span>1502 N Elm St, Fairmont, MN, 56031, United States</span>
                    <Link to={'#'}>+00 123-456-789</Link>
                    <Link to={'#'}>email@yourdomain.com</Link>
                    <Link to={'#'}>www.yourdomain.com</Link>
                </div>
                <div className="social-hubs">
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-google-plus-g"></i>
                    <i className="fab fa-tumblr"></i>
                    <i className="fab fa-linkedin"></i>
                </div>
                <div className="all-rights-reserved">
                    <span>© 2017 Copyright web_bean</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;