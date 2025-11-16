# VitaTrack – Intelligent Healthcare Management System

VitaTrack is a modern, secure, AI‑powered healthcare management platform designed to connect patients, doctors, and healthcare providers in one unified system. It simplifies medical data management, appointment booking, digital prescriptions, health tracking, and predictive analytics.

---

## 🚀 Features

### 🧑‍⚕️ User Roles
- **Patient** – View records, track symptoms, book appointments.
- **Doctor** – Manage appointments, create prescriptions, access medical history.
- **Admin** – Manage users, analytics, system logs.

---

## 🏥 Core Functionalities

### 1. 🔐 Authentication & Security
- JWT Authentication (Access + Refresh Tokens)  
- Role-Based Access Control (RBAC)  
- Secure password hashing  

### 2. 🗂️ Medical Records Management
- Upload/view lab reports  
- Maintain past diagnosis history  
- Digital medical data storage  

### 3. 📅 Appointments
- Appointment booking & cancellation  
- Doctor availability management  
- Automated SMS/email reminders  

### 4. 💊 Digital Prescriptions
- Doctors can create e‑prescriptions  
- Patients can download & store them  
- Pharmacy‑ready prescription format  

### 5. ⭐ Smart Health Dashboard
- Daily health summary  
- Symptom checker (AI-powered)  
- Medicine reminders  
- Vaccination tracker  

### 6. 🧠 AI-Powered Features
- Predictive analytics for health risks  
- Smart recommendation system  
- Chatbot for basic healthcare queries  

### 7. 📊 Admin Analytics Dashboard
- Daily/Monthly active users  
- Appointment statistics  
- Prescription & health trend analytics  

---

## 🧱 Tech Stack

### Backend
- **Node.js + Express.js**
- **MongoDB + Mongoose**
- **JWT Authentication**
- **Redis (optional for caching)**

### DevOps
- **Docker & Docker Compose**
- **CI/CD: GitHub Actions**
- **Deployment: Render / AWS / DigitalOcean**

---

## 📁 Project Structure

```
/backend
│── /src
│   ├── /config
│   ├── /controllers
│   ├── /models
│   ├── /routes
│   ├── /middleware
│   └── /utils
│── package.json
│── server.js
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/yourname/vitatrack.git
cd backend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Variables (`.env`)
```
PORT=5000
MONGO_URI=your_mongo_url
JWT_SECRET=your_secret
REFRESH_SECRET=your_refresh_secret
```

### 4. Start the Server
```bash
npm run dev
```

---

## 📌 API Documentation
Full API documentation is provided using **Swagger**.

Access it at:
```
/api-docs
```

---

## 🧪 Testing
- Jest  
- SuperTest  

Run tests:
```bash
npm test
```

---

