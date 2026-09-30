# Z Energy Station Locator

A web application that helps users find Z Energy service stations, view station information, search and filter stations, and locate stations on an interactive map.

This project was developed as part of the Mission Ready programme using an Agile development approach.

## Features

- Search for Z Energy service stations
- View stations on an interactive map
- View station details
- Filter stations by fuel and station type
- View fuel prices and available services
- View station addresses and location information
- Responsive user interface

## Technologies

### Frontend

- React
- Vite
- JavaScript
- CSS
- React Router
- Leaflet

### Backend

- Node.js
- Express.js
- MongoDB

### Development Tools

- Git
- GitHub
- Jira
- Pull Requests
- Agile / Kanban

## My Contribution

I worked as part of a three-person development team.

My main contribution was frontend development, including:

- Developed sections of the Home page, including the Hero section and Fuel Supply Update section.
- Built the "What you need, made easy" section.
- Developed the desktop version of the "There where you need us" section.
- Worked on the "Make the most of Z" section.
- Contributed to shared frontend components and responsive layouts.
- Worked with Leaflet and location-based functionality.
- Helped implement distance calculations between the user's location and service stations.
- Collaborated with team members using GitHub branches, pull requests, Jira and regular stand-up meetings.

## Project Structure

```text
client/
    React frontend

server/
    Express.js backend

README.md
    Project documentation
```

## Installation

### Prerequisites

Make sure you have the following installed:

- Node.js
- MongoDB Community Server
- MongoDB Compass

### Clone the repository

```bash
git clone https://github.com/munishk686/z-energy-station-locator.git
cd z-energy-station-locator
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

## Database

The application uses a local MongoDB database containing Z Energy station information, including:

- Station name
- Address
- Location coordinates
- Station type
- Fuel types
- Fuel prices
- Services
- Opening information

## Team

This project was developed by:

- Munish Kumar
- Jack Cheng
- Isaiah Marchenko

## Project Context

This project was developed as part of the Mission Ready Advanced Full Stack Developer programme. The team used Agile practices including Jira Kanban, GitHub branches and pull requests, regular stand-ups, and collaborative development.