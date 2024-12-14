import styles from './css/CartItemsContainer.module.css'

export const CartItemsContainer = (props) => {
    return (
        <>
            <div className={styles.cartContainer}>
                {props.children}
            </div>
            <div className={styles.totalAmountWrapper}>
                <p> Total amount: <span> {props.totalAmount + "$"} </span></p>
            </div>
        </>
    )
}