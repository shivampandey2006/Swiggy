#  Swiggy - Food Delivery Web Application

A modern food delivery web application inspired by Swiggy, built using React.js.
The project focuses on creating a responsive, component-based frontend with
restaurant browsing, food categories, grocery/Instamart, cart management and
client-side routing.

## 🔗 Live Demo

[Live Demo](https://swiggy-yw2h.vercel.app/)



---

##  Features

- 🏠 Responsive home page
- 🍔 Restaurant browsing
- 🍕 Food category sections
- 🛒 Add items to cart
- ➕ Increase item quantity
- ➖ Decrease item quantity
- 🔢 Real-time cart item count
- 🛍️ Instamart / Grocery section
- 🍎 Grocery product listing
- 💰 Sort products by price
- 🔐 Login UI
- 📱 Responsive design for different screen sizes
- 🧭 Client-side navigation using React Router
- 🔄 Centralized cart state using Redux
- 🧩 Reusable React components

---

## 🛠️ Tech Stack

### Frontend
- React.js
- JavaScript (ES6+)
- JSX
- HTML5
- Tailwind CSS

### State Management
- Redux Toolkit
- React Redux

### Routing
- React Router DOM

### Build Tool
- Parcel

### Deployment
- Vercel

### Version Control
- Git
- GitHub

---

## 🏗️ Project Structure

```text
SwiggyMegaProject/
│
├── src/
│   ├── components/
│   │   ├── Header
│   │   ├── LowHeader
│   │   ├── Footer
│   │   ├── InstaMart
│   │   └── ...
│   │
│   ├── asset/
│   │   ├── InstaMartData
│   │   ├── GroceryData
│   │   ├── RestaurantsData
│   │   └── ...
│   │
│   ├── Apks.js
│   ├── Grocery.js
│   ├── ShowListItems.js
│   └── ...
│
├── Stored.js/
│   ├── Slicer1.js
│   └── store.js
│
├── package.json
├── .gitignore
└── README.md
