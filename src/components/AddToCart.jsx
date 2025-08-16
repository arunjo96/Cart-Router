import { Box, Typography, Button } from "@mui/material";
import { green } from "@mui/material/colors";
import React from "react";

const AddToCart = ({ cart, removeCart, updateQuantity }) => {
  const total = cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);
  const discount = total * 0.1;
  const finalPrice = total - discount;

  return (
    <Box className="cart-container" sx={{ display: "flex", gap: 5, alignItems: "flex-start", mt:10, p:5  }}>

      <Box sx={{ flex: 2 }} className="cart-list">
        {/* <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>Your Cart</Typography> */}

        {cart.length > 0 ? (
          <>
            {cart.map((item) => (
              <Box key={item.id} sx={{borderBottom: "1px solid #ddd", mb: 4}}>
              <Box className="cart-item"  sx={{ display: "flex", flexDirection: "column", mb: 2, gap: 2,  pb: 2 }}>
                
              
                <Box sx={{ display: "flex", gap: 2, alignItems: "center", flex: 1 }} className="cart-image-details">
                  <img src={item.image} alt={item.title} width="80" height="80" style={{ objectFit: "contain" }} />
                  <Box sx={{textAlign: "start"}}>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>{item.title}</Typography>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>Price: ${item.price}</Typography>
                  </Box>
                </Box>

            
              </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 1, pb:2 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <button onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}>-</button>
                    <span>{item.quantity || 1}</span>
                    <button onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}>+</button>
                  </Box>
                  <Button variant="contained" color="error" onClick={() => removeCart(item.id)}>
                    Remove
                  </Button>
                </Box>

              </Box>
            ))}
          </>
        ) : (
          <Typography>No products in cart.</Typography>
        )}
      </Box>

 
      {cart.length > 0 && (
        <Box sx={{ flex: 1, p: 2, border: "1px solid #ddd", borderRadius: 2,  }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>Price Details</Typography>
          <Typography sx={{mb: 3}}>Price: ${total.toFixed(2)}</Typography>
          <Typography sx={{mb: 3, color: "#318935ff", fontWeight: 500}}>Discount (10%): -${discount.toFixed(2)}</Typography>
          <Typography variant="h6" sx={{ mt: 1, fontWeight: 700 }}>Total Amount: ${finalPrice.toFixed(2)}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default AddToCart;
