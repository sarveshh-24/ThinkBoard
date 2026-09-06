# ThinkBoard 📝

A simple and modern full-stack **MERN Notes Application** that allows users to create, view, edit, and delete notes.

ThinkBoard was built as a learning-focused full-stack project to understand how a **React frontend communicates with an Express/Node.js backend and MongoDB database** through REST APIs.

## 🚀 Live Demo

**Live Website:**
👉 `YOUR_LIVE_WEBSITE_URL`

> Replace `YOUR_LIVE_WEBSITE_URL` with your deployed website URL.

---

## 📌 Features

* ✍️ Create new notes
* 📖 View all saved notes
* 🔍 Open individual notes
* 📝 Edit existing notes
* 🗑️ Delete notes
* 📅 Display note creation dates
* 🌙 Light/Dark theme switching
* 🔔 Toast notifications for user actions
* ⏳ Loading states while fetching data
* 🚦 API rate limiting using Upstash Redis
* 📱 Responsive UI for different screen sizes
* ⚡ Fast development and build process using Vite

---

## 🛠️ Tech Stack

### Frontend

* **React** – UI development
* **Vite** – Development server and build tool
* **React Router** – Client-side routing
* **Axios** – API requests
* **Tailwind CSS** – Styling
* **DaisyUI** – UI components and themes
* **Lucide React** – Icons
* **React Hot Toast** – Notifications

### Backend

* **Node.js** – JavaScript runtime
* **Express.js** – REST API server
* **MongoDB** – Database
* **Mongoose** – MongoDB object modeling
* **CORS** – Cross-origin request handling
* **dotenv** – Environment variable management

### Additional Services

* **Upstash Redis** – Rate limiting
* **Upstash Ratelimit** – Request rate limiting

---

## 🏗️ Project Architecture

ThinkBoard follows a simple full-stack architecture:

```text
                    ┌─────────────────────┐
                    │      React UI       │
                    │      Frontend       │
                    └──────────┬──────────┘
                               │
                               │ Axios / REST API
                               ▼
                    ┌─────────────────────┐
                    │    Express Server   │
                    │      Backend        │
                    └──────────┬──────────┘
                               │
                    ┌──────────┴──────────┐
                    │                     │
                    ▼                     ▼
             ┌─────────────┐      ┌─────────────┐
             │   MongoDB   │      │   Upstash   │
             │   Database  │      │ Rate Limit  │
             └─────────────┘      └─────────────┘
```

The frontend sends HTTP requests to the Express backend.

The backend processes those requests, communicates with MongoDB, and returns JSON responses to the frontend.

---

## 📂 Project Structure

```text
ThinkBoard/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   ├── db.js
│   │   │   └── upstash.js
│   │   │
│   │   ├── controllers/
│   │   │   └── notesController.js
│   │   │
│   │   ├── middleware/
│   │   │   └── rateLimiter.js
│   │   │
│   │   ├── models/
│   │   │   └── Note.js
│   │   │
│   │   ├── routes/
│   │   │   └── notesRoutes.js
│   │   │
│   │   └── server.js
│   │
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── NoteCard.jsx
│   │   │   ├── NotesNotFound.jsx
│   │   │   └── RateLimitedUI.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── HomePage.jsx
│   │   │   ├── CreatePage.jsx
│   │   │   └── NoteDetailPage.jsx
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
```

---

## 🔄 How ThinkBoard Works

### 1. View Notes

When the application loads, React sends:

```http
GET /api/notes
```

The backend retrieves all notes from MongoDB and returns them to the frontend.

Notes are sorted by creation date so that the newest notes appear first.

---

### 2. Create a Note

The user enters a title and content and submits the form.

The frontend sends:

```http
POST /api/notes
```

with:

```json
{
  "title": "My Note",
  "content": "This is my note."
}
```

The backend creates a new MongoDB document.

---

### 3. View a Single Note

When a note is selected:

```http
GET /api/notes/:id
```

The backend finds the corresponding note using its MongoDB ID.

---

### 4. Update a Note

After editing a note:

```http
PUT /api/notes/:id
```

The backend updates the title and content in MongoDB.

---

### 5. Delete a Note

When the user deletes a note:

```http
DELETE /api/notes/:id
```

The corresponding document is removed from MongoDB.

