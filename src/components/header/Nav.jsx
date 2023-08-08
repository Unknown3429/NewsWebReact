import React, { useState, useEffect } from 'react'
import logo from "../../assets/logo.png"
import { NavLink, useNavigate } from 'react-router-dom'

import "./style.css"

const Nav = () => {
    const [search, setSearch] = useState("");
    const [toggle, setToggel] = useState("");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [sticky, setSticky] = useState();

    const navigate = useNavigate()
    const searchQueryHandler = (event) => {
        if (event.key === "Enter" && search.length > 0) {
            navigate(`/searchPage/${search}`);
            setSearch("")
        }
    };

    const searchQueryHandlerBtn = (event) => {
        if (search.length > 0) {
            navigate(`/searchPage/${search}`);
            setSearch("")
        }
    };

    const handletoggle = () => {
        if (toggle) {
            setToggel("")
        }
        if (!toggle) {
            setToggel("show")
        }

    }

    const controlNavbar = () => {
        if (window.scrollY > 200) {
            if (window.scrollY > lastScrollY) {
                setSticky("sticky")
            } else {

            }
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", controlNavbar);
        return () => {
            window.removeEventListener("scroll", controlNavbar);
        };
    }, [lastScrollY]);

    return (
        <div>
            {/* <!-- Top Header Start --> */}
            <div className="top-header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-4">
                            <div className="logo">
                                <NavLink to="/">
                                    <img src={logo} alt="Logo" />
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-4">
                            <div className="search">
                                <input value={search}
                                    name='search'
                                    onChange={(e) => setSearch(e.target.value)}
                                    onKeyUp={searchQueryHandler}
                                    type="text"
                                    placeholder="Search" />
                                <button onClick={searchQueryHandlerBtn}>
                                    <i className="fa fa-search"></i>
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="social">
                                <NavLink to=""><i className="fab fa-twitter"></i></NavLink>
                                <NavLink to=""><i className="fab fa-facebook"></i></NavLink>
                                <NavLink to=""><i className="fab fa-linkedin"></i></NavLink>
                                <NavLink to=""><i className="fab fa-instagram"></i></NavLink>
                                <NavLink to=""><i className="fab fa-youtube"></i></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Top Header End --> */}


            {/* <!-- Header Start --> */}
            <div className="header">
                <div className="container">
                    <nav className={sticky ? (`navbar navbar-expand-md bg-dark navbar-dark sticky`) : `navbar navbar-expand-md bg-dark navbar-dark`}>
                        <NavLink to="" className="navbar-brand">MENU</NavLink>
                        <button type="button" onClick={handletoggle} className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className={!toggle ? `collapse navbar-collapse justify-content-between` : `collapse navbar-collapse justify-content-between show`} id="navbarCollapse">
                            <div className="navbar-nav m-auto">
                                <NavLink to={"/"} onClick={handletoggle} className="nav-item nav-link">Home</NavLink>
                                <NavLink to={"./sports"} onClick={handletoggle} className="nav-item nav-link">Sports</NavLink>
                                <NavLink to={"./tech"} onClick={handletoggle} className="nav-item nav-link">Tech</NavLink>
                                <NavLink to={"./business"} onClick={handletoggle} className="nav-item nav-link">Business</NavLink>
                                <NavLink to={"./science"} onClick={handletoggle} className="nav-item nav-link">Science</NavLink>



                                <NavLink to={"/contact"} className="nav-item nav-link">Contact Us</NavLink>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {/* <!-- Header End --> */}
        </div>
    )
}

export default Nav