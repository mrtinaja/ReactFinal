import React from 'react'
import { Helmet } from 'react-helmet';
import logo from "../assets/logo2-bro.png";
import { Link } from "react-router-dom";




export default function Bienvenida() {
 
    return (
        
        <div className="application">
        <Helmet>
            <style>{'body { background-color: black; }'}</style>
            
        </Helmet>
        <img src={logo}
                                        alt=""
                                    
                                        width="200px" />
                                        <h4 id="parrafo_id" style={{ color: '#FFFFFF' }}>
                                            martiend@ te ofrece una amplia variedad de productos y las mejores marcas.
                                            Porque cada día evolucionamos con vos. Gracias por visitarnos.
                                        </h4>
                                        <Link  to="/ingresar">
                                        <button id="button1_id"> Bienvenid@</button>
                                        </Link>
                                      


    </div>
    )
}





