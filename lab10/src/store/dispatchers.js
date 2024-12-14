export const addToCartDispatcher = (state, action) => {
    if (!action.airplaneToAdd) return state;
    const existingItem = state.cart.find(airplane => airplane.id === action.airplaneToAdd.id);
    if (existingItem) {
        existingItem.countOfSameAirplanes += 1;
        existingItem.priceInUah += existingItem.initialPrice;
        return {
            ...state,
            totalAmount: state.totalAmount + existingItem.initialPrice,
        };
    } else {
        const newCartItem = {
            ...action.airplaneToAdd,
            countOfSameAirplanes: 1,
            priceInUah: action.airplaneToAdd.priceInUah,
            initialPrice: action.airplaneToAdd.priceInUah
        };
        return {
            ...state,
            cart: [...state.cart, newCartItem],
            totalAmount: state.totalAmount + newCartItem.initialPrice,
            countOfCartItems: state.countOfCartItems + 1,
        };
    }
};


export const deleteFromCartDispatcher = (state, action) => {
    if (!action.airplaneToDelete) {
        console.error('Action airplaneToDelete is undefined');
        return state;
    }
    const deletedItem = state.cart.find((airplane) => airplane.id === action.airplaneToDelete.id);

    if (!deletedItem) {
        return state;
    }

    const updatedCart = state.cart.filter((airplane) => airplane.id !== action.airplaneToDelete.id);

    return {
        ...state,
        cart: updatedCart,
        totalAmount: state.totalAmount - (deletedItem.initialPrice * deletedItem.countOfSameAirplanes),
        countOfCartItems: state.countOfCartItems - 1,
    };
};

export const addSameItem = (state, action) => {
    const updatedCart = state.cart.map((airplane) =>
        airplane.id === action.airplaneToUpdate.id ? {
                ...airplane,
                countOfSameAirplanes: airplane.countOfSameAirplanes + 1,
                priceInUah: airplane.priceInUah + action.airplaneToUpdate.initialPrice,
            }
            : airplane
    );

    const updatedTotalAmount =
        state.totalAmount + action.airplaneToUpdate.initialPrice;

    return {
        ...state,
        cart: updatedCart,
        totalAmount: updatedTotalAmount,
        countOfCartItems: state.countOfCartItems + 1,
    };
};

export const deleteSameItem = (state, action) => {

    if (action.airplaneToUpdate.countOfSameAirplanes === 1) {
        return state
    }

    const updatedCart = state.cart.map((airplane) =>
        airplane.id === action.airplaneToUpdate.id && airplane.countOfSameAirplanes > 1
            ? {
                ...airplane,
                countOfSameAirplanes: airplane.countOfSameAirplanes - 1,
                priceInUah: airplane.priceInUah - action.airplaneToUpdate.initialPrice,
            }
            : airplane
    );

    const updatedTotalAmount =
        state.totalAmount - action.airplaneToUpdate.initialPrice;

    return {
        ...state,
        cart: updatedCart,
        totalAmount: updatedTotalAmount,
        countOfCartItems: state.countOfCartItems - 1,
    };
};