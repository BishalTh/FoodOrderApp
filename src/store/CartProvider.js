import CartContext from "./cart-context";

const CartProvider = (props) => {
  const addItemFromCartHandler = (item) => {};

  const removetemFromCartHandler = (id) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemFromCartHandler,
    removeItem: removetemFromCartHandler,
  };

  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
