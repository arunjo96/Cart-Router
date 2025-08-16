import {useEffect, useState} from 'react';
import ProductsCard from '../components/ProductsCard';


const Products = ({products, setProducts, addToCart, removeCart, cart }) => {
   

  
  return (
    <>
      <div className="main_card">
            {products.map((productsValue, index)=>(
              <ProductsCard productsValue={productsValue} key={index} products={products} cart={cart} removeCart={removeCart} setProducts={setProducts} addToCart={addToCart}  />
            ))}
        </div>
    </>
  )
}

export default Products
