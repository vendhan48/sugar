export interface MenuItem {
  id: string;
  name: string;
  category: 'Coffee' | 'Hot Beverages' | 'Cold Beverages' | 'Snacks' | 'Desserts' | 'Signature Items';
  description: string;
  price: number;
  image: string;
  popular?: boolean;
  dietary?: ('Vegetarian' | 'Vegan' | 'Gluten-Free' | 'Chef Special')[];
}

export interface SpecialtyItem {
  id: string;
  title: string;
  description: string;
  image: string;
  badge: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  rating: number;
  comment: string;
  avatar: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Café Interior' | 'Coffee' | 'Desserts' | 'Food' | 'Ambience';
  image: string;
  caption?: string;
}

export interface InstagramPost {
  id: string;
  imageUrl: string;
  likes: number;
  comments: number;
  caption: string;
  url: string;
}

export const CAFE_INFO = {
  name: 'Sugar N Grace',
  tagline: 'Café Boutique',
  headline: 'Where Every Sip Makes Life Sweeter',
  subheadline: 'Coffee, desserts, conversations and beautiful moments — all in one place.',
  aboutStoryHeading: 'More Than Just a Café',
  aboutStory: `Sugar N Grace – Café Boutique is a place where great coffee, delicious food and beautiful moments come together. Every detail is thoughtfully created to offer a warm, cozy and memorable café experience. Whether you're catching up with friends, savoring artisanal treats, or finding a quiet moment with a freshly brewed cup, we welcome you to our sweet boutique sanctuary.`,
  instagramUrl: 'https://www.instagram.com/sugarngracecafe/',
  instagramHandle: '@sugarngracecafe',
  // Editable business placeholders (Client can easily update these values)
  address: '[ADD ACTUAL ADDRESS]',
  addressFormatted: '123 Boutique Boulevard, Chic Quarter (Placeholder)',
  phone: '[ADD PHONE NUMBER]',
  phoneFormatted: '+1 (555) 019-2834',
  whatsappNumber: '919876543210', // Raw numbers for WhatsApp click-to-chat
  whatsappFormatted: '+91 98765 43210',
  openingHours: '[ADD OPENING HOURS]',
  openingHoursFormatted: 'Mon - Sun: 8:00 AM – 10:00 PM',
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.587216672322!2d80.2520!3d13.0400!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAyJzI0LjAiTiA4MMKwMTUnMDcuMiJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin'
};

export const SPECIALTIES: SpecialtyItem[] = [
  {
    id: 'spec-1',
    title: 'Signature Coffees',
    description: 'Freshly brewed artisanal coffee crafted with premium beans for true coffee lovers.',
    image: '/images/signature_coffee_1786261836638.png',
    badge: 'Craft Brewed'
  },
  {
    id: 'spec-2',
    title: 'Delicious Desserts',
    description: 'Sweet handcrafted treats, gourmet pastries, and cakes made to make every moment special.',
    image: '/images/delicious_desserts_1786261849935.png',
    badge: 'Artisanal Bakery'
  },
  {
    id: 'spec-3',
    title: 'Tasty Snacks',
    description: 'Fresh, savory, delicious and satisfying boutique bites prepared with love.',
    image: '/images/tasty_snacks_1786261865299.png',
    badge: 'Fresh Daily'
  },
  {
    id: 'spec-4',
    title: 'Refreshing Beverages',
    description: 'Cool iced creations, matcha lattes, and sparkling fruit mocktails for every mood.',
    image: '/images/refreshing_beverages_1786261881110.png',
    badge: 'Signature Blends'
  }
];

export const MENU_CATEGORIES = [
  'All',
  'Signature Items',
  'Coffee',
  'Hot Beverages',
  'Cold Beverages',
  'Snacks',
  'Desserts'
] as const;

