import React, {useContext, useState} from "react"
import {Context} from "../Context"
import CartItem from "../components/CartItem"

function Cart() {
    const [ordering, setOrdering] = useState('idle')

    const {cartItems, emptyCart} = useContext(Context)
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))

    const totalCost = cartItems.length * 5.99

    function displayText() {
        if(ordering === 'idle') {
            return "Place order"
        } else if(ordering === 'pending') {
            return 'Ordering...'
        }
    } 

    function placeOrder() {
        setOrdering('pending')
        setTimeout(() => {
            emptyCart()
            setOrdering('idle')
        }, 3000)
    }
    
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})}</p>
            {
                cartItems.length > 0 ?
                <div className="order-button">
                    <button onClick={() => placeOrder()}>{displayText()}</button>
                </div>:
                <p>Your cart is empty!</p>
            }
        </main>
    )
}

export default Cart