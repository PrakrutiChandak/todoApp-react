import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom';


const Navbar = (props) => {

    // components have access to props only when they have Router tag, all other components need withRouter to
    // access the props, therefore while exporting we add withRouter
    // one way to make a component higher order is by using withRouter making it supercharged component
    // setTimeout(() => {
    //     props.history.push('/about')
    // }, 20000);
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a className="brand-logo">Todo</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar);