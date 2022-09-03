import React from 'react'
import '../styles/preNavbar.css'
import { HiSearch } from 'react-icons/hi';

const PreNavbar = () => {
    return (
        <>
            <div className="preNav">                
                <div>
                    <div className="searchBx">
                        <input type="text" name="search" placeholder='Search Products' autoComplete='off' /><HiSearch name="search-outline" />
                    </div>                    
                    <a href="https://www.mi.com/in/service/help/#category_id=1&pagenum=1&channel=1"><ion-icon name="cart-outline"></ion-icon> cart ( 0 )</a>
                </div>
            </div> 
        </>
    )
}

export default PreNavbar
