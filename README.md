# 🐷 PiggyPal  
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Clerk](https://img.shields.io/badge/Clerk-5A67D8?style=for-the-badge&logo=clerk&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![Neon](https://img.shields.io/badge/Neon-00E599?style=for-the-badge&logo=postgresql&logoColor=white)


A modern, **AI-powered expense tracking web application** built with **Next.js 15**, featuring intelligent categorization, real-time analytics, and personalized financial insights.  

---

## ✨ Features  

### 🤖 AI-Powered Intelligence  
- **Smart Categorization**: AI automatically suggests expense categories based on descriptions  
- **Financial Insights**: Personalized recommendations and spending pattern analysis  
- **AI-Generated Insights**: Get meaningful explanations and advice directly from AI to improve your spending habits  

### 💼 Core Functionality  
- **Expense Tracking**: Add, edit, and delete expenses with ease  
- **Real-time Charts**: Beautiful visualizations powered by Chart.js  
- **Statistics Dashboard**: Comprehensive spending analytics  
- **Expense History**: Complete transaction history with search and filter  

### 🎨 Modern UI/UX  
- **Fully Responsive**: Optimized for all screen sizes  
- **Beautiful Animations**: Smooth interactions and hover effects  
- **Gradient Designs**: Modern card layouts with backdrop blur effects  

### 🔐 Authentication & Security  
- **Multiple Login Options**: Google, GitHub, Facebook, or email/password  
- **Secure Sessions**: Managed by Clerk authentication  
- **User Profiles**: Personalized dashboards with user information  

---

## 🛠️ Tech Stack  

### Frontend  
- **Next.js 15** – React framework with App Router  
- **React 19** – Latest React with concurrent features  
- **TypeScript** – Type-safe development  
- **Tailwind CSS** – Utility-first CSS framework  
- **Chart.js** – Beautiful charts and visualizations  

### Backend & Database  
- **Neon** – Serverless PostgreSQL database  
- **Prisma** – Type-safe database ORM  
- **Server Actions** – Direct server functions in Next.js  

### AI & Authentication  
- **OpenRouter** – Free AI API access without credit cards  
- **Clerk** – Complete authentication solution  


### Deployment  
- **Vercel** – Serverless deployment platform  

---

## 🚀 Getting Started  

### Prerequisites  
- **Node.js** 18+  
- **npm**, **yarn**, or **pnpm**  

### Installation  

Clone the repository:  
```bash
git clone https://github.com/yourusername/piggypal.git
cd piggypal

```
Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```
Environment Variables:
```bash
# Database
DATABASE_URL="your-neon-database-url"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your-clerk-publishable-key"
CLERK_SECRET_KEY="your-clerk-secret-key"
NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL="/"
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL="/"

# OpenRouter AI
OPENROUTER_API_KEY="your-openrouter-api-key"

# App URL
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```
Database Setup
```bash
npx prisma generate
npx prisma db push
```
Run Development Server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
Open your browser and navigate to:
👉 http://localhost:3000

---
### 📊 Database Schema

PiggyPal uses a simple yet effective schema:

**User**: Stores user information from Clerk

**Record**: Stores expense transactions with categories and amounts

----
