import React from 'react'
import '../styles/HotItemCard.css'

const HotItemCard = ({name,price,image,index,link}) => {
    return (
        <>
        <div className="box">
            <a href={link}>
                <div className="box__imgBx" >
                    <img src={image} alt={index} />
                </div>
                <div className="info">
                    <span className='proName'>{name}</span>
                    <span className='proPrice'>{price}</span>
                </div>
            </a>
            </div>
        </>
    )
}

export default HotItemCard
