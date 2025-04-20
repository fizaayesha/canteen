# 🛒 Canteen Cart

**Canteen Cart** is an innovative online platform designed for real-time food ordering at university canteens. It helps reduce queues, increase order frequency, and enhance overall student satisfaction by offering a seamless ordering and payment experience.

---

## 🚀 Features

- ✅ Real-time online order placement from university canteens
- 💳 Secure online payments via **PayPal API**
- 📧 Automated order confirmation emails using **Mailgun**
- 🗃️ Data storage and retrieval powered by **MongoDB**
- 📱 Mobile-responsive interface for student convenience

---

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript *(or React if applicable)*
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **APIs:** PayPal (for payments), Mailgun (for emails)

---

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/canteen-cart.git
   cd canteen-cart
2. **Fonteend Setup:**
   ```bash
   cd ./frontend
   npm install
   npm run start
3. **Backend Setup:**
   ```bash
   cd ./backend
   
   // Create .env file in the root of backend
   PORT=5000
   MONGODB_URI="your_mongo_connection_string"
   CLOUDINARY_CLOUD_NAME="your_paypal_cloud_name"
   CLOUDINARY_API_KEY="your_paypal_api_key"
   CLOUDINARY_API_SECRET="your_paypal_client_secret"
   MAILGUN_API_KEY="your_mailgun_public_api_key"
   JWT_SECRET="secret_key"
   NODE_ENV="production"

   npm run start
