export const site = {
  name: "The Olive Court",
  tagline: "Multi-Cuisine Fine Dining Experience in Jodhpur",
  description:
    "Fine-dining multi-cuisine restaurant for youth and families serving Indian, Chinese, Italian, Mexican, Thai and Lebanese food with signature mocktails.",
  rating: "4.7",
  reviews: "1,900+",
  price: "₹400–₹1,200",
  hours: "Open until midnight",
  phones: ["088245 19693", "078775 73264"],
  instagramHandle: "@theolivecourtjodhpur",
  instagramUrl: "https://instagram.com/theolivecourtjodhpur",
  menuUrl: "https://stayezeepms.com/qrmenu/olive/drink-menu.html",
  swiggyUrl:
    "https://www.swiggy.com/restaurants/the-olive-court-ratanada-jodhpur-969473/dineout",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=The%20Olive%20Court%20Jodhpur",
  addresses: [
    "Airport Rd, near Jeet Apartment, Ratanada, Jodhpur, Rajasthan 342011",
    "The Flamingo, 4th Floor, Plot No.4 G K Tower, Gaurav Path, Ratanada Cir, Jodhpur, Rajasthan 342002",
  ],
};

export const navItems = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Menu", href: "/menu" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Contact", href: "/#contact" },
];

export const highlights = [
  { title: "Rooftop Dining", text: "Open-air seating, skyline moods and intimate corners for relaxed evenings." },
  { title: "Live Music", text: "Sufi nights, acoustic evenings and a lively ambience for groups and travellers." },
  { title: "Signature Drinks", text: "Mocktails, coffee, cocktails, happy-hour drinks and a curated bar selection." },
  { title: "Multi-Cuisine", text: "North Indian, Chinese, Italian, Mexican, Thai, Lebanese and fast-food favourites." },
];

export const signatureDishes = [
  {
    name: "Paneer Butter Masala",
    price: "₹485",
    image: "/images/paneer-butter.svg",
    description: "Cottage cheese cooked in velvety buttery tomato gravy.",
  },
  {
    name: "Angara-E-Paneer",
    price: "₹475",
    image: "/images/angara-paneer.svg",
    description: "Tandoori paneer simmered in fiery Angara masala with live charcoal aroma.",
  },
  {
    name: "Sham Savera Kofta",
    price: "₹475",
    image: "/images/kofta.svg",
    description: "Dual-tone spinach and paneer koftas celebrating the flavours of day and night.",
  },
  {
    name: "Veg Biryani",
    price: "₹375",
    image: "/images/biryani.svg",
    description: "Layered rice, vegetables and warming spices served with classic accompaniments.",
  },
  {
    name: "Kaju Curry",
    price: "₹475",
    image: "/images/kaju-curry.svg",
    description: "Rich, creamy cashew curry crafted for indulgent North Indian dining.",
  },
  {
    name: "Darbaari Smoked Paneer",
    price: "₹525",
    image: "/images/smoked-paneer.svg",
    description: "Charcoal-smoked spicy cottage cheese preparation with a dramatic finish.",
  },
];

export const cuisines = ["North Indian", "Chinese", "Italian", "Mexican", "Thai", "Lebanese", "Fast Food"];

export const experiences = [
  "Outdoor seating",
  "Private dining room",
  "Fireplace",
  "Great desserts",
  "Great coffee",
  "Free Wi-Fi",
  "Family friendly",
  "Pet friendly",
];

export const gallery = [
  { src: "/images/ambience.svg", alt: "Dark luxury rooftop ambience" },
  { src: "/images/paneer-butter.svg", alt: "Paneer butter masala presentation" },
  { src: "/images/mocktail.svg", alt: "Craft mocktail at The Olive Court" },
  { src: "/images/biryani.svg", alt: "Vegetable biryani bowl" },
  { src: "/images/live-music.svg", alt: "Live music evening" },
  { src: "/images/kofta.svg", alt: "Sham Savera Kofta" },
];

export const reviews = [
  {
    name: "Mehul Batra",
    meta: "Local Guide · Dinner",
    quote:
      "One of the best ambience spots in Jodhpur. The vibe is classy, cozy, and perfect for a relaxed evening.",
  },
  {
    name: "Mehul Mathur",
    meta: "Local Guide · Dinner",
    quote:
      "Good ambiance, great food, live music, an amazing vibe, courteous staff, and good service.",
  },
  {
    name: "Navneet Bindra",
    meta: "Local Guide",
    quote:
      "The food menu is amazing, the bar menu is solid and live music set the mood beautifully.",
  },
  {
    name: "Deepika Sharma",
    meta: "Dinner",
    quote:
      "Taste is really good. Ambience is awesome, they have rooftop seating and Sufi nights.",
  },
  {
    name: "Divyu Gupta",
    meta: "Dinner · ₹400–600",
    quote:
      "Dinner had an awesome vibe with lights and live music. Such people make you want to come back.",
  },
];

export const menuCategories = [
  {
    name: "Soups",
    items: [
      ["Roasted Tomato & Basil", "Slow roasted tomato and basil soup", "₹299"],
      ["Hot N' Sour", "Spicy and sour vegetable broth, quintessential Chinese", "₹269"],
      ["Sweet Corn", "Mildly spiced vegetable and corn soup", "₹269"],
      ["Cream of Mushroom", "Field mushroom soup with thyme oil", "₹299"],
      ["Manchow Soup", "Assorted veggies topped with crispy noodles", "₹269"],
    ],
  },
  {
    name: "Indian Mains",
    items: [
      ["Kaju Curry", "Rich cashew curry", "₹475"],
      ["Sham Savera Kofta", "Spinach and paneer koftas in house gravy", "₹475"],
      ["Angara-E-Paneer", "Charcoal-scented tandoori paneer masala", "₹475"],
      ["Paneer Butter Masala", "Velvety buttery tomato gravy", "₹485"],
      ["Daal Pancharatan", "Slow-cooked five-lentil dal", "₹380"],
      ["Darbaari Smoked Paneer", "Charcoal-smoked spicy cottage cheese", "₹525"],
    ],
  },
  {
    name: "Breads & Rice",
    items: [
      ["Laccha Parantha", "Masala / Onion / Paneer", "₹110"],
      ["Missi Roti", "Rustic gram-flour Indian bread", "₹95"],
      ["Steamed Rice", "Fragrant steamed rice", "₹220"],
      ["Jeera Rice", "Basmati rice tempered with cumin", "₹235"],
      ["Veg Biryani", "Layered vegetables, rice and spices", "₹375"],
    ],
  },
  {
    name: "Beer Tower",
    items: [
      ["Heineken", "4 bottles × 650ml", "₹2,350"],
      ["Budweiser Premium", "4 bottles × 650ml", "₹2,150"],
      ["Carlsberg Strong", "4 bottles × 650ml", "₹2,150"],
      ["Kingfisher Ultra", "4 bottles × 650ml", "₹1,900"],
      ["Tuborg Strong", "4 bottles × 650ml", "₹1,750"],
    ],
  },
  {
    name: "Drinks",
    items: [
      ["Craft Mocktails", "Refreshing house signatures", "Ask server"],
      ["Great Coffee", "Hot and cold café-style coffee", "Ask server"],
      ["Happy-Hour Drinks", "Selected beverages during happy hours", "Ask server"],
    ],
  },
];
