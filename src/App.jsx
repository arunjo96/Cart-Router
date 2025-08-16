import { useEffect, useState } from 'react';
import Products from './pages/Products';
import {  Routes, Route } from "react-router-dom";
import './App.css';
import Cart from './pages/Cart';
import Navbar from './pages/Navbar';


function App() {

  const [products, setProducts] = useState([])

  const [cart, setCart] = useState([])


    useEffect(()=>{
      fetch("https://fakestoreapi.com/products", {method:"GET"})
      .then((response) => response.json())
      .then((data)=> setProducts(data))
        .catch((error) => console.error('Error fetching data:', error));
  },[])

 const addToCart = (productCart) =>{
      setCart((prevCart)=> [...prevCart, productCart])
 };

 const removeCart = (id)=>{
  setCart((prevCart)=> prevCart.filter((addToCart)=> addToCart.id !== id));
 }

 const updateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    setCart((prev) =>
      prev.map((Updateitem) => (Updateitem.id === id ? { ...Updateitem, quantity } : Updateitem))
    );
  };


  

  return (
    <>
  
      <Navbar cartCount={cart.length} />
        <Routes>
            <Route path="/Cart" element={ <Cart cart={cart} setCart={setCart} removeCart={removeCart} updateQuantity={updateQuantity} />} />
            <Route path="/" element={ <Products products={products} setProducts={setProducts} cart={cart} addToCart={addToCart} removeCart={removeCart } />   } />
        </Routes>

     
        


    </>
  )
}

export default App
