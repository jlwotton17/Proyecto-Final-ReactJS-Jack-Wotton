import './itemDetail.css';
import React,{useState} from "react";
import ItemCount from "../ItemCount";
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';

export const ItemDetail =({data})=> {
    
    const [goToCart, setGoToCart] = useState(false);
    const {addProduct} = useCartContext();

    const onAdd =(quantity) => {
        setGoToCart(true);
        addProduct(data,quantity);
    }

    return (
        <div className="container">
            <div className="detail">
                <img className="detail__image" src={data.image} alt="" />
                <div className="content">
                    <>
                    <h1>{data.title}</h1>
                    <p>Precio: ${data.price}</p>
                    {
                        goToCart ? <Link className='terminar' to='/cart'>Terminar compra</Link> : <ItemCount initial={1} stock={20} onAdd={onAdd}/>
                    }
            
                    </>
                </div>
                <Link className="but__inicio" to='/'>Menú de comida</Link>
            </div>
        </div>
    )
}

export default ItemDetail;