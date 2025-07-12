# 🏨 Hotel Booking Website (MERN Stack)

A full-featured hotel booking platform built with the **MERN** stack—MongoDB, Express, React, and Node.js—featuring secure user authentication with **Clerk**, payment integration using **Stripe**, image hosting via **Cloudinary**, and email confirmation powered by **Nodemailer**.

---

## ✨ Features

- 🔐 **Clerk Authentication** (Google OAuth, secure session management)
- 💳 **Stripe Payments** with real-time payment status updates via Webhooks
- 🏨 **Hotel and Room Management** for owners
- 📷 **Image Uploads** via Cloudinary (Multer middleware)
- 📧 **Booking Confirmation Emails** using Nodemailer + Braze SMTP
- 🧾 **Booking History Dashboard** for users and owners
- 🔍 **Search & Filter System** (city, room type, price range, availability)
- 📱 **Responsive UI** built with React and Tailwind CSS
- 🌐 **MongoDB Atlas Integration**
- ⚙️ **Environment Variable Management** for secure configuration

---

## 🧱 Tech Stack

| Frontend              | Backend               | Other Services           |
|-----------------------|-----------------------|--------------------------|
| React + Tailwind CSS  | Node.js + Express.js  | MongoDB Atlas            |
| React Router          | REST APIs             | Stripe (Payments)        |
| Clerk (OAuth/Auth)    | Multer (File Uploads) | Nodemailer + SMTP (Emails) |
| React Context API     | Mongoose              | Cloudinary (Image Hosting) |

---

## 📦 Key Functionalities

### 🔑 Authentication
- Sign in with Google via Clerk
- Profile display and management
- Conditional rendering for hotel owners

### 🏠 Hotels & Rooms
- Owners can add/update/delete rooms
- Users can browse and book rooms with filters

### 💳 Payments
- Stripe Payment Intent integration
- Real-time updates via Stripe webhooks
- Users can retry payment from dashboard

### 📧 Emails
- Booking confirmation email after successful payment
- Braze SMTP with Nodemailer

### 📷 Image Uploads
- Hotel and Room images uploaded via Cloudinary
