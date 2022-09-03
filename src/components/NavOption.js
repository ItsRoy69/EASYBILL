import React,{useState,useEffect} from 'react'
import '../styles/navOption.css'
import NavCard from './NavCard'

let testing = (setMiPhonesToggle,setRedmiPhonesToggle,setTvToggle,setLaptopToggle,setFitnessAndLifeStyleToggle,setHomeToggle,setAudioToggle,setAccessoriesToggle) => {
    let location = window.location.pathname;
        

        if(location === '/miphones'){
            return setMiPhonesToggle(true)
        }
        
        if(location === '/redmiphones'){
            return setRedmiPhonesToggle(true)
        }
        
        if(location === '/tv'){
            return setTvToggle(true)
        }
        
        if(location === '/laptops'){
            return setLaptopToggle(true)
        }
        
        if(location === '/lifestyle'){
            return setFitnessAndLifeStyleToggle(true)
        }
        
        if(location === '/home'){
            return setHomeToggle(true)
        }
        
        if(location === '/audio'){
            return setAudioToggle(true)
        }
        
        if(location === '/accessories'){
            return setAccessoriesToggle(true)
        }

        
}

const NavOption = ({miPhones,redmiPhones,tv,laptop,fitnessAndLifeStyle,home,audio,accessories}) => {
    const [miPhonesToggle, setMiPhonesToggle] = useState(false);
    const [redmiPhonesToggle, setRedmiPhonesToggle] = useState(false);
    const [tvToggle, setTvToggle] = useState(false);
    const [laptopToggle, setLaptopToggle] = useState(false);
    const [fitnessAndLifeStyleToggle, setFitnessAndLifeStyleToggle] = useState(false);
    const [homeToggle, setHomeToggle] = useState(false);
    const [audioToggle, setAudioToggle] = useState(false);
    const [accessoriesToggle, setAccessoriesToggle] = useState(false);

    
    useEffect(() => {
       
        testing(setMiPhonesToggle,setRedmiPhonesToggle,setTvToggle,setLaptopToggle,setFitnessAndLifeStyleToggle,setHomeToggle,setAudioToggle,setAccessoriesToggle)
        
    }, [])

    return (
        <>
            <div className="navOptions">
                {
                    miPhonesToggle ? miPhones.map((e,i) => {
                        return(
                            <>
                                <NavCard name={e.name} price={e.price} image={e.image} key={e.image} index={i} link={e.url}/>  
                            </>
                        )
                    }) : null
                }
                {
                redmiPhonesToggle ? redmiPhones.map((e,i) => {
                        return(
                            <>
                                <NavCard name={e.name} price={e.price} image={e.image} key={e.image} index={i} link={e.url}/>
                            </>
                        )
                    }) : null
                }
                {
                tvToggle ? tv.map((e,i) => {
                        return(
                            <>
                                <NavCard name={e.name} price={e.price} image={e.image} key={e.image} index={i} link={e.url}/>
                            </>
                        )
                    }) : null
                }
                {
                laptopToggle ? laptop.map((e,i) => {
                        return(
                            <>
                                <NavCard name={e.name} price={e.price} image={e.image} key={e.image} index={i} link={e.url}/>
                            </>
                        )
                    }) : null
                }
                {
                fitnessAndLifeStyleToggle ? fitnessAndLifeStyle.map((e,i) => {
                        return(
                            <>
                                <NavCard name={e.name} price={e.price} image={e.image} key={e.image} index={i} link={e.url}/>
                            </>
                        )
                    }) : null
                }
                {
                homeToggle ? home.map((e,i) => {
                        return(
                            <>
                                <NavCard name={e.name} price={e.price} image={e.image} key={e.image} index={i} link={e.url}/>
                            </>
                        )
                    }) : null
                }
                {
                audioToggle ? audio.map((e,i) => {
                        return(
                            <>
                                <NavCard name={e.name} price={e.price} image={e.image} key={e.image} index={i} link={e.url}/>
                            </>
                        )
                    }) : null
                }
                {
                accessoriesToggle ? accessories.map((e,i) => {
                        return(
                            <>
                                <NavCard name={e.name} price={e.price} image={e.image} key={e.image} index={i} link={e.url}/>
                            </>
                        )
                    }) : null
                }
            </div>
        </>
    )
}

export default NavOption
