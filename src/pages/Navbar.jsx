import React from "react";
import { AppBar, Toolbar, Typography,  Box, Chip } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = ({ cartCount }) => {
  return (
    <AppBar position="fixed" >
      <Toolbar sx={{justifyContent: "space-between"}}>
        <Typography variant="h6" sx={{  }}>
          JoCart
        </Typography>

        <Box sx={{display: "flex", gap:"15px" }} className="link_tag">
          <Chip sx={{cursor:"pointer"}} className="link-chip" component={Link} to="/" label="Products">
            
          </Chip>
          <Chip sx={{cursor:"pointer"}} className="link-chip" component={Link} to="/cart" label="Cart">
             ({cartCount})
          </Chip>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
