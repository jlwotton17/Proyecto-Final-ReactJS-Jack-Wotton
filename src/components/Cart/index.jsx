import React from "react";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "../ItemCart";
import './cart.css';

const Cart =()=> {
    const {cart, totalPrice} = useCartContext();

    if (cart.length === 0) {
        return (
            <>
            <div className="container__sinComida">
                <p className="sinComida">No hay comida en el carrito</p>
                <Link className="but__sinComida" to='/'>Menú de comida</Link>
            </div>
            </>
        )
    }

    return (
        <>
            {
                cart.map(product => <ItemCart key={product.id} product={product} />)
            }        
            <p>
                Total: ${totalPrice()}
            </p>
        </>
    )
}

export default Cart;