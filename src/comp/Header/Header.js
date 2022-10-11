import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import useAuth from '../../hooks/useAuth'

//already linked to public css files

function Header() {

    const { auth } = useAuth();

    return (
        <header id="header" className="fixed-top">
            <div className="container d-flex align-items-center justify-content-between">

                <h1 className="logo"><Link to="/app" replace="true">PetMacher</Link></h1>


                <nav id="navbar" className="navbar">
                    <ul>
                        <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                        <li><a className="nav-link scrollto" href="#team">Team</a></li>
                        <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                        
                        
                        <li>

                            { auth?.accessToken ? <Link className="nav-link scrollto" to="/logout" replace="true">Logout</Link> :
                                <Link className="nav-link scrollto" to="/login" replace="true">Login</Link>
                            }
                            
                        
                        </li>


                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>

            </div>
        </header>
    );
}

export default Header