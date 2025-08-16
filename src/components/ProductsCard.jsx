import React from 'react'
import {Button, Typography, Box} from "@mui/material"
import { useNavigate } from 'react-router'


const ProductsCard = ({productsValue, addToCart, removeCart, cart  }) => {
  
      const navigate = useNavigate()

const inCart = cart.some(item => item.id === productsValue.id);

  return (
    <>
            <Box className="product_card"  >
                <Box className="img_content">
                  <img src={productsValue.image} alt={productsValue.title} />
                <Typography sx={{fontSize: "15px", fontWeight: 600, margin: "8px 0"}}>{productsValue.title}</Typography>
                <Typography sx={{fontSize: "12px", height: "90px", overflowY: "auto"}}>{productsValue.description}</Typography>
                </Box>
                <Box className="price_content">
                   <Typography variant='subtitle1' sx={{fontWeight:600, margin: "8px 0"}}>Price $ : {productsValue.price}</Typography>
                  <Box className="cart-btn">
                      <Button
                  variant="contained"
                  
                  color={inCart ? "error" : "primary"}
                  onClick={() => (inCart ? removeCart(productsValue.id) : addToCart(productsValue))}
                >
                  {inCart ? "Remove" : "Add to Cart"}
                </Button>
                <Button variant="outlined"  onClick={() => navigate("/cart")}>
                  Go to Cart
                </Button>
                  </Box>
                </Box>
            </Box>
    </>
  )
}

export default ProductsCard
