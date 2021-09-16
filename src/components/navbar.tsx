import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter , faLinkedinIn, faInstagram} from '@fortawesome/free-brands-svg-icons';

export interface INavbarProps {
}

export function Navbar (props: INavbarProps) {
  return (

    <>
        <header className="cs-header">
            <div className="cs-header__wrapp">
                <div className="cs-header__content-wr">
                    <div className="cs-logo cs-logo--header">
                        <a className="cs-logo__link" href="">
                            <img src={'logo-black.png'} alt="" className="image_logo"/>
                        </a>
                        <a className="cs-logo__link" href="" >
                            <img src={'logo-white.png'} alt="" className="image_logo" style={{backgroundColor: 'black'}}/>
                        </a>
                    </div>
                    <div className="cs-header__nav">
                        <div className="cs-header__inner">
                            <nav>
                                <ul className="main-menu">
                                    <li className="menu-item current-menu-ancestor"><a href="">HOME</a></li>
                                    <li className="menu-item current-menu-ancestor"><a href="">SERVICIOS</a></li>
                                    <li className="menu-item current-menu-ancestor"><a href="">PROJECTOS</a></li>
                                    <li className="menu-item current-menu-ancestor"><a href="">CONTACTO</a></li>
                                    <li className="menu-item current-menu-ancestor"><a href="">BLOG</a></li>
                                </ul>
                            </nav>

                        </div>
                    </div>
                    <div className="cs-header__nav-btn">
                        <ul className="cs-socials cs-socials--menu">
                            <li className="cs-socials__item">
                                <a target="_blank" href="#"><FontAwesomeIcon icon={faFacebookF} className="fa"/></a>
                                
                            </li>
                            <li className="cs-socials__item">
                                <a target="_blank" href="#"><FontAwesomeIcon icon={faTwitter} className="fa"/></a>
                                
                            </li>
                            <li className="cs-socials__item">
                                <a target="_blank" href="#"><FontAwesomeIcon icon={faLinkedinIn} className="fa"/></a>
                                
                            </li>
                        </ul>

                    </div>


                </div>


                {/* </div>
                <a href="/" className="navbar-brand">DSEA servicio de Arquitectura</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="#">HOME</a></li>
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="#">SERVICIOS</a></li>
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="#">INSPIRACIONES</a></li>
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="#">CONTACTO</a></li>
                    </ul>
                </div>
                
                
                <div className="col-md-3 text-end">
                    <i>Icon Facebook</i>
                    <i>Icon Linkedin</i>
                </div> */}
            </div>            

        </header>
        
    </>
    

    
  );
}
