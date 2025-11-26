export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  reviewCount: number;
  image: string;
  images: string[];
  category: string;
  subcategory: string;
  colors: string[];
  sizes: string[];
  description: string;
  inStock: boolean;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  productCount: number;
}

export interface Review {
  id: string;
  userName: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
  helpful: number;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
}

export const categories: Category[] = [
  {
    id: "women",
    name: "Women",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=500&fit=crop",
    productCount: 1250,
  },
  {
    id: "men",
    name: "Men",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
    productCount: 890,
  },
  {
    id: "kids",
    name: "Kids",
    image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=400&h=500&fit=crop",
    productCount: 456,
  },
  {
    id: "accessories",
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=400&h=500&fit=crop",
    productCount: 678,
  },
  {
    id: "beauty",
    name: "Beauty",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=500&fit=crop",
    productCount: 345,
  },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Elegant Floral Midi Dress",
    price: 2499,
    originalPrice: 4999,
    discount: 50,
    rating: 4.5,
    reviewCount: 234,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&h=1000&fit=crop",
    ],
    category: "women",
    subcategory: "dresses",
    colors: ["Purple", "Pink", "Blue"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "A beautiful floral midi dress perfect for any occasion. Made with premium fabric for ultimate comfort.",
    inStock: true,
  },
  {
    id: "2",
    name: "Silk Satin Blouse",
    price: 1899,
    originalPrice: 2999,
    discount: 37,
    rating: 4.8,
    reviewCount: 156,
    image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=400&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=800&h=1000&fit=crop",
    ],
    category: "women",
    subcategory: "tops",
    colors: ["Lavender", "White", "Cream"],
    sizes: ["S", "M", "L"],
    description: "Luxurious silk satin blouse with elegant draping.",
    inStock: true,
  },
  {
    id: "3",
    name: "High-Waist Palazzo Pants",
    price: 1599,
    originalPrice: 2499,
    discount: 36,
    rating: 4.3,
    reviewCount: 89,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&h=1000&fit=crop",
    ],
    category: "women",
    subcategory: "pants",
    colors: ["Black", "Navy", "Burgundy"],
    sizes: ["26", "28", "30", "32", "34"],
    description: "Comfortable high-waist palazzo pants for a chic look.",
    inStock: true,
  },
  {
    id: "4",
    name: "Premium Leather Handbag",
    price: 3999,
    originalPrice: 5999,
    discount: 33,
    rating: 4.9,
    reviewCount: 312,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&h=1000&fit=crop",
    ],
    category: "accessories",
    subcategory: "bags",
    colors: ["Mauve", "Black", "Tan"],
    sizes: ["One Size"],
    description: "Elegant leather handbag with gold-tone hardware.",
    inStock: true,
  },
  {
    id: "5",
    name: "Velvet Matte Lipstick Set",
    price: 1299,
    originalPrice: 1999,
    discount: 35,
    rating: 4.7,
    reviewCount: 567,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&h=1000&fit=crop",
    ],
    category: "beauty",
    subcategory: "lips",
    colors: ["Berry", "Nude", "Red", "Pink"],
    sizes: ["Set of 4"],
    description: "Long-lasting velvet matte finish lipstick collection.",
    inStock: true,
  },
  {
    id: "6",
    name: "Kids Floral Party Dress",
    price: 1499,
    originalPrice: 2299,
    discount: 35,
    rating: 4.6,
    reviewCount: 78,
    image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=400&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=800&h=1000&fit=crop",
    ],
    category: "kids",
    subcategory: "dresses",
    colors: ["Pink", "Lavender", "White"],
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
    description: "Adorable floral party dress for little princesses.",
    inStock: true,
  },
  {
    id: "7",
    name: "Men's Slim Fit Blazer",
    price: 4999,
    originalPrice: 7999,
    discount: 38,
    rating: 4.4,
    reviewCount: 123,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop",
    ],
    category: "men",
    subcategory: "blazers",
    colors: ["Navy", "Charcoal", "Black"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Classic slim fit blazer for the modern gentleman.",
    inStock: true,
  },
  {
    id: "8",
    name: "Rose Gold Watch",
    price: 5999,
    originalPrice: 8999,
    discount: 33,
    rating: 4.8,
    reviewCount: 245,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&h=1000&fit=crop",
    ],
    category: "accessories",
    subcategory: "watches",
    colors: ["Rose Gold", "Silver", "Gold"],
    sizes: ["One Size"],
    description: "Elegant rose gold watch with diamond accents.",
    inStock: true,
  },
  {
    id: "9",
    name: "Hydrating Face Serum",
    price: 899,
    originalPrice: 1499,
    discount: 40,
    rating: 4.9,
    reviewCount: 892,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&h=1000&fit=crop",
    ],
    category: "beauty",
    subcategory: "skincare",
    colors: [],
    sizes: ["30ml", "50ml"],
    description: "Deeply hydrating serum with hyaluronic acid.",
    inStock: true,
  },
  {
    id: "10",
    name: "Embroidered Anarkali Suit",
    price: 3499,
    originalPrice: 5499,
    discount: 36,
    rating: 4.7,
    reviewCount: 167,
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=800&h=1000&fit=crop",
    ],
    category: "women",
    subcategory: "ethnic",
    colors: ["Purple", "Maroon", "Teal"],
    sizes: ["S", "M", "L", "XL"],
    description: "Stunning embroidered Anarkali suit for festive occasions.",
    inStock: true,
  },
  {
    id: "11",
    name: "Crystal Drop Earrings",
    price: 799,
    originalPrice: 1299,
    discount: 38,
    rating: 4.5,
    reviewCount: 234,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=1000&fit=crop",
    ],
    category: "accessories",
    subcategory: "jewelry",
    colors: ["Crystal", "Amethyst", "Rose Quartz"],
    sizes: ["One Size"],
    description: "Elegant crystal drop earrings for special occasions.",
    inStock: true,
  },
  {
    id: "12",
    name: "Compact Makeup Palette",
    price: 1999,
    originalPrice: 2999,
    discount: 33,
    rating: 4.6,
    reviewCount: 445,
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&h=1000&fit=crop",
    ],
    category: "beauty",
    subcategory: "makeup",
    colors: [],
    sizes: ["18 Shades"],
    description: "Versatile eyeshadow palette with matte and shimmer finishes.",
    inStock: true,
  },
];

