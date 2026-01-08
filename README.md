# ExplainMyError

**Understand errors. Fix faster.**

ExplainMyError is a small developer tool that explains common error messages and stack traces in plain English.  
It helps developers quickly understand *what an error means*, *why it usually happens*, and *what to check first* — without digging through docs or forums.

---

## ✨ What ExplainMyError Does

- Accepts error messages or stack traces
- Explains the error in simple, human-readable terms
- Highlights the most likely cause
- Suggests the first thing to check
- Clearly communicates uncertainty when context is limited

This is a **best-effort explanation tool**, not a debugger or code fixer.

---

## 👨‍💻 Who Is This For?

- Frontend developers (Angular, JavaScript, etc.)
- Backend developers (Node.js and general errors)
- Anyone who wants quick clarity on confusing error messages

---

## ❌ What This Tool Does NOT Do

- It does **not** fix your code
- It does **not** guarantee correctness
- It does **not** replace debugging or testing
- It does **not** generate code

Explanations are based on common patterns and limited context.

---

## 🛠️ Tech Stack

- **Frontend:** Angular + Tailwind CSS
- **Backend:** Node.js + Express
- **AI:** OpenAI API
- **Architecture:** Service-oriented backend with strict AI output contracts

---

## 🚀 Running the Project Locally

### Prerequisites
- Node.js (v18+ recommended)
- An OpenAI API key

---

### 1️⃣ Backend Setup

- cd Backend
- npm install

### Create a .env file inside the Backend folder:

- OPENAI_API_KEY=your_openai_api_key_here

### Start the backend server:

- node src/index.js

### Backend runs at:

- http://localhost:3000

### Health check:

- GET /health

### 2️⃣ Frontend Setup
- cd Frontend/explain-my-error-ui
- npm install
- ng serve


### Frontend runs at:

- http://localhost:4200

### 📡 API Reference
- POST /api/explain-error

- Request body:

{
  "errorText": "Cannot read properties of undefined (reading 'map')",
  "framework": "Angular"
}


- Success response:

{
  "meaning": "Plain-English explanation of the error",
  "cause": "Most likely reason the error occurs",
  "check": "First thing the developer should check",
  "mistake": "Common mistake related to this error"
}


- Error response:

{
  "error": "Could not explain this error."
}

### ⚠️ Important Notes

- Short or vague error messages may result in limited explanations
- AI failures and network issues are handled gracefully
- No internal stack traces or backend errors are exposed to users

### 🎯 Why This Project Exists

#### ExplainMyError is part of a series of small AI-first MVPs built to focus on:
- Safe AI integration
- Prompt discipline and output validation
- Clear UX for uncertainty
- SaaS-ready backend architecture
- The goal is clarity and trust — not hype.

### 📄 License

- This project is intended for learning, experimentation, and portfolio use.