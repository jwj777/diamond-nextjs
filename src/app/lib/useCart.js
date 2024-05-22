"use client";
import { createContext, useContext, useState } from "react";
import { CartProvider } from "use-shopping-cart";
// import { validateCartItems } from "use-shopping-cart/utilities";

const CartContext = createContext();

export function CartProviderWrapper({ children }) {
  return (
    <CartProvider
      mode="checkout-session"
      stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}
      currency="USD"
    >
      {children}
    </CartProvider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
