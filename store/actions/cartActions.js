import { 
    ADD_TO_CART,
    REMOVE_ITEM,
    SUB_QUANTITY,
    ADD_QUANTITY,
    ADD_QUANTITY_WITH_NUMBER,
    RESET_CART,
    ADD_TO_COMPARE,
    REMOVE_ITEM_FROM_COMPARE,
    SET_CURRENT_DOG,
    SET_CURRENT_LITTER,
    SORT_AWARDS,
} from './action-types/cart-actions'

//add cart action
export const setCurrentDog = (id) => {
    return {
        type: SET_CURRENT_DOG,
        id
    }
}

//add cart action
export const sortAwards = (awardType, value) => {
    return {
        type: SORT_AWARDS,
        awardType,
        value
    }
}
//add cart action
export const setCurrentLitter = (id) => {
    return {
        type: SET_CURRENT_LITTER,
        id
    }
}

//add cart action
export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        id
    }
}
//remove item action
export const removeItem = (id) => {
    return {
        type: REMOVE_ITEM,
        id
    }
}
//subtract qt action
export const subtractQuantity = (id) => {
    return {
        type: SUB_QUANTITY,
        id
    }
}
//add qt action
export const addQuantity = (id) => {
    return {
        type: ADD_QUANTITY,
        id
    }
}

//add qt action with quantity number
export const addQuantityWithNumber = (id, qty) => {
    return {
        type: ADD_QUANTITY_WITH_NUMBER,
        id,
        qty
    }
}

// Reset cart after form submit
export const resetCart = () => {
    return {
        type: RESET_CART
    }
}

//add compare action
export const addToCompare = (id) => {
    return {
        type: ADD_TO_COMPARE,
        id
    }
}
//remove item from compare action
export const removeItemFromCompare = (id) => {
    return {
        type: REMOVE_ITEM_FROM_COMPARE,
        id
    }
}