---

## 🔌 API Endpoints

| Method   | Endpoint         | Description       |
| -------- | ---------------- | ----------------- |
| `GET`    | `/api/notes`     | Get all notes     |
| `GET`    | `/api/notes/:id` | Get a single note |
| `POST`   | `/api/notes`     | Create a note     |
| `PUT`    | `/api/notes/:id` | Update a note     |
| `DELETE` | `/api/notes/:id` | Delete a note     |

---

## 🗄️ Database

ThinkBoard uses **MongoDB** with **Mongoose**.

Each note contains:

```text
Note
├── title
├── content
├── createdAt
└── updatedAt
```

The `createdAt` and `updatedAt` fields are automatically generated using Mongoose timestamps.

---

## 🚦 Rate Limiting

ThinkBoard uses **Upstash Redis** and **Upstash Ratelimit** to protect the API from excessive requests.

The current configuration allows:

```text
10 requests / 20 seconds
```

If the limit is exceeded, the server returns:

```http
429 Too Many Requests
```

The frontend detects this response and displays a rate-limit message to the user.

---

## 🎨 User Interface

ThinkBoard includes:

* Responsive note cards
* Light/Dark theme
* Create note form
* Edit note interface
* Delete confirmation
* Loading indicators
* Toast notifications
* Rate-limit feedback

The UI is designed to remain simple and beginner-friendly while still providing a polished application experience.

---

# 💻 Running the Project Locally

## Prerequisites

Make sure you have installed:

* [Node.js](https://nodejs.org/)
* MongoDB account/database
* Upstash Redis account (for rate limiting)
* Git

---

## 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd ThinkBoard
```

---

## 2. Install Backend Dependencies

```bash
cd backend
npm install
```

---

## 3. Install Frontend Dependencies

Open another terminal:

```bash
cd frontend
npm install
```

---

# 🔐 Environment Variables

Create a `.env` file inside the `backend` directory.

```env
MONGO_URI=your_mongodb_connection_string
UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
PORT=5001
NODE_ENV=development
```

### Example

```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/thinkboard
UPSTASH_REDIS_REST_URL=your_url
UPSTASH_REDIS_REST_TOKEN=your_token
PORT=5001
NODE_ENV=development
```

> Never commit your `.env` file to GitHub.

The repository already includes `.env` in `.gitignore`.

---

# ▶️ Running the Application

You need to run both the backend and frontend.

### Start Backend

From the `backend` directory:

```bash
npm run dev
```

The backend will run on:

```text
http://localhost:5001
```

### Start Frontend

From the `frontend` directory:

```bash
npm run dev
```

Vite will provide a local development URL, usually:

```text
http://localhost:5173
```

Open that URL in your browser.

---

# 📦 Production Build

To create a production build of the frontend:

```bash
cd frontend
npm run build
```

This generates the production files inside:

```text
frontend/dist
```

The backend is configured to serve the frontend build when:

```env
NODE_ENV=production
```

---

# 🧠 What I Learned From This Project

This project helped me understand the fundamentals of full-stack web development, including:

* Building REST APIs with Express
* Connecting Node.js with MongoDB
* Creating MongoDB schemas using Mongoose
* Performing CRUD operations
* Connecting React to a backend API
* Using Axios for HTTP requests
* React state and lifecycle management
* Client-side routing with React Router
* Handling loading and error states
* Implementing API rate limiting
* Using environment variables
* Working with frontend/backend development environments
* Deploying a full-stack application

---

# 🔮 Future Improvements

Some features that could be added in future versions:

* 🔐 User authentication with JWT
* 👤 User-specific notes
* 🔑 Google/GitHub OAuth login
* 🔎 Search and filter notes
* 🏷️ Tags/categories
* 📌 Pin important notes
* 🗂️ Note folders
* 📝 Markdown support
* 🌐 Improved production deployment configuration
* 👥 Sharing notes with other users

---

# 🤝 Contributing

This project was primarily created as a learning and portfolio project.

If you have suggestions or improvements, feel free to fork the repository and submit a pull request.

---

# 📄 License

This project is available for educational and personal use.

---

## ⭐ If You Like the Project

If you found ThinkBoard useful or interesting, consider giving the repository a ⭐ on GitHub.
