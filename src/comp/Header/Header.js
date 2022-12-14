import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from '../../hooks/useAuth'
import Logout from "../Logout/Logout";
import { useLocation } from "react-router-dom";


//already linked to public css files
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './header.css'

function Header() {

    const { auth } = useAuth();
    const location = useLocation();
    const [ onLanding, setOnLanding ] = useState();
    const [ fix, setFix ] = useState(false)

    function setFixed() {
        if(window.scrollY > 0) {
            setFix(true)
        } else {
            setFix(false)
        }
    }
    window.addEventListener("scroll", setFixed)
    useEffect(() => {
        if(location?.pathname === '/') setOnLanding(true)
        else setOnLanding(false)
        console.log(onLanding)
    }, [location]);


    return (
        <header id="header" className={fix ? 'fixed_scroll' : 'fixed_top'}>
            <div className="container d-flex align-items-center justify-content-between">

                <h1 className="logo"><Link to="/" replace="true">PetMacher</Link></h1>


                <nav id="navbar" className="navbar">
                    <ul class="menu">
                        {/* (ryan) - preventative measures */}
                        <li>{onLanding && <a className="menu-btn nav-link scrollto active" href="#hero">Home</a>}</li>
                        <li>{onLanding && <a className="menu-btn nav-link scrollto" href="#team">Team</a>}</li>
                        <li>{onLanding && <a className="menu-btn nav-link scrollto" href="#contact">Contact</a>}</li>
                        
                        
                        <li>

                            { auth?.accessToken ? <Logout /> :
                                <Link className="menu-btn nav-link scrollto" to="/login" replace="true">Login</Link>
                            }
                            
                        </li>


                    </ul>
                    <div class="menu-btn">
                        <i className="menu-btn bi bi-list mobile-nav-toggle"></i>
                    </div>
                    
                </nav>

            </div>
        </header>
    );
}

export default Header