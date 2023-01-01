import React from "react";
import { useCartContext } from "../../context/CartContext";


export const CartWidget =()=>{
    const {totalProducts} = useCartContext();

    return (
        <>
            <i className="bi bi-cart3"></i>
            <span>{totalProducts() || ''}</span>
        </>
    )
}

export default CartWidget;