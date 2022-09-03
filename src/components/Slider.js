import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'

const Slider = ({start}) => {
    return (
        <>
            <Carousel fade>
                {start.map((e) => {
                    return(
                        <Carousel.Item> 
                        <img 
                        src={e} 
                        alt="" 
                        className='d-block w-100'/>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </>
    )
}

export default Slider
