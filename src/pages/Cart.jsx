import { Button, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import AddToCart from '../components/AddToCart'

const Cart = ({cart, removeCart, updateQuantity}) => {




  return (
    <>
      <AddToCart cart={cart} removeCart={removeCart} updateQuantity={updateQuantity} />
    </>
  )
}

export default Cart