export const reviews: Review[] = [
  {
    id: "1",
    userName: "Priya Sharma",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    rating: 5,
    comment: "Absolutely love this dress! The fabric is so soft and the fit is perfect. Got so many compliments!",
    date: "2024-01-15",
    helpful: 45,
  },
  {
    id: "2",
    userName: "Anita Patel",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    rating: 4,
    comment: "Great quality for the price. Delivery was quick too. Will definitely shop again!",
    date: "2024-01-12",
    helpful: 32,
  },
  {
    id: "3",
    userName: "Sneha Reddy",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    rating: 5,
    comment: "The color is exactly as shown in the pictures. Very happy with my purchase!",
    date: "2024-01-10",
    helpful: 28,
  },
  {
    id: "4",
    userName: "Kavya Iyer",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop",
    rating: 4,
    comment: "Beautiful design, comfortable to wear all day. Sizing runs a bit small though.",
    date: "2024-01-08",
    helpful: 19,
  },
  {
    id: "5",
    userName: "Meera Nair",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    rating: 5,
    comment: "This is my third purchase from here and I'm never disappointed. Top quality always!",
    date: "2024-01-05",
    helpful: 56,
  },
];

export const heroBanners = [
  {
    id: "1",
    title: "Spring Collection",
    subtitle: "Up to 50% Off",
    description: "Discover the latest trends in fashion",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1920&h=800&fit=crop",
    cta: "Shop Now",
    link: "/women",
  },
  {
    id: "2",
    title: "Beauty Essentials",
    subtitle: "New Arrivals",
    description: "Glow up with our curated beauty collection",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1920&h=800&fit=crop",
    cta: "Explore",
    link: "/beauty",
  },
  {
    id: "3",
    title: "Accessorize",
    subtitle: "Complete Your Look",
    description: "Find the perfect accessories to match your style",
    image: "https://images.unsplash.com/photo-1611923134239-b9be5b4d1b27?w=1920&h=800&fit=crop",
    cta: "View Collection",
    link: "/accessories",
  },
];
