QuickNote 📝
QuickNote is a full-stack task management application that allows users to efficiently create, manage, and organize their daily tasks. It supports authentication, task pinning, tagging, and real-time feedback through notifications.

🚀 Features
User Authentication (Register, Login, Logout)
Create, Edit, and Delete Tasks
Pin and Unpin Important Tasks
Add and Manage Tags for Tasks
Secure Session-Based Authentication
Real-time Popup Notifications
Responsive and Modern UI
MVC Architecture on Backend

🛠️ Tech Stack
Frontend
React – UI development
Axios – API requests
Tailwind CSS – Styling
React Router DOM – Client-side routing
React Toastify – Popup notifications
Context API – State management

Backend
Node.js
Express.js
Express-Session – Session management
Passport & Passport-Local – Authentication
Bcrypt – Password hashing and verification
Joi – Request-level validation
Cookie-Parser – Cookie handling
Connect-Mongo – Persistent session storage
Dotenv – Environment variable management
MVC Architecture
Development Tools
Nodemon – Auto server restart on changes

📂 Project Structure
QuickNote/
│
├── client/
│   ├── src/
│       ├── components/
│       ├── context/
│       ├── App.css
│       ├── App.jsx
│       ├── index.css
│       ├── main.jsx
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── vite.config.js
|
|
├── server/
│   ├── controllers/
│   ├── db/
|   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── .gitignore
│   ├── app.js
│   ├── package-lock.json
│   ├── package.json
│   ├── server.js
│
└── README.md

🔐 Authentication Flow
Users can register with valid credentials
Passwords are securely hashed using bcrypt
Authentication handled using Passport (Local Strategy)
Sessions are stored persistently using MongoDB
Cookies manage user session state

⚙️ Installation & Setup
1. Clone the Repository
git clone https://github.com/your-username/quicknote.git
cd quicknote

2. Install Dependencies
Frontend
cd client
npm install

Backend
cd server
npm install

▶️ Running the Application
client
npm run dev

server
npm start


Note: The backend uses nodemon, so the server will automatically restart on file changes.

🌱 Environment Variables
Create a .env file in the backend directory and configure:

PORT=5000
MONGO_URI=your_mongodb_connection_string
SESSION_SECRET=your_session_secret

🧩 API Capabilities
User Registration & Login
Session-based Authentication
Task CRUD Operations
Task Pinning
Tag Management
Request Validation using Joi

🎨 UI & UX
Clean and minimal design with Tailwind CSS
Responsive across devices
Toast notifications for user actions
Smooth navigation using React Router

📌 Future Improvements
Search and Filter Tasks
Due Dates & Reminders
Dark Mode
Role-based Access
Task Analytics

🤝 Contributing
Contributions are welcome. Feel free to fork the repository and submit a pull request.

📄 License
This project is licensed under the MIT License.