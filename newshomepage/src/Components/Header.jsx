import { useState } from 'react'

const Header = () => {
    return (
        <>
            <div>
                <inuput type="checkbox" id="hamburger-checkbox" className="hamburger-checkbox" />
                <label htmlFor="hamburger-checkbox" className="hamburger-label">
                    <span className="hamburger-icon">&#9776;</span>
                </label>
            </div>
        </>
    )
}

export default Header;