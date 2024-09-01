import { createContext, useReducer } from "react";

const initialState = {};
const reducer = () => {};

const cartContext = createContext();

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <CartContext.Provider value={state}>{children}</CartContext.Provider>;
}

export default CartProvider;
