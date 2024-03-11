import React from 'react';
import './style/styles.css';

function CartModal({ cart, removeFromCart, onClose }) {
  const handleConfirmPurchase = () => {
    console.log("Cumpărătura confirmată!");
    
  };

  return (
    <div className="cart-modal">
      <div className="cart-content">
        <h2>Coș de cumpărături</h2>
        {cart.length > 0 ? (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                <span>{item.name} - {item.price}$</span>
                <div>
                  <button onClick={() => removeFromCart(index)} className="btn-remove">Șterge</button>
                  <button onClick={handleConfirmPurchase} className="btn-confirm">Confirmă</button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>Coșul este gol.</p>
        )}
        <button onClick={onClose} className="btn-close">Închide</button>
      </div>
    </div>
  );
}

export default CartModal;
