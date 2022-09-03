import React from 'react'
import '../styles/preFooter.css'

const PreFooter = ({icon,title,decsription,url}) => {
    return (
        <>
        <a href={url}>
            <div className='preFooter__box'>
                    <div className="iconBx">
                    {icon}
                    </div>
                    <div className="infoBx">
                        <h3>{title}</h3>
                        <p>{decsription}</p> 
                    </div>
                </div>
                </a>        
        </>
    )
}

export default PreFooter
