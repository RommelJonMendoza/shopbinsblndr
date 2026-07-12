// Product catalog data.
//
// `image` is left blank for every item for now — there are no product
// photos yet. ProductCard falls back to a hand-drawn placeholder icon
// when `image` is empty, so nothing breaks. Once you have real photos,
// just add a string path here (e.g. "/products/mango-stickers.webp" if
// the file lives in your `public/products/` folder) and the real photo
// will show automatically — no component changes needed.
//
// Categories match the slugs Header.jsx already links to:
// stickers, button-pins, key-chains, postcards.

export const products = [
  {
    id: "sticker-mango",
    name: "Mangga Season Sticker Sheet",
    price: 129,
    category: "stickers",
    image: "",
    isNew: false,
  },
  {
    id: "sticker-jeepney",
    name: "Jeepney Ride Sticker Pack",
    price: 149,
    category: "stickers",
    image: "",
    isNew: false,
  },
  {
    id: "sticker-kalye-cat",
    name: "Kalye Cat Sticker Sheet",
    price: 99,
    category: "stickers",
    image: "",
    isNew: true,
  },
  {
    id: "pin-sari-sari",
    name: "Sari-Sari Snack Pin Set",
    price: 179,
    category: "button-pins",
    image: "",
    isNew: false,
  },
  {
    id: "pin-fiesta",
    name: "Barangay Fiesta Pin",
    price: 89,
    category: "button-pins",
    image: "",
    isNew: false,
  },
  {
    id: "pin-tsinelas",
    name: "Tsinelas Twins Pin Duo",
    price: 139,
    category: "button-pins",
    image: "",
    isNew: false,
  },
  {
    id: "keychain-fishball",
    name: "Fishball Cart Keychain",
    price: 159,
    category: "key-chains",
    image: "",
    isNew: false,
  },
  {
    id: "keychain-lucky-cat",
    name: "Lucky Cat Keychain",
    price: 129,
    category: "key-chains",
    image: "",
    isNew: false,
  },
  {
    id: "keychain-merienda",
    name: "Merienda Time Keychain",
    price: 149,
    category: "key-chains",
    image: "",
    isNew: false,
  },
  {
    id: "postcard-tricycle",
    name: "Tricycle Traffic Postcard",
    price: 59,
    category: "postcards",
    image: "",
    isNew: false,
  },
  {
    id: "postcard-palengke",
    name: "Palengke Morning Postcard",
    price: 59,
    category: "postcards",
    image: "",
    isNew: false,
  },
  {
    id: "postcard-bahay-kubo",
    name: "Bahay Kubo Skyline Postcard",
    price: 65,
    category: "postcards",
    image: "",
    isNew: true,
  },
];

export const categoryLabels = {
  stickers: "Stickers",
  "button-pins": "Button Pins",
  "key-chains": "Key Chains",
  postcards: "Postcards",
};
