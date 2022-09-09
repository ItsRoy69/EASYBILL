import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

import "../styles/categories.css"

import {VscFoldDown} from 'react-icons/vsc'

const Categories = () => {
  return (
    <>
      <Navbar />
        <div className="categories">
            <div className="categories_header">
                
                <div class="dropdown">
                        
                        <VscFoldDown className='categories_dropdown' size="50px"/>
                          <div className="categories_dropdown_content" style={{left: "12vw"}}>
                              <div className="categories_dropdown_Card">
                                <div className="categories_dropdown_Div">
                                  <a>Air Purifier</a>
                                  <a>Audio</a>
                                  <a>Laptops</a>
                                  <a>PC Accessories</a>
                                  <a>Bands & Fitness</a>
                                </div>
                                <div className="categories_dropdown_Div">
                                  <a>Home</a>
                                  <a>Powerbanks</a>
                                  <a>Chargers & Cables</a>
                                  <a>Lifestyle</a>
                                  <a>Tablet Accessories</a>
                                </div>
                                <div className="categories_dropdown_Div">
                                  <a>Cases & Protectors</a>
                                  <a>Selfie Stick</a>
                                  <a>Security Cameras</a>
                                  <a>Backpacks</a>
                                  <a>Apparel</a>
                                </div>
                                <div className="categories_dropdown_Div">
                                  <a>Shoes</a>
                                  <a>Toys</a>
                                  <a>Sunglasses</a>
                                  <a>TV accessories</a>
                                  <a>Stationery</a>
                                </div>
                                <div className="categories_dropdown_Div">
                                  <a>Phones</a>
                                  <a>TV</a>
                                  <a>Router</a>
                                  <a>Combos</a>
                                  <a>Tablets</a>
                                </div>
                              </div>
                          </div>
                    </div>  
                <h1 className="categories_header_head">CATEGORIES</h1>                
            </div>    
        </div>    
      <Footer />
    </>
  )
}

export default Categories


