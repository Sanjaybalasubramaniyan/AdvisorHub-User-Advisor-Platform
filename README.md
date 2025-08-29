cd backend
cp .env.example .env
npm install
npm run seed     # optional: loads sample advisors
npm start
👨‍💼 AdvisorHub – User–Advisor Platform

AdvisorHub is a simple user–advisor matchmaking platform where users can discover advisors in different domains (career, finance, education, etc.) and book sessions with them.
It demonstrates how to build a real-world service platform using Node.js, Express, and MongoDB, with a lightweight frontend for testing.

✨ Features

🔍 Search advisors by name or expertise

👨‍🏫 Advisor profiles with bio, hourly rate, ratings & available slots

📅 Users can book appointments with advisors

🔌 RESTful API for integration with any frontend or mobile app

🖥️ Demo frontend (HTML + JS) for quick testing

🛠 Tech Stack

Backend: Node.js, Express.js

Database: MongoDB with Mongoose

Frontend (demo): HTML, Vanilla JavaScript

Tools: dotenv, cors, morgan, express-validator

🚀 Getting Started
1️⃣ Setup Backend
cd backend
cp .env.example .env
npm install
npm run seed     # optional: loads sample advisors
npm start


The API will run at: http://localhost:3000

2️⃣ Open Frontend

Simply open frontend/index.html in your browser.
(Search advisors and book sessions – works with the backend API.)

🔌 API Endpoints
Advisors

GET /api/advisors → List all advisors (filter with ?q=Finance)

GET /api/advisors/:id → Get advisor by ID

POST /api/advisors → Add a new advisor

PUT /api/advisors/:id → Update advisor details

DELETE /api/advisors/:id → Remove advisor

Bookings

POST /api/bookings → Create a booking

GET /api/bookings?userEmail=xyz@example.com → View user’s bookings

📸 Screenshots (Optional)

Advisors list page

Booking form with sample user details

📚 Learning Outcomes

Building REST APIs with Express

Data modeling with Mongoose (MongoDB)

Handling user input validation & error responses

Connecting a simple frontend with backend APIs