export const MENU_ITEMS: MenuItem[] = [
  // Signature Items
  {
    id: 'm1',
    name: 'Boutique Gold Velvet Latte',
    category: 'Signature Items',
    description: 'Espresso infused with Madagascar vanilla bean, steamed milk, and finished with 24k gold leaf flakes.',
    price: 380,
    image: '/images/signature_coffee_1786261836638.png',
    popular: true,
    dietary: ['Chef Special']
  },
  {
    id: 'm2',
    name: 'Pistachio Raspberry Bloom Cake',
    category: 'Signature Items',
    description: 'Layers of moist Sicilian pistachio sponge, dark chocolate ganache, and raspberry rose coulis.',
    price: 450,
    image: '/images/delicious_desserts_1786261849935.png',
    popular: true,
    dietary: ['Chef Special', 'Vegetarian']
  },
  {
    id: 'm3',
    name: 'Truffle Avocado Sourdough Toast',
    category: 'Signature Items',
    description: 'Poached farm eggs on toasted artisanal sourdough, crushed avocado, black truffle oil, and microgreens.',
    price: 420,
    image: '/images/tasty_snacks_1786261865299.png',
    popular: true,
    dietary: ['Chef Special', 'Vegetarian']
  },

  // Coffee
  {
    id: 'm4',
    name: 'Classic Espresso Single / Double',
    category: 'Coffee',
    description: 'Rich, aromatic single-origin Arabica shot with dense hazelnut crema.',
    price: 180,
    image: '/images/signature_coffee_1786261836638.png',
    dietary: ['Vegan', 'Gluten-Free']
  },
  {
    id: 'm5',
    name: 'Artisanal Flat White',
    category: 'Coffee',
    description: 'Smooth double shot espresso combined with micro-foamed velvety whole milk.',
    price: 260,
    image: '/images/signature_coffee_1786261836638.png',
    popular: true
  },
  {
    id: 'm6',
    name: 'Salted Caramel Macchiato',
    category: 'Coffee',
    description: 'Fresh espresso drizzled over house-made salted caramel and steamed vanilla milk.',
    price: 290,
    image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'm7',
    name: 'Spanish Latte (Iced or Hot)',
    category: 'Coffee',
    description: 'Creamy espresso blended with sweetened condensed milk and cinnamon dust.',
    price: 310,
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=800'
  },

  // Hot Beverages
  {
    id: 'm8',
    name: 'Boutique Hot Chocolate',
    category: 'Hot Beverages',
    description: 'Melted Belgian dark chocolate whisked with warm creamy milk and toasted marshmallow topping.',
    price: 280,
    image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&q=80&w=800',
    dietary: ['Vegetarian']
  },
  {
    id: 'm9',
    name: 'Royal Kashmiri Saffron Chai',
    category: 'Hot Beverages',
    description: 'Aromatic green tea infused with Kashmiri saffron strands, cardamom, almond flakes, and cinnamon.',
    price: 250,
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=800',
    dietary: ['Gluten-Free']
  },

  // Cold Beverages
  {
    id: 'm10',
    name: 'Cloud Foam Iced Matcha Latte',
    category: 'Cold Beverages',
    description: 'Ceremonial Uji matcha layered over cold oat milk and topped with sweet vanilla cream foam.',
    price: 340,
    image: '/images/refreshing_beverages_1786261881110.png',
    popular: true,
    dietary: ['Vegetarian']
  },
  {
    id: 'm11',
    name: 'Sparkling Berry Hibiscus Cooler',
    category: 'Cold Beverages',
    description: 'Cold brewed hibiscus infusion with crushed wild berries, sparkling water, and fresh mint.',
    price: 290,
    image: '/images/refreshing_beverages_1786261881110.png',
    dietary: ['Vegan', 'Gluten-Free']
  },
  {
    id: 'm12',
    name: 'Signature Iced Mocha Frappé',
    category: 'Cold Beverages',
    description: 'Blended cold espresso with rich cocoa fudge, crushed ice, and mountain-high whipped cream.',
    price: 330,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=800'
  },

  // Snacks
  {
    id: 'm13',
    name: 'Warm Butter Croissant Sandwich',
    category: 'Snacks',
    description: 'Flaky flaky French croissant stuffed with smoked brie cheese, ripe fig jam, and wild arugula.',
    price: 320,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800',
    dietary: ['Vegetarian']
  },
  {
    id: 'm14',
    name: 'Spinach & Feta Artisanal Tart',
    category: 'Snacks',
    description: 'Golden shortcrust pastry shell filled with sauteed spinach, Greek feta cheese, and toasted pine nuts.',
    price: 290,
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&q=80&w=800',
    dietary: ['Vegetarian']
  },

  // Desserts
  {
    id: 'm15',
    name: 'Classic New York Cheesecake Slice',
    category: 'Desserts',
    description: 'Dense cream cheese cake on a Graham cracker base, served with fresh strawberry compote.',
    price: 360,
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=800',
    popular: true,
    dietary: ['Vegetarian']
  },
  {
    id: 'm16',
    name: 'Warm Chocolate Lava Cake',
    category: 'Desserts',
    description: 'Molten dark chocolate cake with oozing warm chocolate core, paired with vanilla bean gelato.',
    price: 380,
    image: '/images/delicious_desserts_1786261849935.png',
    dietary: ['Vegetarian']
  }
];

