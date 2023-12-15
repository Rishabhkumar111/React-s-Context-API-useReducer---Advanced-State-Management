import { createContext } from "react";

const CartContext = createContext({
    items:[],
    onAddItemToCart : ()=>{},
    onUpdateCartItemQuantity: ()=>{}
});

export default CartContext;