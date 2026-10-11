import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Logo.css";
import grietLogo from "./assets/griet-logo.png";
import fswLogo from "./assets/fsw-logo.png";

function Logo() {
    const [hidden, setHidden] = useState(false);
    const location = useLocation();

    // Pages whose hero has a dark background → use light logo text
    const isDarkPage = location.pathname.startsWith("/projects");

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setHidden(scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Link
            to="/"
            className={[
                "site-logo",
                hidden ? "logo-hidden" : "",
                isDarkPage ? "site-logo--on-dark" : "",
            ].join(" ").trim()}
        >
            <img
                src={grietLogo}
                alt="GRIET"
                className="site-logo-griet"
            />

            <div className="site-logo-griet-text">
                <span className="site-logo-griet-name">GRIET</span>
                <span className="site-logo-griet-full">
                    GOKARAJU RANGARAJU
                    <br />
                    INSTITUTE OF ENGINEERING
                    <br />
                    &amp; TECHNOLOGY
                </span>
            </div>

            <span className="site-logo-divider" />

            <img
                src={fswLogo}
                alt="FSW Logo"
                className="site-logo-icon"
            />

            <span className="site-logo-text">FSW</span>
        </Link>
    );
}

export default Logo;