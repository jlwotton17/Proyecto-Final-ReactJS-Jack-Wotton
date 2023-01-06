import './item.css';

import { Link } from 'react-router-dom';
import React from 'react';

const Item =({info})=>{
    

    return(
        <Link to={`/detalle/${info.id}`} className='detalle__comida'>
            <img src={info.image} alt='' />
            <div className='detalle__info'>
                <p className='detalle__title'>{info.title}</p>
                <p>Precio: ${info.price}</p>
            </div>
        </Link>
    )
}

export default Item;

