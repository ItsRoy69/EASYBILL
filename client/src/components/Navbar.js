import React from 'react'
import '../styles/navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className="nav">
                <div className="logo" id='LogoBx'>
                    <Link to="/" id='logo'> <img src="https://i01.appmifile.com/webfile/globalimg/pandora/mi-logo.svg" alt="Not" id='logoImg' /></Link>
                </div>                    
                    <div className="dropdown">
                        <a className='navlinks'>Xiaomi Phones</a>
                        <div className="dropdown-content" style={{left: "10vw"}}>
                            <div className="navCard">
                                <a to="https://store.mi.com/in/search_https://store.mi.com/in/search_">
                                    <img src="https://i02.appmifile.com/867_operator_in/23/04/2021/3849c44ac78d65621750a114811711f9.png?width=140&height=140" className='navCard__img'/>
                                    <span className='navCard__proName'>Xiaomi 11 Ultra 5G</span>
                                    <span className='navCard__proPrice'>From ₹ 69,999</span>
                                </a>

                                <a to="https://store.mi.com/in/search_">
                                    <img src="https://i02.appmifile.com/52_operator_in/04/03/2021/7db1136dfdc2a1e9fc639b56bc19f17f.png?width=140&height=140" className='navCard__img'/>
                                    <span className='navCard__proName'>Xiaomi 11X Pro 5G</span>
                                    <span className='navCard__proPrice'>From ₹ 39,999</span>
                                </a>

                                <a to="https://store.mi.com/in/search_Mi%2011X%20Pro%205G">
                                    <img src="https://i02.appmifile.com/368_operator_in/23/04/2021/93d54b25b3efc3b6e87a9d73004de1c3.png?width=140&height=140" className='navCard__img'/>
                                    <span className='navCard__proName'>Xiaomi 11X 5G</span>
                                    <span className='navCard__proPrice'>From ₹ 29,999</span>
                                </a>

                                <a to="https://store.mi.com/in/search_Mi%2010T%20Pro">
                                    <img src="https://i02.appmifile.com/406_operator_in/15/10/2020/4481bf3c3bb2ce53d9f4ac6ce1d7e312.png?width=140&height=140" className='navCard__img'/>
                                    <span className='navCard__proName'>Xiaomi 10T Pro</span>
                                    <span className='navCard__proPrice'>From ₹ 36,999</span>
                                </a>

                                <a to="https://store.mi.com/in/search_Mi%2010T">
                                    <img src="https://i02.appmifile.com/938_operator_in/15/10/2020/4e6b056c8984ad7031873ae9b5f564a5.png?width=140&height=140" className='navCard__img'/>
                                    <span className='navCard__proName'>Xiaomi 10T</span>
                                    <span className='navCard__proPrice'>From ₹ 32,999</span>
                                </a>

                                <a to="https://store.mi.com/in/search_Mi%2010i">
                                <img src="https://i02.appmifile.com/194_operator_in/06/01/2022/30357a13c0150327f92fe85ae1bbd270.png?width=140&height=140" className='navCard__img'/>
                                    <span className='navCard__proName'>More</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="dropdown">
                        <a className='navlinks'>Redmi Phones</a>
                        <div className="dropdown-content" style={{left: "10vw"}}>
                            <div className="navCard">
                                <a to="https://store.mi.com/in/search_https://store.mi.com/in/search_">
                                    <img src="https://i02.appmifile.com/45_operator_in/04/03/2021/890c4652df767017f4857c5e90647d2b.png?width=140&height=140" className='navCard__img'/>
                                    <span className='navCard__proName'>Redmi Note 10 Max</span>
                                    <span className='navCard__proPrice'>From ₹ 18,999</span>
                                </a>

                                <a to="https://store.mi.com/in/search_">
                                    <img src="https://i02.appmifile.com/52_operator_in/04/03/2021/7db1136dfdc2a1e9fc639b56bc19f17f.png?width=140&height=140" className='navCard__img'/>
                                    <span className='navCard__proName'>Redmi Note 10 Pro</span>
                                    <span className='navCard__proPrice'>From ₹ 15,999</span>
                                </a>

                                <a to="https://store.mi.com/in/search_Mi%2011X%20Pro%205G">
                                    <img src="https://i02.appmifile.com/828_operator_in/13/05/2021/c52a15e98e975abedb43eb92bc5d3bcb.jpg?width=140&height=140" className='navCard__img'/>
                                    <span className='navCard__proName'>Redmi Note 10S</span>
                                    <span className='navCard__proPrice'>From ₹ 14,999</span>
                                </a>

                                <a to="https://store.mi.com/in/search_Mi%2010T%20Pro">
                                    <img src="https://i02.appmifile.com/205_operator_in/04/03/2021/0e33cafd058d5340bc4afb329bb84ca3.png?width=140&height=140" className='navCard__img'/>
                                    <span className='navCard__proName'>Redmi Note 10</span>
                                    <span className='navCard__proPrice'>From ₹ 12,499</span>
                                </a>

                                <a to="https://store.mi.com/in/search_Mi%2010T">
                                    <img src="https://i02.appmifile.com/330_operator_in/17/12/2020/0d20a99f729de496ab65cda4f5389e4d.png?width=140&height=140" className='navCard__img'/>
                                    <span className='navCard__proName'>Redmi 9 Power</span>
                                    <span className='navCard__proPrice'>From ₹ 10,499</span>
                                </a>

                                <a to="https://store.mi.com/in/search_Mi%2010i">
                                <img src="https://i02.appmifile.com/194_operator_in/06/01/2022/30357a13c0150327f92fe85ae1bbd270.png?width=140&height=140" className='navCard__img'/>
                                    <span className='navCard__proName'>More</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="dropdown">
                        <a className='navlinks'>TV</a>
                        <div className="dropdown-content" style={{left: "15vw"}}>
                            <div className="navCard">
                                <a to="https://store.mi.com/in/search_https://store.mi.com/in/search_">
                                    <img src="https://i02.appmifile.com/620_operator_in/23/04/2021/3c98ae4c034583122a67669c840f249e.jpg?width=140&height=140" className='navCard__img'/>
                                    <span className='navCard__proName'>Xiaomi QLED TV 189.34cm</span>
                                    <span className='navCard__proPrice'>From ₹ 1,24,999</span>
                                </a>
                                
                                <a to="https://store.mi.com/in/search_Mi%2011X%20Pro%205G">
                                    <img src="https://i02.appmifile.com/572_operator_in/16/12/2020/4d07d0c887a4c08fd05ca06e7cd574e3.jpg?width=140&height=140" className='navCard__img'/>
                                    <span className='navCard__proName'>Xiaomi QLED TV 4K 138.8 cm</span>
                                    <span className='navCard__proPrice'>From ₹ 57,999</span>
                                </a>

                                <a to="https://store.mi.com/in/search_Mi%2010T%20Pro">
                                    <img src="https://i02.appmifile.com/126_operator_in/24/03/2021/8864007fcaa4d9815f02b827c29f100f.png?width=140&height=140" className='navCard__img'/>
                                    <span className='navCard__proName'>Xiaomi Smart TV X Series</span>
                                    <span className='navCard__proPrice'>From ₹ 33,999</span>
                                </a>

                                <a to="https://store.mi.com/in/search_Mi%2010i">
                                <img src="https://i02.appmifile.com/194_operator_in/06/01/2022/30357a13c0150327f92fe85ae1bbd270.png?width=140&height=140" className='navCard__img'/>
                                    <span className='navCard__proName'>More</span>
                                </a>
                            </div>
                        </div>
                    </div> 

                    <div className="dropdown">
                        <a className='navlinks'>Laptops & Tablets</a>
                        <div className="dropdown-content" style={{left: "12vw"}}>
                            <div className="navCard">
                                <a to="https://store.mi.com/in/search_https://store.mi.com/in/search_">
                                    <img src="https://i01.appmifile.com/webfile/globalimg/in/cms/81DAE22D-023B-1742-5400-32A7760B0962.jpg?width=140&height=140" className='navCard__img'/>
                                    <span className='navCard__proName'>Mi Notebook Horizon</span>
                                    <span className='navCard__proPrice'>From ₹ 54,999</span>
                                </a>
                                
                                <a to="https://store.mi.com/in/search_Mi%2011X%20Pro%205G">
                                    <img src="https://i02.appmifile.com/763_operator_in/19/01/2021/4be770942f3352ad2e7e3a94e5d75a43.jpg?width=140&height=140" className='navCard__img'/>
                                    <span className='navCard__proName'>Xiaomi Notebook 14(IC)</span>
                                    <span className='navCard__proPrice'>From ₹ 43,999</span>
                                </a>

                                <a to="https://store.mi.com/in/search_Mi%2010T%20Pro">
                                    <img src="https://i02.appmifile.com/234_operator_in/05/11/2020/5b641713340b4a542b75cf737ed2cd80.png?width=140&height=140" className='navCard__img'/>
                                    <span className='navCard__proName'>Xiaomi Notebook 14</span>
                                    <span className='navCard__proPrice'>From ₹ 38,999</span>
                                </a>

                                <a to="https://store.mi.com/in/search_Mi%2010T%20Pro">
                                    <img src="https://i02.appmifile.com/504_operator_in/05/01/2021/d465ac7bca989e33487b4b4f2447c3ea.png?width=140&height=140" className='navCard__img'/>
                                    <span className='navCard__proName'>Xiaomi Webcam HD</span>
                                    <span className='navCard__proPrice'>From ₹ 1,099</span>
                                </a>

                                <a to="https://store.mi.com/in/search_Mi%2010i">
                                <img src="https://i02.appmifile.com/194_operator_in/06/01/2022/30357a13c0150327f92fe85ae1bbd270.png?width=140&height=140" className='navCard__img'/>
                                    <span className='navCard__proName'>More</span>
                                </a>
                            </div>
                        </div>
                    </div>  

                    <div className="dropdown">
                        <a className='navlinks'>Fitness</a>
                        <div className="dropdown-content" style={{left: "12vw"}}>
                            <div className="navCard">
                                <a to="https://store.mi.com/in/search_https://store.mi.com/in/search_">
                                    <img src="https://i02.appmifile.com/669_operator_in/29/09/2020/492027bef78ed4c69cfd68c2d299d49f.png?width=140&height=140" className='navCard__img'/>
                                    <span className='navCard__proName'>Xiaomi Watch Revolve</span>
                                    <span className='navCard__proPrice'>₹ 9,999</span>
                                </a>
                                
                                <a to="https://store.mi.com/in/search_Mi%2011X%20Pro%205G">
                                    <img src="https://i02.appmifile.com/594_operator_in/13/05/2021/7a6d0c6dfdc36b8e65a210c6e40e5171.jpg?width=140&height=140" className='navCard__img'/>
                                    <span className='navCard__proName'>Xiaomi Watch GPS</span>
                                    <span className='navCard__proPrice'>₹ 3,999</span>
                                </a>

                                <a to="https://store.mi.com/in/search_Mi%2010T%20Pro">
                                    <img src="https://i02.appmifile.com/867_operator_in/29/09/2020/fbf5b3e1948fc961dba533509c5c4b40.png?width=140&height=140" className='navCard__img'/>
                                    <span className='navCard__proName'>Xiaomi Smart Band 5</span>
                                    <span className='navCard__proPrice'>₹ 2,499</span>
                                </a>

                                <a to="https://store.mi.com/in/search_Mi%2010T%20Pro">
                                    <img src="https://i02.appmifile.com/979_operator_in/06/08/2020/855d6e62a97cb56339126c68de3918e9.png?width=140&height=140" className='navCard__img'/>
                                    <span className='navCard__proName'>Xiaomi Beard Trimmer 1C</span>
                                    <span className='navCard__proPrice'>₹ 999</span>
                                </a>

                                <a to="https://store.mi.com/in/search_Mi%2010i">
                                <img src="https://i02.appmifile.com/194_operator_in/06/01/2022/30357a13c0150327f92fe85ae1bbd270.png?width=140&height=140" className='navCard__img'/>
                                    <span className='navCard__proName'>More</span>
                                </a>
                            </div>
                        </div>
                    </div>  

                    <div className="dropdown">
                        <a className='navlinks'>Home</a>
                        <div className="dropdown-content" style={{left: "8vw"}}>
                            <div className="navCard">
                                <a to="https://store.mi.com/in/search_https://store.mi.com/in/search_">
                                    <img src="https://i02.appmifile.com/779_operator_in/22/12/2020/b740f2dbab9a4fef11065926e1aacc42.png?width=140&height=140" className='navCard__img'/>
                                    <span className='navCard__proName'>Xiaomi Robot Vacuum-Mop P</span>
                                    <span className='navCard__proPrice'>From ₹ 24,999</span>
                                </a>
                                
                                <a to="https://store.mi.com/in/search_Mi%2011X%20Pro%205G">
                                    <img src="https://i01.appmifile.com/webfile/globalimg/in/cms/D0577E6F-7952-56FD-86EB-7A3EF9FE33C1.jpg?width=140&height=140" className='navCard__img'/>
                                    <span className='navCard__proName'>Xiaomi Air Purifier 3</span>
                                    <span className='navCard__proPrice'>From ₹ 10,999</span>
                                </a>

                                <a to="https://store.mi.com/in/search_Mi%2010T%20Pro">
                                    <img src="https://i01.appmifile.com/webfile/globalimg/in/cms/6CFA11D4-6969-C4C8-C8BA-BF3922F82294.jpg?width=140&height=140" className='navCard__img'/>
                                    <span className='navCard__proName'>Xiaomi Air Purifier 2C</span>
                                    <span className='navCard__proPrice'>From ₹ 6,999</span>
                                </a>

                                <a to="https://store.mi.com/in/search_Mi%2010T%20Pro">
                                    <img src="https://i01.appmifile.com/webfile/globalimg/in/cms/0C7A1A6D-BE84-6D55-17DA-37620E1FA483.jpg?width=140&height=140" className='navCard__img'/>
                                    <span className='navCard__proName'>Xiaomi Smart Water Purifie</span>
                                    <span className='navCard__proPrice'>From ₹ 12,999</span>
                                </a>

                                <a to="https://store.mi.com/in/search_Mi%2010i">
                                <img src="https://i02.appmifile.com/194_operator_in/06/01/2022/30357a13c0150327f92fe85ae1bbd270.png?width=140&height=140" className='navCard__img'/>
                                    <span className='navCard__proName'>More</span>
                                </a>
                            </div>
                        </div>
                    </div>  

                    <div className="dropdown">
                        <a className='navlinks'>Audio</a>
                        <div className="dropdown-content" style={{left: "14vw"}}>
                            <div className="navCard">
                                <a to="https://store.mi.com/in/search_https://store.mi.com/in/search_">
                                    <img src="https://i02.appmifile.com/77_operator_in/29/09/2020/842c0032334066f68c60de04c513c6e0.png?width=140&height=140" className='navCard__img'/>
                                    <span className='navCard__proName'>Xiaomi Smart Speaker</span>
                                    <span className='navCard__proPrice'>From ₹ 3,999</span>
                                </a>
                                
                                <a to="https://store.mi.com/in/search_Mi%2011X%20Pro%205G">
                                    <img src="https://i02.appmifile.com/530_updatepdf_in/08/05/2020/dffe54d117f1c15448f6a61933499b20.png?width=140&height=140" className='navCard__img'/>
                                    <span className='navCard__proName'>Wireless Earphones</span>
                                    <span className='navCard__proPrice'>From ₹ 3,999</span>
                                </a>

                                <a to="https://store.mi.com/in/search_Mi%2010T%20Pro">
                                    <img src="https://i02.appmifile.com/184_operator_in/27/05/2021/f515132e83f98d32adfd6d4ef5efbd83.png?width=140&height=140" className='navCard__img'/>
                                    <span className='navCard__proName'>Bluetooth Speaker</span>
                                    <span className='navCard__proPrice'>From ₹ 1,499</span>
                                </a>

                                <a to="https://store.mi.com/in/search_Mi%2010T%20Pro">
                                    <img src="https://i02.appmifile.com/984_operator_in/02/09/2020/35780ad0fbbd75f9ef2d33dc1f75537b.png?width=140&height=140" className='navCard__img'/>
                                    <span className='navCard__proName'>Earphones</span>
                                    <span className='navCard__proPrice'>From ₹ 399</span>
                                </a>

                                <a to="https://store.mi.com/in/search_Mi%2010i">
                                <img src="https://i02.appmifile.com/194_operator_in/06/01/2022/30357a13c0150327f92fe85ae1bbd270.png?width=140&height=140" className='navCard__img'/>
                                    <span className='navCard__proName'>More</span>
                                </a>
                            </div>
                        </div>
                    </div>                  
                    
               
                <a className='navlinks' href={`/signup`}>
                    <button className='signup-btn'>Signup</button>
                </a>
            </div>
        </>
    )
}

export default Navbar
