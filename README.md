# Event Discovery App

## Project Overview

The Event Discovery App is a web application that allows users to discover exciting new events happening near them. It provides recommendations for upcoming events and allows users to browse through a variety of options. The app aims to enhance the user experience by presenting events in a visually appealing and user-friendly manner.

## Setup and Local Run Instructions

### Prerequisites
- Node.js installed on your local machine

### Setup
1. Clone the repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the necessary dependencies.

### Local Run
1. After completing the setup, run `npm run dev` to start the development server.
2. Open your web browser and navigate to `http://localhost:5137` to view the app.

## Explanation of Design and Technical Decisions

### Project Structure
- The project follows a component-based architecture, with separate components for different parts of the application such as Header, Navbar, RecommendedShows, UpcomingEvents, and EventCard.
- CSS files are organized using modular CSS techniques to improve maintainability and readability.

### Frontend Technologies
- React.js: Chosen for its component-based architecture, virtual DOM, and ecosystem of libraries and tools.
- Axios: Used for making HTTP requests to fetch event data from the backend API.
- SVG Background: Utilized for displaying a visually appealing background image with text overlay.

### User Experience
- Horizontal Scrolling: Implemented for the Recommended Shows section to allow users to scroll through event cards horizontally.
- Responsive Design: Ensured that the app is responsive and works well on various screen sizes and devices.
- Loading States: Incorporated loading states to provide feedback to users while fetching data from the backend.

### Backend Integration
- Axios Library: Integrated Axios for making asynchronous HTTP requests to the backend API endpoints.

