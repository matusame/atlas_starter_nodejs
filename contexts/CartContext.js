// contexts/CartContext.js
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    // Verifica se o produto já está no carrinho
    const existingProduct = cart.find((item) => item.product.id === product.id);
    

    if (existingProduct) {
      // Se o produto já estiver no carrinho, atualiza a quantidade
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        )
      );
    } else {
      // Se o produto não estiver no carrinho, adiciona como novo item
      setCart((prevCart) => [...prevCart, { product, quantity }]);
    }
    console.log(`Adicionando ${quantity} ${product.name}(s) ao carrinho.`);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: Math.max(0, item.quantity - 1) } // Reduz a quantidade em 1, no mínimo 0
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, totalItemsInCart: cart.reduce((total, item) => total + item.quantity, 0) }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
