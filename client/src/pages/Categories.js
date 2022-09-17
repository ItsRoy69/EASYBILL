import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

import item from '../assets/category_item.png'

import "../styles/categories.css"

import {BsCartPlusFill} from 'react-icons/bs'
import {VscFoldDown} from 'react-icons/vsc'

const Categories = () => {
  return (
    <>
      <Navbar />
        <div className="categories">
            <div className="categories_header">
                
                <div className="dropdown">
                        
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

            <div className="categories_mid">

                <div className="categories_mid_card">
                  <img src={item} alt="" />
                  <h1 className="categories_mid_card_head">Air Purifier</h1>
                  <div className="categories_button">
                    <a href="/cart">
                      <button className="categories_button_button">
                        Add to cart
                        &nbsp;<BsCartPlusFill />
                      </button>
                    </a>
                  </div>
                </div>  

                <div className="categories_mid_card">
                  <img src={item} alt="" />
                  <h1 className="categories_mid_card_head">Air Purifier</h1>
                  <div className="categories_button">
                   <a href="/cart">
                      <button className="categories_button_button">
                        Add to cart
                        &nbsp;<BsCartPlusFill />
                      </button>
                    </a>
                  </div>
                </div>  

                <div className="categories_mid_card">
                  <img src={item} alt="" />
                  <h1 className="categories_mid_card_head">Air Purifier</h1>
                  <div className="categories_button">
                    <a href="/cart">
                      <button className="categories_button_button">
                        Add to cart
                        &nbsp;<BsCartPlusFill />
                      </button>
                    </a>
                  </div>
                </div>  

                <div className="categories_mid_card">
                  <img src={item} alt="" />
                  <h1 className="categories_mid_card_head">Air Purifier</h1>
                  <div className="categories_button">
                    <button className="categories_button_button">
                      Add to cart
                      &nbsp;<BsCartPlusFill />
                    </button>
                  </div>
                </div>  

                <div className="categories_mid_card">
                  <img src={item} alt="" />
                  <h1 className="categories_mid_card_head">Air Purifier</h1>
                  <div className="categories_button">
                    <button className="categories_button_button">
                      Add to cart
                      &nbsp;<BsCartPlusFill />
                    </button>
                  </div>
                </div>  

                <div className="categories_mid_card">
                  <img src={item} alt="" />
                  <h1 className="categories_mid_card_head">Air Purifier</h1>
                  <div className="categories_button">
                    <a href="/cart">
                      <button className="categories_button_button">
                        Add to cart
                        &nbsp;<BsCartPlusFill />
                      </button>
                    </a>
                  </div>
                </div>  


                <div className="categories_mid_card">
                  <img src={item} alt="" />
                  <h1 className="categories_mid_card_head">Air Purifier</h1>
                  <div className="categories_button">
                    <a href="/cart">
                      <button className="categories_button_button">
                        Add to cart
                        &nbsp;<BsCartPlusFill />
                      </button>
                    </a>
                  </div>
                </div>  


                <div className="categories_mid_card">
                  <img src={item} alt="" />
                  <h1 className="categories_mid_card_head">Air Purifier</h1>
                  <div className="categories_button">
                    <a href="/cart">
                      <button className="categories_button_button">
                        Add to cart
                        &nbsp;<BsCartPlusFill />
                      </button>
                    </a>
                  </div>
                </div>  


                <div className="categories_mid_card">
                  <img src={item} alt="" />
                  <h1 className="categories_mid_card_head">Air Purifier</h1>
                  <div className="categories_button">
                    <a href="/cart">
                      <button className="categories_button_button">
                        Add to cart
                        &nbsp;<BsCartPlusFill />
                      </button>
                    </a>
                  </div>
                </div>  

                <div className="categories_mid_card">
                  <img src={item} alt="" />
                  <h1 className="categories_mid_card_head">Air Purifier</h1>
                  <div className="categories_button">
                    <a href="/cart">
                      <button className="categories_button_button">
                        Add to cart
                        &nbsp;<BsCartPlusFill />
                      </button>
                    </a>
                  </div>
                </div>  

            </div>
             
        </div>    
      <Footer />
    </>
  )
}

export default Categories


