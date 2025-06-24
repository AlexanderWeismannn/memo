# 📝 Memo

**Memo** is a custom Thinkboard-style notes application built using the **MERN stack**. It allows users to create, edit, and delete notes in a clean, responsive interface. Designed for speed and simplicity, it features real-time UI feedback and beautiful styling.

![image](https://github.com/user-attachments/assets/e414b89b-e3af-47b6-8dc5-55942d5d7f57)

## 🌐 Live Demo

[Visit the Website](https://memo-vsk6.onrender.com)

> ⚠️ **Note:** This app is hosted on the free tier of [Render.com](https://render.com), which means it may take **up to 50 seconds to spin up** if inactive.


---

## Tech Stack

### Frontend
- **React** – Component-based UI
- **Tailwind CSS** – Utility-first CSS for rapid styling
- **DaisyUI** – Tailwind UI components for clean design
- **react-hot-toast** – Toast notifications for user feedback
- **Axios** – Promise-based HTTP client for API calls

### Backend
- **Node.js** – Server-side JavaScript
- **Express.js** – REST API framework
- **MongoDB** – NoSQL database for storing notes
- **Mongoose** – ODM for MongoDB, handles schemas and queries

---
## Features
- 🗒️ Create, read, update, and delete notes (CRUD)
- 🎨 Beautiful UI using Tailwind and DaisyUI
- 🔄 Real-time UI feedback with `react-hot-toast`
- 🌙 Dark/light mode support via DaisyUI themes
- ⚡ Fast and responsive layout

---
## Setup Instructions
### 🔧 Prerequisites
- Node.js and npm installed
- MongoDB instance (local or Atlas)
### 📦 Installation
# Clone the repo
git clone https://github.com/YourUsername/memo.git
cd memo

# Install dependencies
npm install

### Set up environment variables
touch .env
### Add your MongoDB URI to .env:
### MONGO_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/memo
### Start the dev server
npm run dev
