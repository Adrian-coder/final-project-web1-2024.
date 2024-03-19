

function CartModal({ cart, removeFromCart, onClose }) {
    const [showPaymentForm, setShowPaymentForm] = useState(false);
    const [paymentSuccessful, setPaymentSuccessful] = useState(false);

    const handleConfirmPurchase = () => {
        if (cart.length > 0) {
            setShowPaymentForm(true);
        } else {
            alert('Coșul este gol.');
        }
    };

    const handlePayment = () => {
        console.log("Plată efectuată");
        setPaymentSuccessful(true);
        setShowPaymentForm(false);
        cart.splice(0, cart.length);
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
                                <button onClick={() => removeFromCart(index)} className="btn-remove">Șterge</button>
                            </li>
                        ))}
                    </ul>
                ) : paymentSuccessful ? (
                    <p>Plata efectuată cu succes!</p>
                ) : (
                    <p>Coșul este gol.</p>
                )}

                {!paymentSuccessful && (
                    <>
                        <button onClick={handleConfirmPurchase} className="btn-confirm">Confirmă</button>
                        {showPaymentForm && (
                            <div className="payment-form">
                                <h3>Detalii plată</h3>
                                <input type="text" placeholder="Număr card" />
                                <input type="text" placeholder="Data expirării" />
                                <input type="text" placeholder="CVV" />
                                <button onClick={handlePayment} className="btn-pay">Plătește</button>
                            </div>
                        )}
                    </>
                )}
                <button onClick={onClose} className="btn-close">Închide</button>
            </div>
        </div>
    );
}

export default CartModal;
