# NotesApp (Node + Express + MongoDB)

A simple REST API for managing notes using **Express** and **MongoDB (Mongoose)**.

## Features

- Create a note
- Fetch all notes
- Update a note
- Delete a note

## Tech Stack

- Node.js
- Express
- Mongoose
- dotenv

## Prerequisites

- Node.js installed
- MongoDB connection string

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env` file in the project root:
   ```env
   MONGO_URI=your_mongodb_connection_string
   ```
3. Start the server:
   ```bash
   npm run dev
   ```

Server runs on:

- `http://localhost:3000`

## API Endpoints

All endpoints are prefixed with `/api/notes`.

### 1) Create a note

**POST** `/api/notes`

**Body (JSON):**

```json
{
  "title": "Sample title",
  "description": "Sample description"
}
```

**Response:**

- `201` with `noteData`

### 2) Fetch all notes

**GET** `/api/notes`

**Response:**

- `200` with `noteData` (array)

### 3) Delete a note

**DELETE** `/api/notes/:id`

**Response:**

- `200` with a success message

### 4) Update a note

**PATCH** `/api/notes/:id`

**Body (JSON):**

```json
{
  "title": "Updated title",
  "description": "Updated description"
}
```

**Response:**

- `200` with a success message

## Project Structure

- `server.js` - starts the app and connects to MongoDB
- `src/app.js` - Express routes (CRUD APIs)
- `src/config/database.js` - MongoDB connection
- `src/models/note.model.js` - Mongoose schema/model

## npm Scripts

- `npm run dev` → runs `npx nodemon server.js`
