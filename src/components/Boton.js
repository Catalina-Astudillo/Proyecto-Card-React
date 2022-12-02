
import React, { useState } from 'react';
import './Boton.css'
import { FaHeart, FaRegHeart} from "react-icons/fa";



const Boton = () => {
    const[heart, setHeart] = useState(false)
    
    return (
        <button onClick={()=>setHeart(!heart)}>
            {heart ? <FaHeart className='heartVacio'/> : <FaRegHeart className='heartRelleno'/>}
        </button>
    )
}

export default Boton;