export const WHY_US_FEATURES = [
  {
    id: 'why-1',
    icon: 'Coffee',
    title: 'Quality Coffee',
    description: '100% ethically sourced single-origin beans, expertly roasted and masterfully brewed by passionate baristas.'
  },
  {
    id: 'why-2',
    icon: 'Croissant',
    title: 'Fresh & Delicious',
    description: 'Baked fresh every morning with pure French butter, organic cocoa, and handpicked local ingredients.'
  },
  {
    id: 'why-3',
    icon: 'Sparkles',
    title: 'Beautiful Ambience',
    description: 'A soothing luxury space designed for intimate conversations, peaceful work sessions, and memorable celebrations.'
  },
  {
    id: 'why-4',
    icon: 'Heart',
    title: 'Made With Care',
    description: 'Warm boutique hospitality with personalized attention to detail in every single order served.'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Cozy Boutique Interior',
    category: 'Café Interior',
    image: '/images/hero_cafe_ambiance_1786261821530.png',
    caption: 'Warm golden lighting and elegant seating at Sugar N Grace'
  },
  {
    id: 'g2',
    title: 'Artisanal Latte Art',
    category: 'Coffee',
    image: '/images/signature_coffee_1786261836638.png',
    caption: 'Freshly poured cappuccino with handcrafted rosetta foam'
  },
  {
    id: 'g3',
    title: 'Gourmet Desserts',
    category: 'Desserts',
    image: '/images/delicious_desserts_1786261849935.png',
    caption: 'Pistachio rose cake topped with edible gold leaf'
  },
  {
    id: 'g4',
    title: 'Avocado Sourdough Toast',
    category: 'Food',
    image: '/images/tasty_snacks_1786261865299.png',
    caption: 'Poached farm eggs and crushed avocado on fresh sourdough'
  },
  {
    id: 'g5',
    title: 'Matcha & Iced Mocktails',
    category: 'Coffee',
    image: '/images/refreshing_beverages_1786261881110.png',
    caption: 'Iced Uji matcha latte topped with vanilla cloud foam'
  },
  {
    id: 'g6',
    title: 'Evening Coffeehouse Ambience',
    category: 'Ambience',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1200',
    caption: 'Subtle jazz melodies, warm lights, and soft coffee aromas'
  },
  {
    id: 'g7',
    title: 'French Butter Croissants',
    category: 'Food',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=1200',
    caption: 'Freshly baked Golden croissants every morning at 8 AM'
  },
  {
    id: 'g8',
    title: 'Intimate Corner Seating',
    category: 'Café Interior',
    image: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&q=80&w=1200',
    caption: 'The perfect spot to read a book or catch up with loved ones'
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'insta-1',
    imageUrl: '/images/signature_coffee_1786261836638.png',
    likes: 342,
    comments: 28,
    caption: 'Mornings start better with a cup of grace. ☕✨ #SugarNGraceCafe #CoffeeBoutique',
    url: 'https://www.instagram.com/sugarngracecafe/'
  },
  {
    id: 'insta-2',
    imageUrl: '/images/delicious_desserts_1786261849935.png',
    likes: 512,
    comments: 45,
    caption: 'Life is short, make it sweeter. Try our signature Pistachio Rose Bloom Cake! 🍰🌸',
    url: 'https://www.instagram.com/sugarngracecafe/'
  },
  {
    id: 'insta-3',
    imageUrl: '/images/hero_cafe_ambiance_1786261821530.png',
    likes: 489,
    comments: 31,
    caption: 'Your cozy sanctuary awaits. Tag someone you want to grab coffee with this weekend! 🌿☕',
    url: 'https://www.instagram.com/sugarngracecafe/'
  },
  {
    id: 'insta-4',
    imageUrl: '/images/refreshing_beverages_1786261881110.png',
    likes: 620,
    comments: 52,
    caption: 'Matcha iced cloud latte season is here! Cool off in boutique style. 🍵💚',
    url: 'https://www.instagram.com/sugarngracecafe/'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Aanya Sharma',
    role: 'Food & Lifestyle Blogger',
    rating: 5,
    comment: 'Sugar N Grace is hands down the most aesthetic and cozy café in town! The Gold Velvet Latte and Pistachio cake are divine. Highly recommend!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    date: '2 weeks ago'
  },
  {
    id: 't2',
    name: 'Rohan Mehta',
    role: 'Coffee Enthusiast',
    rating: 5,
    comment: 'The quality of coffee beans and milk texturing here is top tier. The baristas really care about craft. Amazing ambiance for work and catchups.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    date: '1 month ago'
  },
  {
    id: 't3',
    name: 'Sophia Chen',
    role: 'Regular Patron',
    rating: 5,
    comment: 'Ordering via WhatsApp is super fast and smooth! The staff greeted us with such warm grace. Truly a boutique experience.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    date: '3 weeks ago'
  }
];
