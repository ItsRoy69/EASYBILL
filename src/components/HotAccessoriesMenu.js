import React from 'react'
import '../styles/hotAccessoriesMenu.css'
import { Link } from 'react-router-dom'


const HotAccessoriesMenu = () => {
    return (
        <>
            <div className="headingBx">
                <div></div>
                <p>CATEGORIES</p>
                <div></div>
            </div>
            <div className="hotAccessoriesMenuBx">
                <Link className="hotAccessoriesLink" to="/music">Music Store</Link>
                <Link className="hotAccessoriesLink" to="/device">Smart Devices</Link>
                <Link className="hotAccessoriesLink" to="/home">Home</Link>
                <Link className="hotAccessoriesLink" to="/lifestyle">Lifestyle</Link>
                <Link className="hotAccessoriesLink" to="/accessories">Mobile Accessories</Link>
            </div>
        </>
    )
}

export default HotAccessoriesMenu
