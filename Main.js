# 👨‍💼 AdvisorHub – User–Advisor Platform

AdvisorHub is a minimal web app that connects **users** with **expert advisors**.  
Backend provides APIs to **list advisors** and **create bookings**; the tiny frontend lets you test it quickly.

---

## ✨ Features
- CRUD for **Advisors** (name, expertise, bio, slots, rate)
- Create & list **Bookings** (advisor, user name/email, slot, notes)
- Simple search `?q=` by advisor name or expertise
- Minimal HTML demo frontend

---

## 🛠 Tech Stack
- **Backend:** Node.js, Express, MongoDB (Mongoose)
- **Utilities:** dotenv, cors, morgan, express-validator
- **Frontend:** Vanilla HTML + JS (for demo)

---

## 🚀 Run Locally

### 1) Start MongoDB
- Install & run MongoDB locally, or use MongoDB Atlas.
- Default URI used: `mongodb://127.0.0.1:27017/advisorhub`

### 2) Backend
```bash
cd backend
cp .env.example .env
npm install
npm run seed     # optional: loads 2 sample advisors
npm run dev      # or: npm start
{ "name":"Navi", "expertise":"Career", "email":"a@x.com", "ratePerHour":999, "slots":["Mon 5-6pm"] }
{ "advisorId":"<id>", "userName":"Sanjay", "userEmail":"sanjay@example.com", "slot":"Wed 7-8pm", "notes":"Resume review" }



PUT /api/advisors/:id — update advisor

DELETE /api/advisors/:id — delete advisor
