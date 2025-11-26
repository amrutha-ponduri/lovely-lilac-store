import React, { createContext, useContext, useState, useCallback } from "react";
import { Product, CartItem } from "@/data/mockData";

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, quantity?: number, size?: string, color?: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  toggleSelect: (productId: string) => void;
  selectAll: () => void;
  deselectAll: () => void;
  getSelectedItems: () => CartItem[];
  getSelectedTotal: () => number;
  getSelectedCount: () => number;
  getTotalItems: () => number;
  clearCart: () => void;
  isInCart: (productId: string) => boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<(CartItem & { selected: boolean })[]>([]);

  const addToCart = useCallback((product: Product, quantity = 1, size?: string, color?: string) => {
    setItems((prev) => {
      const existingIndex = prev.findIndex((item) => item.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      }
      return [...prev, { ...product, quantity, selectedSize: size, selectedColor: color, selected: true }];
    });
  }, []);

  const removeFromCart = useCallback((productId: string) => {
    setItems((prev) => prev.filter((item) => item.id !== productId));
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setItems((prev) =>
      prev.map((item) => (item.id === productId ? { ...item, quantity } : item))
    );
  }, [removeFromCart]);

  const toggleSelect = useCallback((productId: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, selected: !item.selected } : item
      )
    );
  }, []);

  const selectAll = useCallback(() => {
    setItems((prev) => prev.map((item) => ({ ...item, selected: true })));
  }, []);

  const deselectAll = useCallback(() => {
    setItems((prev) => prev.map((item) => ({ ...item, selected: false })));
  }, []);

  const getSelectedItems = useCallback(() => {
    return items.filter((item) => item.selected);
  }, [items]);

  const getSelectedTotal = useCallback(() => {
    return items
      .filter((item) => item.selected)
      .reduce((total, item) => total + item.price * item.quantity, 0);
  }, [items]);

  const getSelectedCount = useCallback(() => {
    return items.filter((item) => item.selected).length;
  }, [items]);

  const getTotalItems = useCallback(() => {
    return items.reduce((total, item) => total + item.quantity, 0);
  }, [items]);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const isInCart = useCallback((productId: string) => {
    return items.some((item) => item.id === productId);
  }, [items]);

  return (
    <CartContext.Provider
      value={{
        items: items as CartItem[],
        addToCart,
        removeFromCart,
        updateQuantity,
        toggleSelect,
        selectAll,
        deselectAll,
        getSelectedItems,
        getSelectedTotal,
        getSelectedCount,
        getTotalItems,
        clearCart,
        isInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
