import React from 'react'
import '../styles/navCard.css'

const NavCard = ({name,price,image,index,link}) => {
    return (
        <>
          <div className="navCard">
              <a href={link}>
                  <img src={image} alt={index} className='navCard__img'/>
                  <span className='navCard__proName'>{name}</span>
                  <span className='navCard__proPrice'>From {price}</span>
              </a>
            </div>  
        </>
    )
}

export default NavCard
