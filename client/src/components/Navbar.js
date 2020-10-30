import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import M from "materialize-css"

const Navbar = () => {
    useEffect(() => {
        const sidenav = document.querySelector('#slide-out');
        M.Sidenav.init(sidenav, {});
    })

    return(
        <React.Fragment>
        <nav>
            <div className="nav-wrapper grey darken-1">
                <a href="/#" className="brand-logo" style={{ marginLeft: "1rem" }}>Jail Book</a>
                <a href="/#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/search">Search</Link></li>
                    <li><Link to="/#">About</Link></li>
                    <li><Link to="/#">Contact</Link></li>
                </ul>
            </div>
        </nav>
        {/* See how this behaves compared to the other app to try and diagnose */}
        <ul id="slide-out" className="sidenav">
            <li><Link to="/search">Search</Link></li>
            <li><Link to="/#">About</Link></li>
            <li><Link to="/#">Contact</Link></li>
        </ul>
        </React.Fragment>
    )
}

export default Navbar