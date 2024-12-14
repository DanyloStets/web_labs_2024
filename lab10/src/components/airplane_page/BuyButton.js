import './css/BuyButton.css';
import {useDispatch} from "react-redux";
import {actionsType} from "../../store/store";

const BuyButton = (props) => {
    const dispatch = useDispatch()
    function addItemToCart() {
        dispatch({
            type: actionsType.addToCart,
            airplaneToAdd: props.airplaneData
        })
    }

    return (
        <div className={'button-wrapper'}>
            <button className={'buy-button'}
                    onClick={addItemToCart}>
                {props.airplaneData.priceInUah + '$'}
                <p>
                    Add to cart
                </p>
            </button>
        </div>
    )
}

export default BuyButton