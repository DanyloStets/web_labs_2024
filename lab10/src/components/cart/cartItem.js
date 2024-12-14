import styles from './css/CartItem.module.css'
import {useDispatch} from "react-redux";
import {actionsType} from "../../store/store";
import close from './../../img/close.png'
import minus from './../../img/minus.png'
import plus from './../../img/plus.png'
import { createContext, useContext, useEffect } from 'react';

export const CartItem = (props) => {
    const dispatch = useDispatch();

    function deleteFromCart() {
        dispatch({
            type: actionsType.deleteFromCart,
            airplaneToDelete: props.airplane
        })
    }

    function addSameItem() {
        dispatch({
            type: actionsType.addSameItem,
            airplaneToUpdate: props.airplane
        })
    }

    function deleteSameItem() {
        dispatch({
            type:actionsType.deleteSameItem,
            airplaneToUpdate:props.airplane
        })
    }

    return (
        <div className={styles.cartItem}>
            <div className={styles.leftCorner}>
                <img src={props.airplane.image} alt={"cart"}/>
                <div>
                    <h3>{props.airplane.title}</h3>
                    <p>{props.airplane.author}</p>
                </div>
            </div>
            <div className={styles.raiseButtons}>
                <button onClick={deleteSameItem}>
                    <img src={minus} alt={'minus'}/>
                </button>
                <p>
                    <strong>{props.airplane.countOfSameAirplanes}</strong>
                </p>
                <button onClick={addSameItem}>
                    <img src={plus} alt={'plus'}/>
                </button>
            </div>
            <div className={styles.rightCorner}>
                <p> {props.airplane.priceInUah + "$"}</p>
                <button onClick={deleteFromCart}>
                    <img src={close} alt={'delete'}/>
                </button>
            </div>
        </div>
    )
}
