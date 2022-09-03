import React from 'react'
import '../styles/HotAccessories.css'
import HotItemCard from './HotItemCard'
import '../styles/HotItemCard.css'
import {BsArrowRight} from 'react-icons/bs'

let browseMore  = (music) => {
    if(music.length < 6){
        return(
            <>
                <a href="https://store.mi.com/in/search_">
                    <div className="imgBxBrowser">
                        <h1>Browse More</h1>
                        <BsArrowRight size='100px' />
                    </div>
                </a>
            </>
        )
    }
}



const HotAccessories = ({music,musicCover}) => {
    return (
        <>
            <div className="hotAccessories">                
                <div>
                    <img src={musicCover} alt="Cover" />
                 </div>
                {/* --2ndpart */}
                <div id='rightDiv'>
                    {music.map ((e,i) => {
                        return(
                            <>
                                <HotItemCard key={e.image} name={e.name} price={e.price} image={e.image} link={e.url} index={i}/>
                            </>
                        )
                    })}
                    {browseMore(music)}
                </div>
            </div>
        </>
    )
}

export default HotAccessories
