import * as React from "react"
import { Link } from "gatsby"
import { Navbar } from "../components/navbar"
import { MiniNav } from "../components/miniNav"

// styles


// data
const links = [
    {
        text: "Tutorial",
        url: "https://www.gatsbyjs.com/docs/tutorial/",
        description:
        "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
        color: "#E95800",
    },
]

// markup
export const IndexPage = () => {
    let [BannerTranslateY, setBannerTranslateY] = React.useState<number>(-(window.innerHeight/2));

    const COEF_TRANSLATE = 2;

    
    //FUNCTIONS
    const OnScrollChange = () => {
        let newBannerTranslateY = -(window.innerHeight/2 - window.scrollY/COEF_TRANSLATE);
        setBannerTranslateY(newBannerTranslateY) 
    }

    //LISTENERS
    window.addEventListener('scroll',OnScrollChange);

    return (
        <div className="cs-main-wrapp">
            <MiniNav/>
            <Navbar/>
            <div className="cs-main-wrapp__inner">
                <div className="padd-only-xs">
                    <div className="row-fluid row-no-padding"
                            style={{
                                position:"relative",
                                boxSizing:"border-box",
                                width:`${window.innerWidth}`
                            }}>
                        <div className="column_container col-sm-12 ">
                            <div>
                                <div>

                                    <section className="container-fluid cs-banner no-padd  play cs-banner--fullheight js-fullheight js-parallax-banner-parent" style={{minHeight: "571px"}}>
                                        <div className="js-parallax-banner-item s-back-switch parallaxing"
                                            style={{ 
                                                backgroundImage: `url("test-imgBanner01.jpeg")`, 
                                                // backgroundImage: `url("main-01.jpg")`, 
                                                height:`${window.screen.height*2}px`,
                                                transform: `translateY(${BannerTranslateY}px)`
                                            }}>
                                            
                                        </div>
                                        <span className="cs-overlay"></span>
                                        <div className="cs-banner__content js-banner-animation js-fullheight__content js-banner-animation--animated" 
                                            style={{transform: "matrix(1, 0, 0, 1, 0, 0)", opacity: 1}}>
                                            <h1 className="cs-banner__title">UNIQUE</h1>
                                            <div className="cs-banner__desc">
                                                <h6>DESIGN IS MAKING SENSE<br/>OF THINGS.</h6>
                                            </div>
                                        </div>
                                    </section>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row-full-width clearfix"></div>
                </div>
            </div>
        
        </div>
    )
}

export default IndexPage
