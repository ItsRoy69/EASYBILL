import React from 'react';
import Navbar from '../components/Navbar';
import PreNavbar from '../components/PreNavbar';
import Footer from '../components/Footer';
import data from '../data/data';

import {BsArrowRight} from 'react-icons/bs'

import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/home.css'

const Home = () => {
    return (
        <>
            <div className="home">
                <Navbar />
                <PreNavbar />                

                <div className="slider">
                    <Carousel fade>
                        <Carousel.Item> 
                            <img src="https://i02.appmifile.com/118_operator_in/03/01/2022/dc051f8facdb3b063c0d140692bd011f.jpg" alt="" className='d-block w-100'/>
                        </Carousel.Item>
                        <Carousel.Item> 
                            <img src="https://i02.appmifile.com/615_operator_in/05/07/2021/a4b26d6b2ad2d6d2edbfb23a8482328e.jpg" alt="" className='d-block w-100'/>
                        </Carousel.Item>
                        <Carousel.Item> 
                            <img src="https://i02.appmifile.com/762_operator_in/05/07/2021/4c90dda893b43e0153950f36ee37dc03.jpg" alt="" className='d-block w-100'/>
                        </Carousel.Item>
                        <Carousel.Item> 
                            <img src="https://i02.appmifile.com/645_operator_in/02/06/2021/4e32c24cfdf8c48ad1bc911807cac09e.jpg" alt="" className='d-block w-100'/>
                        </Carousel.Item>
                        <Carousel.Item> 
                            <img src="https://i02.appmifile.com/232_operator_in/04/06/2021/568c8fd7c3c4368c14c8ef64cda7866b.jpg" alt="" className='d-block w-100'/>
                        </Carousel.Item>
                        <Carousel.Item> 
                            <img src="https://i02.appmifile.com/3_operator_in/08/06/2021/3e2d6457a1e569145f66318a17ea1e03.jpg" alt="" className='d-block w-100'/>
                        </Carousel.Item>
                        <Carousel.Item> 
                            <img src="https://i02.appmifile.com/860_operator_in/09/06/2021/15c70c1f59ef4aad235531578c3d1757.jpg" alt="" className='d-block w-100'/>
                        </Carousel.Item>
                        <Carousel.Item> 
                            <img src="https://i02.appmifile.com/279_operator_in/08/06/2021/072acd0a667c5a0e045ed50a9064c531.jpg" alt="" className='d-block w-100'/>
                        </Carousel.Item>
                        <Carousel.Item> 
                            <img src="https://i02.appmifile.com/417_operator_in/04/06/2021/36c1c9f10ac411c5ba304d30d60ca234.jpg" alt="" className='d-block w-100'/>
                        </Carousel.Item>
                        <Carousel.Item> 
                            <img src="https://i02.appmifile.com/172_operator_in/08/06/2021/44c5407a6c9ede6d782bebfd70cecc24.jpg" alt="" className='d-block w-100'/>
                        </Carousel.Item>
                        <Carousel.Item> 
                            <img src="https://i02.appmifile.com/667_operator_in/09/06/2021/eca16c5a1a97b1f30cedb943e144e2e0.jpg" alt="" className='d-block w-100'/>
                        </Carousel.Item>
                        <Carousel.Item> 
                            <img src="https://i02.appmifile.com/934_operator_in/07/06/2021/372a6e5d29c26c34b716b0408a533e3f.jpg" alt="" className='d-block w-100'/>
                        </Carousel.Item>
                    </Carousel>
                </div>                
                
                <div className="starProductBx">              
                    <div className='box' id='rightBx'> 
                        <a href={data.starProduct[1].url}><img src={data.starProduct[1].image} alt="startProduct" /></a>  
                        <a href={data.starProduct[2].url}><img src={data.starProduct[2].image} alt="startProduct" /></a>  
                        <a href={data.starProduct[3].url}><img src={data.starProduct[3].image} id="wide" alt="startProduct" /></a>  
                    </div>
                    <div className='box' id='leftBx'>
                        <a href={data.starProduct[0].url}><img src={data.starProduct[0].image} alt="startProduct" /></a>  
                    </div>
                    <div className='starProductBx_circle'><h4>EXPLORE</h4></div>
                </div>    
                

                <div className="headingBx">
                    <div></div>
                    <p>CATEGORIES</p>
                    <div></div>
                </div>
                <div className="hotAccessoriesMenuBx">

                    <div class="dropdown">
                        <p class="hotAccessoriesLink">Music Store</p>

                        <div className="hotAccessories"  style={{left: "-25vw"}}>                         
                            <div>
                                <img src="https://i01.appmifile.com/webfile/globalimg/in/cms/500BFA0B-CBEF-5DFF-79A9-E925F9F2FEE9.jpg" alt="Cover" />
                            </div>
                            {/* --2ndpart */}
                            <div id='rightDiv'>
                                <div className="box">
                                    <a href="/">
                                        <div className="box__imgBx" >
                                            <img src="https://i01.appmifile.com/webfile/globalimg/in/cms/BF2A4279-A6D5-B4F0-FE37-633256CDC9FC.jpg" />
                                        </div>
                                        <div className="info">
                                            <span className='proName'>Redmi Earbuds S</span>
                                            <span className='proPrice'>₹ 1,799</span>
                                        </div>
                                    </a>
                                </div>

                                <div className="box">
                                    <a href="{link}">
                                        <div className="box__imgBx" >
                                            <img src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1547107203.76021206.png" />
                                        </div>
                                        <div className="info">
                                            <span className='proName'>Mi Soundbar</span>
                                            <span className='proPrice'>₹ 4,999</span>
                                        </div>
                                    </a>
                                </div>

                                <div className="box">
                                    <a href="{link}">
                                        <div className="box__imgBx" >
                                            <img src="https://i01.appmifile.com/webfile/globalimg/in/cms/A1C40BA8-574D-2FA0-62C0-3D7A2C964790.jpg" />
                                        </div>
                                        <div className="info">
                                            <span className='proName'>Mi Neckband Bluetooth Earphones</span>
                                            <span className='proPrice'>₹ 1,599</span>
                                        </div>
                                    </a>
                                </div>

                                <div className="box">
                                    <a href="{link}">
                                        <div className="box__imgBx" >
                                            <img src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1563264530.44121333.jpg?width=420&height=420" />
                                        </div>
                                        <div className="info">
                                            <span className='proName'>Mi Super Bass Wireless Headphones</span>
                                            <span className='proPrice'>₹ 1,799</span>
                                        </div>
                                    </a>
                                </div>

                                <div className="box">
                                    <a href="{link}">
                                        <div className="box__imgBx" >
                                            <img src="https://i01.appmifile.com/webfile/globalimg/in/cms/E794F82C-8858-02F1-7C53-6FB0B4D0C4C6.jpg" />
                                        </div>
                                        <div className="info">
                                            <span className='proName'>Mi Dual Driver In-ear Earphones</span>
                                            <span className='proPrice'>₹ 799</span>
                                        </div>
                                    </a>
                                </div>
                                <a href="https://store.mi.com/in/search_">
                                    <div className="imgBxBrowser">
                                        <h1>Browse More</h1>
                                        <BsArrowRight size='100px' />
                                    </div>
                                </a>
                            </div>
                            
                        </div>
                    </div>

                    <div class="dropdown">
                        <p class="hotAccessoriesLink">Smart Devices</p>
                        
                        <div className="hotAccessories" style={{left: "-33vw"}}>                         
                            <div>
                                <img src="https://i02.appmifile.com/953_operator_in/17/06/2021/e12dde416676486fed36d0503d5bd65a.jpg" alt="Cover" />
                            </div>
                            {/* --2ndpart */}
                            <div id='rightDiv'>
                                <div className="box">
                                    <a href="/">
                                        <div className="box__imgBx" >
                                            <img src="https://i01.appmifile.com/webfile/globalimg/in/cms/0E0F0769-6A69-5820-C8F0-F2B956C65BFA.jpg" />
                                        </div>
                                        <div className="info">
                                            <span className='proName'>Mi Smart Band 4</span>
                                            <span className='proPrice'>₹ 2,099</span>
                                        </div>
                                    </a>
                                </div>

                                <div className="box">
                                    <a href="{link}">
                                        <div className="box__imgBx" >
                                            <img src="https://i01.appmifile.com/webfile/globalimg/in/cms/BC643CF4-853C-24E4-1EEC-9D4FF614C86D.jpg" />
                                        </div>
                                        <div className="info">
                                            <span className='proName'>Mi Smart Water Purifier</span>
                                            <span className='proPrice'>₹ 12,999</span>
                                        </div>
                                    </a>
                                </div>

                                <div className="box">
                                    <a href="{link}">
                                        <div className="box__imgBx" >
                                            <img src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1601293021.06313819.png" />
                                        </div>
                                        <div className="info">
                                            <span className='proName'>Mi Watch Revolve</span>
                                            <span className='proPrice'>₹ 9,999</span>
                                        </div>
                                    </a>
                                </div>

                                <div className="box">
                                    <a href="{link}">
                                        <div className="box__imgBx" >
                                            <img src="https://i01.appmifile.com/webfile/globalimg/in/cms/6A656178-B31B-39D1-AC43-9C7EC61C3D84.jpg" />
                                        </div>
                                        <div className="info">
                                            <span className='proName'>Mi Smart Bedside Lamp 2</span>
                                            <span className='proPrice'>₹ 2,499</span>
                                        </div>
                                    </a>
                                </div>
                                <a href="https://store.mi.com/in/search_">
                                    <div className="imgBxBrowser">
                                        <h1>Browse More</h1>
                                        <BsArrowRight size='100px' />
                                    </div>
                                </a>
                            </div>
                            
                        </div>
                    </div>

                    <div class="dropdown">
                        <p class="hotAccessoriesLink">Home</p>
                        
                        <div className="hotAccessories" style={{left: "-43vw"}}>                         
                            <div>
                                <img src="https://i02.appmifile.com/663_operator_in/20/01/2021/0f6ac3c219428b6decbe7fb03d479060.jpg" alt="Cover" />
                            </div>
                            {/* --2ndpart */}
                            <div id='rightDiv'>
                                <div className="box">
                                    <a href="/">
                                        <div className="box__imgBx" >
                                            <img src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1574669860.58966823.jpg?width=420&height=420" />
                                        </div>
                                        <div className="info">
                                            <span className='proName'>Mi Smart LED Desk Lamp 1S</span>
                                            <span className='proPrice'>₹ 2,499</span>
                                        </div>
                                    </a>
                                </div>

                                <div className="box">
                                    <a href="{link}">
                                        <div className="box__imgBx" >
                                            <img src="https://i01.appmifile.com/webfile/globalimg/in/cms/70A72569-C7EA-BBD7-591E-DC93EC3CDF34.jpg" />
                                        </div>
                                        <div className="info">
                                            <span className='proName'>Mi Air Purifier 3</span>
                                            <span className='proPrice'>₹ 10,999</span>
                                        </div>
                                    </a>
                                </div>

                                <div className="box">
                                    <a href="{link}">
                                        <div className="box__imgBx" >
                                            <img src="https://i01.appmifile.com/webfile/globalimg/in/cms/7D8FAD13-1E44-9475-3555-949CBF3571AF.jpg" />
                                        </div>
                                        <div className="info">
                                            <span className='proName'>Mi Air Purifier 2C</span>
                                            <span className='proPrice'>₹ 6,999</span>
                                        </div>
                                    </a>
                                </div>

                                <div className="box">
                                    <a href="{link}">
                                        <div className="box__imgBx" >
                                            <img src="https://i01.appmifile.com/webfile/globalimg/in/cms/FD13B2EB-1AD5-67EE-FF6B-C3E2A0270556.jpg" />
                                        </div>
                                        <div className="info">
                                            <span className='proName'>Mi Router 4C</span>
                                            <span className='proPrice'>₹ 999</span>
                                        </div>
                                    </a>
                                </div>

                                <div className="box">
                                    <a href="{link}">
                                        <div className="box__imgBx" >
                                            <img src="https://i02.appmifile.com/919_updatepdf_in/15/05/2020/984e626e158fdeb7cc21aff04264773d.png" />
                                        </div>
                                        <div className="info">
                                            <span className='proName'>Mi Box 4K</span>
                                            <span className='proPrice'>₹ 3,499</span>
                                        </div>
                                    </a>
                                </div>


                                <a href="https://store.mi.com/in/search_">
                                    <div className="imgBxBrowser">
                                        <h1>Browse More</h1>
                                        <BsArrowRight size='100px' />
                                    </div>
                                </a>
                            </div>
                            
                        </div>
                    </div>


                    
                    <div class="dropdown">
                        <p class="hotAccessoriesLink">Lifestyle</p>
                        
                        <div className="hotAccessories" style={{left: "-48vw"}}>                         
                            <div>
                                <img src="https://i02.appmifile.com/677_operator_in/25/01/2021/8163c3c89feb2c83c73b019d5fd50181.jpg" alt="Cover" />
                            </div>
                            {/* --2ndpart */}
                            <div id='rightDiv'>
                                <div className="box">
                                    <a href="/">
                                        <div className="box__imgBx" >
                                            <img src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1536381648.16353261.png?width=420&height=420" />
                                        </div>
                                        <div className="info">
                                            <span className='proName'>Mi Travel Backpack</span>
                                            <span className='proPrice'>₹ 1,999</span>
                                        </div>
                                    </a>
                                </div>

                                <div className="box">
                                    <a href="{link}">
                                        <div className="box__imgBx" >
                                            <img src="https://i02.appmifile.com/363_operator_in/13/10/2020/c7bde508f128d7b1fd10a224d18a5333.png" />
                                        </div>
                                        <div className="info">
                                            <span className='proName'>Mi Athleisure Shoes</span>
                                            <span className='proPrice'>₹ 1,699</span>
                                        </div>
                                    </a>
                                </div>

                                <div className="box">
                                    <a href="{link}">
                                        <div className="box__imgBx" >
                                            <img src="https://i01.appmifile.com/webfile/globalimg/in/cms/CEEE67A3-3578-7048-887D-CFC3D90B5D17.jpg" />
                                        </div>
                                        <div className="info">
                                            <span className='proName'>Mi Beard Trimmer</span>
                                            <span className='proPrice'>₹ 1,399</span>
                                        </div>
                                    </a>
                                </div>

                                <div className="box">
                                    <a href="{link}">
                                        <div className="box__imgBx" >
                                            <img src="https://i01.appmifile.com/webfile/globalimg/in/cms/0D320403-6180-D6D6-9F57-4EDF0FEB58C7.jpg" />
                                        </div>
                                        <div className="info">
                                            <span className='proName'>Mi T-shirts</span>
                                            <span className='proPrice'>₹ 399 onwards</span>
                                        </div>
                                    </a>
                                </div>

                                <div className="box">
                                    <a href="{link}">
                                        <div className="box__imgBx" >
                                            <img src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1602500062.48215120.png?width=420&height=420" />
                                        </div>
                                        <div className="info">
                                            <span className='proName'>Mi KN-95 Protective Mask (Pack of 5)</span>
                                            <span className='proPrice'>₹ 399</span>
                                        </div>
                                    </a>
                                </div>

                                <a href="https://store.mi.com/in/search_">
                                    <div className="imgBxBrowser">
                                        <h1>Browse More</h1>
                                        <BsArrowRight size='100px' />
                                    </div>
                                </a>
                            </div>
                            
                        </div>
                    </div>
                    

                    <div class="dropdown">
                        <p class="hotAccessoriesLink">Mobile Accessories</p>
                        
                        <div className="hotAccessories" style={{left: "-55vw"}}>                         
                            <div>
                                <img src="https://i01.appmifile.com/webfile/globalimg/in/cms/801ED76B-614B-5959-E2C3-1EC8E14C0ABD.jpg" alt="Cover" />
                            </div>
                            {/* --2ndpart */}
                            <div id='rightDiv'>
                                <div className="box">
                                    <a href="/">
                                        <div className="box__imgBx" >
                                            <img src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1551164869.57618003.jpg" />
                                        </div>
                                        <div className="info">
                                            <span className='proName'>Cases & Covers</span>
                                            <span className='proPrice'>₹ 49 onwards</span>
                                        </div>
                                    </a>
                                </div>

                                <div className="box">
                                    <a href="{link}">
                                        <div className="box__imgBx" >
                                            <img src="https://i01.appmifile.com/webfile/globalimg/in/cms/5A5AA9AC-41A3-7E86-5922-928B312919B0.jpg" />
                                        </div>
                                        <div className="info">
                                            <span className='proName'>Charger & USB Gadgets</span>
                                            <span className='proPrice'>₹ 179 onwards</span>
                                        </div>
                                    </a>
                                </div>

                                <div className="box">
                                    <a href="{link}">
                                        <div className="box__imgBx" >
                                            <img src="https://i01.appmifile.com/webfile/globalimg/in/cms/3CBAACCE-D18A-B241-A4F8-54A4CCE194A5.jpg" />
                                        </div>
                                        <div className="info">
                                            <span className='proName'>Mi Wireless Power Bank 10000mAh</span>
                                            <span className='proPrice'>₹ 2,499</span>
                                        </div>
                                    </a>
                                </div>

                                <div className="box">
                                    <a href="{link}">
                                        <div className="box__imgBx" >
                                            <img src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1600434881.35114664.jpg?width=420&height=420" />
                                        </div>
                                        <div className="info">
                                            <span className='proName'>10000mAh Mi Power Bank 3i</span>
                                            <span className='proPrice'>₹ 999</span>
                                        </div>
                                    </a>
                                </div>

                                <div className="box">
                                    <a href="{link}">
                                        <div className="box__imgBx" >
                                            <img src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1601900775.75794078.png?width=420&height=420" />
                                        </div>
                                        <div className="info">
                                            <span className='proName'>Redmi SonicBass Wireless Earphones</span>
                                            <span className='proPrice'>₹ 1,299</span>
                                        </div>
                                    </a>
                                </div>

                                <a href="https://store.mi.com/in/search_">
                                    <div className="imgBxBrowser">
                                        <h1>Browse More</h1>
                                        <BsArrowRight size='100px' />
                                    </div>
                                </a>
                            </div>
                            
                        </div>
                    </div>

                </div>
                <Footer footer={data.footer} />
            </div>
        </>
    )
}

export default Home