# NotesApp

A full-stack Notes application built with a **Node.js + Express + MongoDB** REST API on the backend and a **React (Vite)** frontend. Users can create, read, update, and delete notes through a clean UI.

## Features

- Create a note
- Fetch all notes
- Update a note
- Delete a note
- Responsive, modern UI built with React
- Full-stack CRUD integration between the React frontend and Express API

## Tech Stack

### Backend

- Node.js
- Express
- Mongoose
- MongoDB
- CORS
- dotenv

### Frontend

- React 19
- Vite
- axios

## Prerequisites

- Node.js installed
- MongoDB connection string (local or MongoDB Atlas)

## Setup

### 1. Backend

```bash
# From the project root
npm install
```

Create a `.env` file in the project root:

```env
MONGO_URI=your_mongodb_connection_string
```

Start the backend server (port 3000):

```bash
npm run dev
```

### 2. Frontend

```bash
# From the project root
cd frontend/frontend
npm install
```

Start the Vite dev server:

```bash
npm run dev
```

The frontend will run at `http://localhost:5173` and connects to the backend API at `http://localhost:3000/api/notes`.

## API Endpoints

All endpoints are prefixed with `/api/notes`.

| Method   | Endpoint         | Description     |
| -------- | ---------------- | --------------- |
| `POST`   | `/api/notes`     | Create a note   |
| `GET`    | `/api/notes`     | Fetch all notes |
| `PATCH`  | `/api/notes/:id` | Update a note   |
| `DELETE` | `/api/notes/:id` | Delete a note   |

### Create a note

**POST** `/api/notes`

**Body (JSON):**

```json
{
  "title": "Sample title",
  "description": "Sample description"
}
```

**Response:** `201` with `noteData`

### Fetch all notes

**GET** `/api/notes`

**Response:** `200` with `noteData` (array)

### Update a note

**PATCH** `/api/notes/:id`

**Body (JSON):**

```json
{
  "title": "Updated title",
  "description": "Updated description"
}
```

**Response:** `200` with a success message

### Delete a note

**DELETE** `/api/notes/:id`

**Response:** `200` with a success message

## Project Structure

```
NotesApp/
├── server.js                 # Starts the app and connects to MongoDB
├── .env                      # Environment variables (not committed)
├── src/
│   ├── app.js                # Express routes (CRUD APIs)
│   ├── config/
│   │   └── database.js       # MongoDB connection
│   └── models/
│       └── note.model.js     # Mongoose schema/model
└── frontend/
    └── frontend/
        ├── index.html        # Vite entry HTML
        ├── vite.config.js    # Vite configuration
        ├── package.json
        └── src/
            ├── main.jsx      # React entry point
            ├── App.jsx       # Main app component (create/list/update/delete)
            ├── index.css     # App styles
            └── assets/
```

## npm Scripts

### Backend

- `npm run dev` → runs `npx nodemon server.js`

### Frontend

- `npm run dev` → runs the Vite dev server
- `npm run build` → builds the app for production
 
