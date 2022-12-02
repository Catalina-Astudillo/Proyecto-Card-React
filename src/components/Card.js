import React, { useState } from "react";
import Boton from "./Boton";
// import Boton from "./Boton";
import './Card.css';


const Card = (props) => {
    const [mostrar, setMostrar] = useState(false);
    
    return (
        <>
            <div className='card-container'
                onMouseEnter={() => setMostrar(true)}
                onMouseLeave={() => setMostrar(false)}>
                <figure>
                
                {mostrar && <Boton/>}
                    
                    <div className='card-image'>
                        <img src={require(`${props.objeto.img}`)} alt="iamgen"></img>
                    </div>
                    <figcaption className='container-parrafo'>
                        <h3>$ {props.objeto.precio}</h3>
                        <div className='parrafo'>
                            <span>{props.objeto.cuotas}</span>
                            <p><strong>{props.objeto.envio}</strong></p>
                        </div>
                        {mostrar && 
                        <>
                            <div className="descripcion">{props.objeto.descripcion}</div>
                            {/* <Boton /> */}
                        </>
                        }
                    </figcaption>
                </figure>
            </div>


        </>
    )
}

export default Card;