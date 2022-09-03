import React from 'react'
import '../styles/preFooter3.css'

const PreFooter3 = ({name,url}) => {
    return (
        <>
            <a href={url} className='footerlink'>{name}</a>
        </>
    )
}

export default PreFooter3
