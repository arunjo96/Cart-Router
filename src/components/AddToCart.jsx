import React from "react";

const AddToCart = ({ cart, removeCart, updateQuantity }) => {
  const total = cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);
  const discount = total * 0.1;
  const finalPrice = total - discount;

  return (
    <div className="flex gap-5 items-start mt-10 p-10 cart-container">
     
      <div className="flex-2 w-full cart-list">
        {cart.length > 0 ? (
          cart.map((item) => (
            <div key={item.id} className="border-b border-gray-300 mb-4 pb-2">
              <div className="flex flex-col gap-2 mb-2">
          
                <div className="flex gap-2 items-center cart-image-details ">
                  <img
                    src={item?.image}
                    alt={item?.title}
                    className="w-20 h-20 object-contain"
                  />
                  <div className="text-left">
                    <h6 className="font-semibold text-md">{item?.title}</h6>
                    <p className="font-medium text-sm mt-3">Price: ${item?.price}</p>
                  </div>
                </div>
              </div>

              
              <div className="flex justify-between items-start gap-1 pb-2 mt-3">
                <div className="flex items-center gap-3">
                  <button
                    className="px-2 py-1 bg-gray-200 rounded cursor-pointer"
                    onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}
                  >
                    -
                  </button>
                  <span>{item.quantity || 1}</span>
                  <button
                    className="px-2 py-1 bg-gray-200 rounded cursor-pointer"
                    onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                  >
                    +
                  </button>
                </div>
                <button
                  className="px-3 py-1 text-sm cursor-pointer bg-red-600 text-white rounded"
                  onClick={() => removeCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No products in cart.</p>
        )}
      </div>


      {cart.length > 0 && (
        <div className="flex-1 p-4 border border-gray-300 rounded">
          <h6 className="mb-2 font-semibold text-lg">Price Details</h6>
          <p className="mb-3">Price: ${total.toFixed(2)}</p>
          <p className="mb-3 text-green-700 font-medium">
            Discount (10%): -${discount.toFixed(2)}
          </p>
          <h6 className="mt-1 font-bold text-lg">Total Amount: ${finalPrice.toFixed(2)}</h6>
        </div>
      )}
    </div>
  );
};

export default AddToCart;
