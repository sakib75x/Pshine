# Minimalist eCommerce Platform

This project is designed based on the following template design:
- Figma Template: [Community Figma eCommerce Template](https://www.figma.com/design/FMYm1wAxEKK3oQOWLLmfOj/free-ecommerce-minimal-template--Community-?node-id=0-1&t=7zUG8vn5n6Zd0mZa-0)

---

## ⚙️ How to Install & Run

### 1. Install Dependencies
Run the following command in the project root directory:
```bash
npm install
```

### 2. Configure Environment Variables
Create a `.env` file in the root directory and add your Firebase credentials:
```env
VITE_APIKEY=your_firebase_api_key
VITE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_PROJECT_ID=your_firebase_project_id
VITE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_MESSAGE_ID=your_firebase_messaging_sender_id
VITE_APP_ID=your_firebase_app_id
```

### 3. Run Development Server
Start the application locally:
```bash
npm run dev
```