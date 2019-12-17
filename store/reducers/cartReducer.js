import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import { 
    SET_CURRENT_DOG,
    ADD_TO_CART,
    REMOVE_ITEM,
    SUB_QUANTITY,
    ADD_QUANTITY, 
    ADD_SHIPPING,
    ADD_QUANTITY_WITH_NUMBER,
    RESET_CART,
    ADD_TO_COMPARE,
    REMOVE_ITEM_FROM_COMPARE
} from '../actions/action-types/cart-actions'

const initState = {
    products: [
        {
            id: 1,
            title: "Belted chino trousers polo",
            price: 190,
            image: require("../../images/img1.jpg"),
            imageHover: require("../../images/img-hover1.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        },
        {
            id: 2,
            title: "Belted chino trousers polo",
            price: 120,
            image: require("../../images/img2.jpg"),
            imageHover: require("../../images/img-hover2.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        },
    ],
    addedItems:[],
    addedItemsToCompare:[],
    total: 0,
    shipping: 0,
    currentDog: 1,
    dogs: [
        {
            id: 1,
            call: "Sirius",
            sex: "male",
            name: "GCH Old Bay's Let's Get Sirius CGC, TDI",
            sire: "",
            dam: "",
            dob: "10/26/2010",
            living: true,
            rip: "",
            owner: "Cindy and John Flowers",
            aka: "Seriously Cute, Serial",
            lives: "Cindy and John Flowers",
            health: "",
            image: require("../../images/info/Sirius.jpg"),
            Titles: [
                "AKC Champion",
                "AKC Grand Champion",
                "Canine Good Citizen",
                "Therapy Dog International"
            ],
        },
        {
            id: 2,
            call: "Bennie",
            sex: "male",
            name: "OLD BAY'S BUMBLE BENNIE",
            sire: "GCH Bear N Mind's Stand Up And Cheer, RN, DD",
            dam: "GCH Old Bay's Lucy Fur",
            dob: "12/9/2012",
            neutered: true,
            rip: "",
            owner: "Cindy and John Flowers",
            aka: "	Bennie Boo Boo Bear",
            lives: "Kathy Hamilton",
            health: "http://www.offa.org/display.html?appnum=1565055#animal",
            image: require("../../images/info/Bennie.jpg"),
            Titles: [
            ],
        },
    ]
}

const cartReducer = (state = initState, action) => {

    if(action.type === SET_CURRENT_DOG){
        return {
            ...state,
            currentDog : action.id
        }
    }
   
    if(action.type === ADD_TO_CART){
        let addedItem = state.products.find(item => item.id === action.id)
        //check if the action id exists in the addedItems
        let existed_item= state.addedItems.find(item=> action.id === item.id)
        if(existed_item){
            addedItem.quantity += 1 
            return {
                ...state,
                total: state.total + addedItem.price 
            }
        } else {
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            
            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }

    if(action.type === ADD_TO_COMPARE){
        let addedItemToCompare = state.products.find(item => item.id === action.id)
        
        addedItemToCompare.quantity = 1;
        
        return {
            ...state,
            addedItemsToCompare: [...state.addedItemsToCompare, addedItemToCompare]
        }
    }

    if(action.type === ADD_QUANTITY_WITH_NUMBER){
        let addedItem = state.products.find(item => item.id === action.id)
        //check if the action id exists in the addedItems
        let existed_item = state.addedItems.find(item=> action.id === item.id)
        if(existed_item)
        {
            addedItem.quantity += action.qty
            return {
                ...state,
                total: state.total + addedItem.price * action.qty
            }
        } else {
            addedItem.quantity = action.qty;
            //calculating the total
            let newTotal = state.total + addedItem.price * action.qty
            
            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }
    

    if(action.type === REMOVE_ITEM){
        let itemToRemove = state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity );

        return {
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }

    if(action.type === REMOVE_ITEM_FROM_COMPARE){
        let new_items = state.addedItemsToCompare.filter(item=> action.id !== item.id)
        
        return {
            ...state,
            addedItemsToCompare: new_items
        }
    }

    if(action.type === ADD_QUANTITY){
        let addedItem = state.products.find(item=> item.id === action.id)
        addedItem.quantity += 1 
        let newTotal = state.total + addedItem.price
        return {
            ...state,
            total: newTotal
        }
    }

    if(action.type === SUB_QUANTITY){  
        let addedItem = state.products.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        } else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                total: newTotal
            }
        }
        
    }

    if(action.type === ADD_SHIPPING){
        return {
            ...state,
            shipping: state.shipping += 6
        }
    }

    if(action.type === 'SUB_SHIPPING'){
        return {
            ...state,
            shipping: state.shipping -= 6
        }
    }

    if(action.type === RESET_CART){
        return {
            ...state,
            addedItems: [],
            total: 0,
            shipping: 0
        }
    }
    
    else {
        return state
    }
}

export const initStore = (initialState = initState) => {
    return createStore(
        cartReducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunkMiddleware))
    )
}