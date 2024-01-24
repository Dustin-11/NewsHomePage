import { useState } from 'react'

const Header = () => {
    const [isChecked, SetChecked] = useState(false);
    return (
        <>
            <div className="test">
                <input type="checkbox" id="hamburger-checkbox" className="hamburger-checkbox"
                    checked={isChecked}
                />
                <label htmlFor="hamburger-checkbox" className="hamburger-label">
                    <span className="hamburger-icon">&#9776;</span>
                </label>
            </div>
        </>
    )
}

export default Header;