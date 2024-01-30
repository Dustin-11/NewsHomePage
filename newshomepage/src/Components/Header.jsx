import { useState } from 'react'
import closedMenuIcon from '../assets/images/icon-menu-close.svg'
import openMenuIcon from '../assets/images/icon-menu.svg'
import logo from '../assets/images/logo.svg'

const Header = () => {
    const [isChecked, setChecked] = useState(false);

    const menuClick = () => {
        setChecked(!isChecked);
    
    };
    const closeMenu = () => {
        setChecked(false);
    };
    return (
        <>
            <header className="header">
                <div>
                    <img src={logo} />
                </div>
                <div className={`shadowEffect ${isChecked ? 'active' : ''}`}></div>
                <div className={`toggleMenu ${isChecked ? 'active' : ''}`}>
                    <div className="hamburger-wrapper">
                        <input type="checkbox" id="hamburger-checkbox" className="hamburger-checkbox"
                            checked={isChecked} onClick={menuClick} />
                        <label htmlFor="hamburger-checkbox" className="hamburger-label">
                            {isChecked ?
                                (<span className="hamburger-icon"><img src={closedMenuIcon} /></span>) :
                                (<span className="hamburger-icon"><img src={openMenuIcon} /></span>)}
                        </label>
                    </div>
                    <nav className={`nav ${isChecked ? 'active' : ''}`}>
                        <ul className="menu">
                            <li onClick={closeMenu}><a href="#">Home</a></li>
                            <li onClick={closeMenu}><a href="#">About</a></li>
                            <li onClick={closeMenu}><a href="#">Services</a></li>
                            <li onClick={closeMenu}><a href="#">Contact</a></li>
                    </ul>
                    </nav>
                </div>
                
            </header>
        </>
    )
}


export { Header };