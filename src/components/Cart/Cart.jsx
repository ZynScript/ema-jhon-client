import React from "react";
import "./Cart.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashAlt} from "@fortawesome/free-solid-svg-icons";

const Cart = ({cart, handleClearCart, children}) => {
  // const cart = props.cart
  //   const {cart} = props;

  console.log(cart);

  let totalPrice = 0;
  let totalShipping = 0;

  for (const product of cart) {
    totalPrice = totalPrice + product.price;
    totalShipping = totalShipping + product.shipping;
  }

  const tax = (totalPrice * 7) / 100;
  const grandTotal = totalPrice + totalShipping + tax;

  return (
    <div className="cart">
      <h3>Order Summary</h3>
      <p>Selected Items: {cart.length}</p>
      <p>Total Price: ${totalPrice}</p>
      <p>Total Shipping: {totalShipping}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h4>Grand Final: ${grandTotal.toFixed(2)}</h4>
      <button onClick={handleClearCart} className="btn-clear-cart">
        <span>Clear Cart</span>
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
      {children}
    </div>
  );
};

export default Cart;
