# NotesApp — Frontend

The React frontend for the NotesApp full-stack application. It provides a clean, responsive UI for creating, viewing, updating, and deleting notes, and communicates with the Express backend via REST API.

## Features

- Create a new note via a form
- View all notes in a responsive card grid
- Update a note (prompts for new title and description)
- Delete a note
- Modern dark-themed, responsive styling

## Tech Stack

- React 19
- Vite
- axios
- ESLint

## Prerequisites

- Node.js installed
- Backend server running on `http://localhost:3000` (see the root `Readme.md`)

## Setup

```bash
# From the frontend/frontend directory
npm install
```

Start the Vite dev server:

```bash
npm run dev
```

The app will run at `http://localhost:5173`.

> The frontend calls the backend API at `http://localhost:3000/api/notes`. Make sure the backend server is running first.

## Project Structure

```
frontend/
└── frontend/
    ├── index.html            # Vite entry HTML
    ├── vite.config.js        # Vite configuration
    ├── eslint.config.js      # ESLint configuration
    ├── package.json
    ├── public/
    │   └── vite.svg
    └── src/
        ├── main.jsx          # React entry point
        ├── App.jsx           # Main app component (create/list/update/delete)
        ├── index.css         # App styles
        └── assets/
            └── react.svg
```

## npm Scripts

- `npm run dev` → runs the Vite dev server
- `npm run build` → builds the app for production
 

## API Usage

The frontend uses the following backend endpoints:

- `GET /api/notes` — fetch all notes
- `POST /api/notes` — create a note
- `PATCH /api/notes/:id` — update a note
- `DELETE /api/notes/:id` — delete a note
