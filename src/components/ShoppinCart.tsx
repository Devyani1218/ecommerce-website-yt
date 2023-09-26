import React, { useState } from 'react'; 
import { AiOutlineShopping } from 'react-icons/ai';

const ShoppingCart = () => {
  const [count, setCount] = useState(0);

  const handleAddToCart = () => {
    // Increment the count when the icon is clicked
    setCount(count + 1);
  };

  return (
    <div>
      <div>
        <AiOutlineShopping size={32} onClick={handleAddToCart} />
      </div>
      <p>Items in Cart: {count}</p>
    </div>
  );
};

export default ShoppingCart;






