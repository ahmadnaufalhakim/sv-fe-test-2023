# Sharing Vision Frontend Test 2023

A React + Vite frontend app for managing posts (Published, Draft, Trashed) as part of the recruitment test at **Sharing Vision Indonesia**.  
The frontend connects to a Golang backend ([sv-be-test-2023](https://github.com/ahmadnaufalhakim/sv-be-test-2023)).

---

## Features
- **All Posts**: Tabs for published, draft, and trashed posts with table (title, category, actions).
- **Edit Post**: Edit title, content, category. Save as draft or publish.
- **Add New**: Form to create new post with draft/publish options.
- **Trash**: Move posts to trash.
- **Preview**: View published posts with pagination.

---

## Project Structure
```
src/
├── api/ # API handlers
├── components/ # Reusable components (PostTable, PostForm, Pagination)
├── pages/ # Pages (AllPosts, AddNew, EditPost, Preview)
├── utils/ # Helper functions
├── App.jsx # Router setup
└── main.jsx # Entry point
```

---

## How to run

### 1. Clone the repo
```bash
git clone https://github.com/ahmadnaufalhakim/sv-fe-test-2023.git
cd sv-fe-test-2023
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the [backend](https://github.com/ahmadnaufalhakim/sv-be-test-2023)
Make sure the Golang backend sv-be-test-2023 is running on `http://localhost:8080`
```bash
docker compose --env-file .env.sample up -d
go run main.go
```

### 4. Run the frontend
```bash
npm run dev
```

---

## Tech Stack
- [React](https://react.dev)
- [Vite](https://vite.dev)
- [React Router](https://reactrouter.com)
- [Tailwind CSS](https://tailwindcss.com)
