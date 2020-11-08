import React from 'react';
import { NavLink } from "react-router-dom";


const Navigation =(props)=> {
    
    const linknames = ["Cards", "Spinner"]
    const links = linknames.map(name => (
        <li>
            <NavLink to={"/" + name} activeClassName="link__active">{name}</NavLink>
        </li>
    ))

    return (
        <div className="navigation">
            <button id="btn-scrollDown" onClick={props.scroll}>Go Down</button>
            <ul>
                {links}
            </ul>
        </div>
    )
}

export default Navigation;