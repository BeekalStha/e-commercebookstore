import React, { useContext, useEffect, useState } from 'react';
import { FaRegStar, FaStar } from "react-icons/fa";
import { GrFormSubtract } from "react-icons/gr";
import { IoAddOutline } from "react-icons/io5";
import './BookItem.css';
import { StoreContext } from '../../Context/StoreContext'; // Adjust path as needed

const BookItem = ({ id, name, price, author, image }) => {
  const rating = 4; // Replace with your actual rating data (1-5)
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    setItemCount(cartItems[id] || 0);
  }, [cartItems, id]);

  const handleAddToCart = () => {
    addToCart(id);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(id);
  };

  return (
    <div className='book-item'>
      <div className="book-item-img-container">
        <img className='book-item-image' src={image} alt='' />
        {!cartItems[id] ? (
          <IoAddOutline className='addition' onClick={handleAddToCart} />
        ) : (
          <div className='book-item-counter'>
            <GrFormSubtract className='subtract' onClick={handleRemoveFromCart} />
            <p>{itemCount}</p>
            <IoAddOutline className='add' onClick={handleAddToCart} />
          </div>
        )}
      </div>
      <div className='book-item-info p-4'>
        
        <div className="book-item-name-rating">

        <div className="rating flex items-center mb-4">
            {Array(5).fill(null).map((_, index) => (
              <span key={index}>
                {index < rating ? (
                  <FaStar className="text-yellow-500" />
                ) : (
                  <FaRegStar className="text-gray-300" />
                )}
              </span>
            ))}
          </div>
          <p>{name}</p>
          
        </div>
        <p className="book-item-author">{author}</p>
        <div className='flex justify-between'>
          <div>
            <p className="book-item-price">${price.toFixed(2)}</p>
          </div>
          <div className="add-to-cart">
            <button onClick={handleAddToCart}>Add to cart ({itemCount})</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookItem;
