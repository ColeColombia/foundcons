import React from 'react';
import '../styles/header.css';

export default function Header(){
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-2">
              <a href={Routing.generate('app_index')} className="navbar-brand p-0"><h1 className="logo">Carro</h1></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <i className="bi bi-list"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto py-0">
                    <li className="nav-item dropdown">
                        <a href="/account" className={"nav-link dropdown-toggle"} role={"button"} data-bs-toggle={"dropdown"} aria-expanded={"false"}>
                        <i className="bi bi-person-circle"></i> account
                            </a>
                            <ul className="dropdown-menu">
                                <li className="text-center"></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a href={Routing.generate('app_profile')} className="dropdown-item">Profile</a></li>
                                <li><a className="dropdown-item" href="#">Settings</a></li>
                                <li><a className="dropdown-item" href={Routing.generate('app_culprit')}>my culprits</a></li>
                                <li><a className="dropdown-item" href="#">Help</a></li>
                                </ul>
                    </li>
                    <a href={Routing.generate('app_login')} className="nav-item nav-link">Sign in</a>
                    <a href={Routing.generate('app_register')} className="nav-item nav-link">Sign up</a>
                </div>            
            </div>
        </nav>
        <div className="container wrap">
            <div className="search">
            <input type="text" className="searchTerm" placeholder="Search people"/>
             <button type="submit" className="searchButton">
             <i className="bi bi-search"></i>
            </button>
            </div>
         </div>
        </>
    )
}
