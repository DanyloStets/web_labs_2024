import {useSelector} from "react-redux";
import {CartItemsContainer} from "./cartItemsContainer";
import {CartHeader} from "./cartHeader";
import {CartItem} from "./cartItem";

export const CartPage = () => {
    const cart = useSelector(state => state.cart)
    const totalAmount = useSelector(state => state.totalAmount)

    return (
        <>
        <CartHeader/>
        <CartItemsContainer totalAmount = {totalAmount}>
            {
                Array.isArray(cart) && cart.map(item => (
                    <CartItem
                        key={item.id}
                        airplane={item}
                    />
                ))
            }
        </CartItemsContainer>
        </>
    )
}