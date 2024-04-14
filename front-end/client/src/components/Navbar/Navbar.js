import React,{ useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css';
import Logo from '../../assets/logo.png'


const Navbar = () => {
    
    const [menuOpen , setMenuOpen]= useState(false)
     return (
    <nav>
        
            <Link to="/" className='title'>
            <img src={Logo} alt="lead" className='logo' onClick={() => window.scrollTo(0, 0)} />
                </Link>
            <div className='menu' onClick={() => {
                setMenuOpen(!menuOpen);
            }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open":""}>

            <li>

                <NavLink to="/about" className="nav-link" onClick={() => window.scrollTo(0, 0)}>About</NavLink>
            </li>
            <li>
                <NavLink to="/services" className="nav-link" onClick={() => window.scrollTo(0, 0)}>Services</NavLink>
            </li>
            <li>
            <NavLink to="/contact" className="nav-link" onClick={() => window.scrollTo(0, 0)}>Contact</NavLink>
            </li>
            <li>
            <NavLink to="/features" className="nav-link" onClick={() => window.scrollTo(0, 0)}>Features</NavLink>
            </li>
            
        </ul>
  
             < div className="signin-signup">
                 <NavLink to="/login" className="button signin" onClick={() => window.scrollTo(0, 0)}>Sign in</NavLink>
                <NavLink to="/signup" className="button signup" onClick={() => window.scrollTo(0, 0)}>Sign up</NavLink>
                </div>
     
                 {/*<div>
                  
                 <button>Log out</button>
                              </div>*/}
            
    </nav>
  )
}

export default Navbar