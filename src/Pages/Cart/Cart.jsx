import React, { useContext, useEffect, useState } from "react";
import "./Cart.css";
import { StoreContext } from "../../Context/StoreContext"; // Adjust path as needed

const Cart = () => {
  const { cartItems, book_list, removeFromCart,} = useContext(StoreContext);
  const [cartDetails, setCartDetails] = useState([]);
  useEffect(() => {
    const details = book_list.filter(book => cartItems[book._id]).map(book => ({
      ...book,
      quantity: cartItems[book._id],
      total: (cartItems[book._id] * book.price).toFixed(2)
    }));
    setCartDetails(details);
  }, [cartItems, book_list]);

  const subtotal = cartDetails.reduce((acc, item) => acc + parseFloat(item.total), 0);
  const deliveryFee = 2.00;
  const total = (subtotal + deliveryFee).toFixed(2);

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {cartDetails.map((item, index) => (
          <div key={index}>
            <div className="cart-items-title cart-items-item">
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
              <p>${item.price.toFixed(2)}</p>
              <p>{item.quantity}</p>
              <p>${item.total}</p>
              <p onClick={() => removeFromCart(item._id)} className="cross">x</p>
            </div>
            <hr />
          </div>
        ))}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2 className="font-bold">Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${subtotal.toFixed(2)}</p> {/* Display formatted subtotal */}
            </div>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${deliveryFee.toFixed(2)}</p> {/* Fixed delivery fee */}
            </div>
            <div className="cart-total-details">
              <b>Total</b>
              <b>${total}</b> {/* Calculate and display total */}
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, enter it here</p>
            <div className="promocode-input">
              <input className="promoinput" type="text" placeholder="Promo code" />
              <button className="submit-button">Submit</button>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Cart;
