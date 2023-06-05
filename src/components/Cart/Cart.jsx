import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

const Cart = () => {
    return (
        <div _id={el._id}
        title={el.title}
        price={el.price}
        colorName={el.colorName}
        size={el.size}
        thumbnail={el.thumbnail}
        quantity={el.quantity}>
            
        </div>
    );
}

export default Cart;
