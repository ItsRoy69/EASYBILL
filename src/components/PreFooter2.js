import React from 'react'
import '../styles/preFooter2.css'

const PreFooter2 = () => {
    return (
        <>
            <div className="pFooter_left">
                <div className="descBx">
                    <p>LET'S STAY IN TOUCH <br/>
                    <span>Get updates on sales specials and more</span></p>
                </div>
                <input type="text" placeholder='Enter Email Address' />
            </div>
            <div className="pFooter_right">
                <div className="descBx">
                    <p>FOLLOW Xiaomi <br />
                    <span>We want to hear from you!</span></p>
                </div>
                <div className="icons">
                    <ion-icon name="logo-facebook"></ion-icon>
                    <ion-icon name="logo-youtube"></ion-icon>
                    <ion-icon name="logo-instagram"></ion-icon>
                    <ion-icon name="logo-twitter"></ion-icon>
                </div>
            </div>
        </>
    )
}

export default PreFooter2
