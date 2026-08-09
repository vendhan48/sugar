import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Specialties } from './components/Specialties';
import { Menu } from './components/Menu';
import { CartDrawer } from './components/CartDrawer';
import { AboutUs } from './components/AboutUs';
import { WhyUs } from './components/WhyUs';
import { Gallery } from './components/Gallery';
import { InstagramSection } from './components/InstagramSection';
import { ReservationModal } from './components/ReservationModal';
import { Testimonials } from './components/Testimonials';
import { LocationContact } from './components/LocationContact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BackToTop } from './components/BackToTop';
import { Toast } from './components/Toast';
import type { MenuItem } from './data/cafeData';
import type { CartItem } from './types/cart';

export function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const cartCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  const handleAddToCart = (item: MenuItem) => {
    setCartItems((prev) => {
      const existing = prev.find((ci) => ci.item.id === item.id);
      if (existing) {
        return prev.map((ci) =>
          ci.item.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
    setToastMessage(`Added "${item.name}" to your order!`);
  };

  const handleUpdateQuantity = (itemId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((ci) => {
          if (ci.item.id === itemId) {
            const newQty = ci.quantity + delta;
            return newQty > 0 ? { ...ci, quantity: newQty } : null;
          }
          return ci;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (itemId: string) => {
    setCartItems((prev) => prev.filter((ci) => ci.item.id !== itemId));
    setToastMessage('Item removed from order');
  };

  const handleClearCart = () => {
    setCartItems([]);
    setToastMessage('Order cart cleared');
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-transparent text-[#f7f3ee] flex flex-col font-sans selection:bg-[#c9a87c] selection:text-[#0e0a08]">
      {/* Toast Notification */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />

      {/* Sticky Glass Navbar */}
      <Navbar
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenReservation={() => setIsReservationOpen(true)}
      />

      {/* Main Page Sections */}
      <main className="flex-grow">
        {/* 1. HERO SECTION */}
        <Hero onOpenReservation={() => setIsReservationOpen(true)} />

        {/* 2. SIGNATURE / SPECIALTIES */}
        <Specialties onSelectCategory={handleCategorySelect} />

        {/* 3. MENU SECTION */}
        <Menu
          onAddToCart={handleAddToCart}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* 4. ABOUT US */}
        <AboutUs onOpenStoryModal={() => setIsReservationOpen(true)} />

        {/* 5. WHY SUGAR N GRACE */}
        <WhyUs />

        {/* 6. GALLERY */}
        <Gallery />

        {/* 7. INSTAGRAM SECTION */}
        <InstagramSection />

        {/* 8. TESTIMONIALS */}
        <Testimonials onShowToast={(msg) => setToastMessage(msg)} />

        {/* 9. LOCATION & CONTACT */}
        <LocationContact />
      </main>

      {/* 10. FOOTER */}
      <Footer onSelectCategory={handleCategorySelect} />

      {/* Drawers & Modals */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
        onShowToast={(msg) => setToastMessage(msg)}
      />

      {/* Floating Action Buttons */}
      <FloatingWhatsApp />
      <BackToTop />
    </div>
  );
}

export default App;
