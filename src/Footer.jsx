import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
    return (
        <footer className="site-footer">

            {/* =================================================
                CONTACT + MAP  (now at the top)
            ================================================= */}
            <div className="footer-map-section">

                {/* LEFT — CONTACT INFO */}
                <div className="footer-contact">
                    <span className="footer-label">VISIT US</span>

                    <h3 className="footer-contact-title">
                        Gokaraju Rangaraju
                        <br />
                        Institute of Engineering
                        <br />
                        &amp; Technology
                    </h3>

                    <div className="footer-contact-row">
                        <span className="footer-contact-icon">◎</span>
                        <p>
                            Nizampet Road, Bachupally, Kukatpally
                            <br />
                            Hyderabad – 500090,
                            <br />
                            Telangana State, India.
                        </p>
                    </div>

                    <div className="footer-contact-row">
                        <span className="footer-contact-icon">✉</span>
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=freesoftwarewinggriet.fsw@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            freesoftwarewinggriet.fsw@gmail.com
                        </a>
                    </div>

                    <a
                        href="https://www.google.com/maps/search/Gokaraju+Rangaraju+Institute+of+Engineering+and+Technology"
                        target="_blank"
                        rel="noreferrer"
                        className="footer-map-link"
                    >
                        Open in Google Maps ↗
                    </a>
                </div>

                {/* RIGHT — MAP */}
                <div className="footer-map-frame">
                    <iframe
                        title="GRIET Location"
                        src="https://www.google.com/maps?q=Gokaraju+Rangaraju+Institute+of+Engineering+and+Technology,+Nizampet+Road,+Bachupally,+Kukatpally,+Hyderabad&output=embed"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                    />
                </div>

            </div>


            {/* =================================================
                MAIN FOOTER COLUMNS
            ================================================= */}
            <div className="footer-inner">

                {/* LEFT */}
                <div className="footer-brand">
                    <Link to="/" className="footer-logo">
                        FSW<span>.</span>
                    </Link>

                    <p>Free Software Wing · GRIET</p>

                    <p className="footer-description">
                        Building, learning and contributing
                        through open-source technology.
                    </p>
                </div>

                {/* NAVIGATION */}
                <div className="footer-column">
                    <span className="footer-label">EXPLORE</span>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/events">Events</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/community">Community</Link>
                </div>

                {/* CONNECT */}
                <div className="footer-column">
                    <span className="footer-label">CONNECT</span>

                    <a
                        href="https://www.instagram.com/fsw_griet?stkn=MWwzNjI0MzU5eHhtaA=="
                        target="_blank"
                        rel="noreferrer"
                    >
                        Instagram ↗
                    </a>

                    <a
                        href="https://www.linkedin.com/company/free-software-wing/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        LinkedIn ↗
                    </a>

                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=freesoftwarewinggriet.fsw@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Gmail ↗
                    </a>
                </div>

            </div>


            {/* BOTTOM */}
            <div className="footer-bottom">
                <span>
                    © {new Date().getFullYear()} FSW · GRIET
                </span>

                <span>
                    Open Source · Open Community
                </span>
            </div>

        </footer>
    );
}

export default Footer;