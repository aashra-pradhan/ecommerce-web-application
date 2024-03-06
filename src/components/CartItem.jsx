import React, { useContext } from "react";
import { CartContext } from "../context/useCartContext";
import { NavLink } from "react-router-dom";

const CartItem = ({ product }) => {
  const { products, removeFromCart, setActiveProduct } =
    useContext(CartContext);

  return (
    <>
      <div className="cart-item">
        <img src={product?.productImages[0]?.url} alt="productImage" />
        <br />
        <p className="cart-items">{product?.name}</p>
        <br />
        <p className="cart-items">{product?.chosenQuantity}</p>
        <br />
        <p className="cart-items">{product?.totalPrice}</p>
        <br />
        <NavLink to="/product/purchase">
          <button
            className="rounded w-full border-slate-900 rounded-lg bg-green-100 mt-2 hover:cursor-pointer"
            onClick={() => {
              setActiveProduct([product]);
            }}
          >
            Buy now
          </button>
        </NavLink>
        <br />
        <button
          className="rounded w-full border-slate-900 rounded-lg bg-green-100 mt-2 hover:cursor-pointer"
          onClick={() => removeFromCart(product.productId)} // Pass the filtered item to removeFromCart
        >
          Remove item
        </button>
      </div>
    </>
  );
};

export default CartItem;
