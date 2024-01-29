import { useState } from 'react'
import closedMenuIcon from '../assets/images/icon-menu-close.svg'
import openMenuIcon from '../assets/images/icon-menu.svg'
import logo from '../assets/images/logo.svg'

const Header = () => {
    const [isChecked, setChecked] = useState(false);
    const menuClick = () => {
        setChecked(!isChecked);
    };
    return (
        <>
            <header className="header">
                <div>
                    <img src={logo} />
                </div>
                <div className="hamburger-wrapper">
                    <input type="checkbox" id="hamburger-checkbox" className="hamburger-checkbox"
                    checked={isChecked} onClick={menuClick} />
                    <label htmlFor="hamburger-checkbox" className="hamburger-label">
                        {isChecked ?
                        (<span className="hamburger-icon"><img src={closedMenuIcon} /></span>) :
                        (<span className="hamburger-icon"><img src={openMenuIcon} /></span>)}
                    </label>
                </div>
            </header>
        </>
    )
}


export { Header };