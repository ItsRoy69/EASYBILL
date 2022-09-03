import React from 'react'
import '../styles/footer.css'
import PreFooter from './PreFooter'
import PreFooter2 from './PreFooter2'
import PreFooter3 from './PreFooter3'


const Footer = ({footer}) => {
    return (
        <>
            <div className="preFooter">
                <PreFooter icon={<ion-icon name="reload-outline"></ion-icon>} title={`Hassle-free replacement`} decsription={'10-day easy replacement policy on mi.com'} url={'https://www.mi.com/in/service/replacefaq/'}/>
                <PreFooter icon={<ion-icon name="shield-outline"></ion-icon>} title={`100% secure payments`} decsription={'We support Cards, Wallets, EMI and COD'}  url={'https://www.mi.com/in/service/paymentfaq/'}/>
                <PreFooter icon={<ion-icon name="map-outline"></ion-icon>} title={`Vast service network`} decsription={'1000 Mi service-centers across 600 cities'}  url={'https://www.mi.com/in/service/repair/'}/>
            </div>
            <div className="preFooter2">
                <PreFooter2 />
            </div>
            <div className="preFooter3">
                <div>
                    <p>SUPPORT</p>
                    {
                        footer.support.map((e,i) => {
                            return (
                                <>
                                    <PreFooter3 key={e.url} url={e.url} name={e.name}/>
                                </>
                            )
                        })
                    }
                </div>
                <div>
                    <p>SHOP AND LEARN</p>
                    {
                        footer.shopAndLearn.map((e,i) => {
                            return (
                                <>
                                    <PreFooter3 key={e.url} url={e.url} name={e.name}/>
                                </>
                            )
                        })
                    }
                </div>
                <div>
                    <p>RETAIL STORE</p>
                    {
                        footer.retailStore.map((e,i) => {
                            return (
                                <>
                                    <PreFooter3 key={e.url} url={e.url} name={e.name}/>
                                </>
                            )
                        })
                    }
                </div>
                <div>
                    <p>ABOUT US</p>
                    {
                        footer.aboutUS.map((e,i) => {
                            return (
                                <>
                                    <PreFooter3 key={e.url} url={e.url} name={e.name}/>
                                </>
                            )
                        })
                    }
                </div>
                <div>
                    <p>CONTACT US</p>
                    {
                        footer.contactUs.map((e,i) => {
                            return (
                                <>
                                    <PreFooter3 key={e.url} url={e.url} name={e.name}/>
                                </>
                            )
                        })
                    }
                </div>
                <div>
                    <span>Chat with our Virtual AI Bot <br /> 
                        (24/7 Live Agent Support)</span>
                        <a href={`https://in.chat.kefu.mi.com/page/index/v2?tag=in&token=aW4jNTAwMCNpbi53ZWIubWkjd2Vic2l0ZSNnb29kc0RldGFpbA==&groupId=P0&locale=en&closedshow=1`}><button> Chat Now</button></a>
                </div>
            </div>            
        </>
    )
}

export default Footer
