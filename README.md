# Level 5 ADV Mission 5 Phase 2

## Introduction

This project is a Z Energy Station Locator application built as part of Mission 5 Phase 2.

The application allows users to find Z Energy stations, search for stations, view station information, apply filters, and view stations on a map. Users can also select their preferred fuel and station type to refine their search.

The project includes a React frontend and an Express.js backend connected to a local MongoDB database.

## Installation

### Prerequisites

Make sure you have the following installed:

- Node.js
- MongoDB Community Server
- MongoDB Compass

### Clone the repository

```bash
git clone https://github.com/Mission-Ready/l5-adv-2026-jul-l5-adv-mission-5-phase-2-munishk686
cd Mission-Ready/l5-adv-2026-jul-l5-adv-mission-5-phase-2-munishk686
```

### Install frontend dependencies

```bash
cd client
npm install
```

### Start the frontend

```bash
npm run dev
```

### Install backend dependencies

Open a new terminal and run:

```bash
cd server
npm install
```

### Start the backend

```bash
npm start
```

The frontend and backend should now be running locally.

## More Details

### Frontend

The frontend is built using:

- React
- Vite
- JavaScript
- CSS
- React Router

The frontend includes:

- Home page
- Fuel and station selection
- Station search
- Station list
- Filters
- Map view
- Station details

### Backend

The backend is built using:

- Node.js
- Express.js
- MongoDB

The backend provides API endpoints for retrieving Z Energy station information from the MongoDB database.

### Database

The application uses a local MongoDB database containing Z Energy station data, including:

- Station name
- Address
- Location coordinates
- Station type
- Fuel types
- Fuel prices
- Services
- Opening information

## Contributors

- Munish Kumar 
- Jack Cheng
- Isaiah Marchenko