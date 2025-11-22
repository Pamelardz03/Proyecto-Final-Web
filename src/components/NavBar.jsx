import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../assets/styleHechoenNL.css";

import LogoNL from "../images/LogoNL.svg";

function Navbar() {
    const [open, setOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
    const menuRef = useRef(null);
    const btnRef = useRef(null);

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth < 1024);
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    useEffect(() => {
        function handleClickOutside(e) {
            if (
                isMobile &&
                menuRef.current &&
                !menuRef.current.contains(e.target) &&
                btnRef.current &&
                e.target !== btnRef.current
            ) {
                setOpen(false);
            }
        }

        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, [isMobile]);

    return (
        <header className="topbar">
            <i
                ref={btnRef}
                className="ri-menu-line"
                id="menu-btn"
                onClick={() => setOpen(!open)}
            ></i>

            <ul
                ref={menuRef}
                id="menu"
                className="menu"
                style={{
                    display: isMobile ? (open ? "block" : "none") : "flex",
                }}
            >
                <li><Link to="/categorias">Categorias</Link></li>
            </ul>


            <Link to="/">
                <img src={LogoNL} alt="LogoNL" className="LogoNL" />
            </Link>

            <i className="ri-search-line"></i>
        </header>
    );
}

export default Navbar;
