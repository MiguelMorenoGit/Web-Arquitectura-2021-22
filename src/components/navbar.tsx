import * as React from 'react';

export interface INavbarProps {
}

export function Navbar (props: INavbarProps) {
  return (

    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
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
                </div>
            </div>            

        </nav>
        
    </>
    

    
  );
}
