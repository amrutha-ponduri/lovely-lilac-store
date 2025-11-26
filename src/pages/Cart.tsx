import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useCart } from "@/contexts/CartContext";
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const Cart = () => {
  const navigate = useNavigate();
  const {
    items,
    removeFromCart,
    updateQuantity,
    toggleSelect,
    selectAll,
    deselectAll,
    getSelectedTotal,
    getSelectedCount,
  } = useCart();

  const [allSelected, setAllSelected] = useState(true);

  const handleSelectAll = () => {
    if (allSelected) {
      deselectAll();
    } else {
      selectAll();
    }
    setAllSelected(!allSelected);
  };

  const handleQuantityChange = (productId: string, delta: number) => {
    const item = items.find((i) => i.id === productId);
    if (item) {
      const newQuantity = item.quantity + delta;
      if (newQuantity <= 0) {
        removeFromCart(productId);
        toast.success("Item removed from cart");
      } else {
        updateQuantity(productId, newQuantity);
      }
    }
  };

  const handleRemove = (productId: string) => {
    removeFromCart(productId);
    toast.success("Item removed from cart");
  };

  const selectedCount = getSelectedCount();
  const selectedTotal = getSelectedTotal();

  if (items.length === 0) {
    return (
      <MainLayout>
        <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
          <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center mb-6">
            <ShoppingBag className="w-10 h-10 text-muted-foreground" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Your cart is empty</h2>
          <p className="text-muted-foreground mb-8 text-center max-w-md">
            Looks like you haven't added anything to your cart yet. Start shopping to fill it up!
          </p>
          <Link to="/">
            <Button className="rounded-full px-8 h-12 bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold">
              Start Shopping
            </Button>
          </Link>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">Shopping Cart</h1>
            <p className="text-muted-foreground">
              {items.length} {items.length === 1 ? "item" : "items"} in your cart
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {/* Select All */}
            <div className="bg-card rounded-xl p-4 flex items-center gap-4 shadow-soft">
              <Checkbox
                checked={allSelected}
                onCheckedChange={handleSelectAll}
                className="border-primary data-[state=checked]:bg-primary"
              />
              <span className="font-medium text-foreground">
                Select All ({items.length} items)
              </span>
            </div>

            {/* Cart Item List */}
            {items.map((item, index) => (
              <div
                key={item.id}
                className="bg-card rounded-xl p-4 shadow-soft animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex gap-4">
                  {/* Checkbox */}
                  <div className="flex items-start pt-2">
                    <Checkbox
                      checked={(item as any).selected !== false}
                      onCheckedChange={() => toggleSelect(item.id)}
                      className="border-primary data-[state=checked]:bg-primary"
                    />
                  </div>

                  {/* Image */}
                  <Link
                    to={`/product/${item.id}`}
                    className="shrink-0 w-24 h-28 md:w-32 md:h-36 rounded-lg overflow-hidden bg-secondary"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </Link>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/product/${item.id}`}
                      className="font-medium text-foreground hover:text-primary transition-colors line-clamp-2"
                    >
                      {item.name}
                    </Link>
                    
                    {(item.selectedSize || item.selectedColor) && (
                      <p className="text-sm text-muted-foreground mt-1">
                        {item.selectedColor && <span>Color: {item.selectedColor}</span>}
                        {item.selectedColor && item.selectedSize && <span> | </span>}
                        {item.selectedSize && <span>Size: {item.selectedSize}</span>}
                      </p>
                    )}

                    {/* Price */}
                    <div className="flex items-center gap-2 mt-2">
                      <span className="font-bold text-foreground">
                        ₹{item.price.toLocaleString()}
                      </span>
                      {item.originalPrice > item.price && (
                        <>
                          <span className="text-sm text-muted-foreground line-through">
                            ₹{item.originalPrice.toLocaleString()}
                          </span>
                          <span className="text-xs font-semibold text-accent">
                            {item.discount}% off
                          </span>
                        </>
                      )}
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleQuantityChange(item.id, -1)}
                          className="w-8 h-8 rounded-lg border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <button
                          onClick={() => handleQuantityChange(item.id, 1)}
                          className="w-8 h-8 rounded-lg border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      <button
                        onClick={() => handleRemove(item.id)}
                        className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-xl p-6 shadow-soft sticky top-24">
              <h2 className="text-xl font-bold text-foreground mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-muted-foreground">
                  <span>Selected Items ({selectedCount})</span>
                  <span>₹{selectedTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Delivery</span>
                  <span className="text-green-600">FREE</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Discount</span>
                  <span className="text-accent">-₹0</span>
                </div>
              </div>

              <div className="border-t border-border pt-4 mb-6">
                <div className="flex justify-between text-lg font-bold text-foreground">
                  <span>Total</span>
                  <span>₹{selectedTotal.toLocaleString()}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Inclusive of all taxes</p>
              </div>

              <Button
                onClick={() => toast.success("Proceeding to checkout...")}
                disabled={selectedCount === 0}
                className="w-full h-14 rounded-xl bg-gradient-primary hover:opacity-90 text-primary-foreground text-lg font-semibold disabled:opacity-50"
              >
                Checkout ({selectedCount})
              </Button>

              <p className="text-center text-xs text-muted-foreground mt-4">
                🔒 Secure checkout with SSL encryption
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Cart;
