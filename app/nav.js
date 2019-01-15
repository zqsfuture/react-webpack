import React from 'react';
import {NavLink} from 'react-router-dom';
import  './nav.css';
const NavBar = () =>(
    <div>
        <div>
            <NavLink exact to='/' className="blue">Jspang-a</NavLink> |&nbsp;
            <NavLink to='/Jspangb' style={{color:"red",fontSize:"30px"}}>Jspang-b</NavLink> |&nbsp;
            <NavLink to="/Jspangc/ILoveWeb/nice" activeClassName="bbb">Jspang-c</NavLink>|&nbsp;
            <NavLink to='/react' activeClassName="bbb">404page</NavLink> |&nbsp;
            <NavLink to='/redirect' activeClassName='active'>Redirect</NavLink>
        </div>
    </div>
)
export default NavBar;