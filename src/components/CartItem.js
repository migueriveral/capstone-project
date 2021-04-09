import React, {useContext, useState} from "react"
import { Context } from "../Context"

function CartItem({item}) {
    const [hovered, setHovered] = useState(false)
    const {removeFromCart} = useContext(Context)

    const classNameText = hovered ? "fill" : "line"

    return (
        <div className="cart-item">
            <i 
                className={`ri-delete-bin-${classNameText}`} 
                onClick={() => removeFromCart(item)}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                ></i>
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}

export default CartItem