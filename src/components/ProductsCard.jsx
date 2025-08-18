import React from 'react';
import { useNavigate } from 'react-router';

const ProductsCard = ({ productsValue, addToCart, removeCart, cart }) => {
  const navigate = useNavigate();
  const inCart = cart.some(item => item.id === productsValue.id);

  return (
    <div className="border border-gray-300 rounded p-4 flex flex-col gap-3 shadow hover:shadow-lg transition justify-between">
   
      <div className="img_content flex flex-col items-center">
        <img
          src={productsValue.image}
          alt={productsValue.title}
          className="w-32 h-32 object-contain mb-2"
        />
        <h6 className="text-sm font-semibold mb-2 text-center">{productsValue.title}</h6>
        <p className="text-xs h-24 overflow-y-auto text-center">{productsValue.description}</p>
      </div>

 
      <div className="price_content flex flex-col gap-2">
        <p className="font-semibold mb-2">Price $ : {productsValue.price}</p>
        <div className="flex gap-2 flex-wrap justify-evenly">
          <button
            className={`px-3 py-1 rounded text-white text-sm cursor-pointer ${
              inCart ? 'bg-red-600 hover:bg-red-700' : 'bg-[#1976d2]'
            } transition`}
            onClick={() => (inCart ? removeCart(productsValue.id) : addToCart(productsValue))}
          >
            {inCart ? 'Remove' : 'Add to Cart'}
          </button>
          <button
            className="px-3 py-1 rounded border cursor-pointer text-sm border-gray-500 hover:bg-gray-100 transition"
            onClick={() => navigate('/cart')}
          >
            Go to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
