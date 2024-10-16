# Hidden Gems Application

## About this Project

This project is the frontend application of the Hidden Gems website, created using Next.js, React Leaflet Maps, Tailwind CSS and much more. It is connected to an Express backend server that handles all data-related operations (please see Backend links below). This website is designed to allow users to discover, review, and comment on Hidden Gems (places and events) around Greater Manchester.

## Project Links

Frontend APP: https://hidden-gems-frontend.vercel.app/ <br>
Frontend Repo: https://github.com/christianaao/hidden-gems-frontend <br>
Original Repo Link: https://github.com/flynnjim/hidden-gems-frontend <br>

Backend API: https://hidden-gems-cd0h.onrender.com/api <br>
Backend Repo: https://github.com/christianaao/hidden-gems-backend <br>
Original Repo Link: https://github.com/espiers13/hidden-gems <br>

_Please refer to the Backend Repo on guidance for using the Backend API_

## Features of this Project

- Next.js File-based Routing: Efficient routing system using the file structure.
- Dynamic Page Layouts: Pages and layouts built with React components.
- API Integration with Express Backend: All data (users, gems, comments) is fetched from the backend using Axios.
- Interactive Map: Leaflet is used for displaying gem locations on a map.
- Firebase Avatar Selection: Firebase is used for storing and selecting user avatars during signup.
- Tailwind CSS: Used for styling the components.

## Tech Stack

#### Frontend

- Next.js (file routing and layout)
- React Hook Form Library
- Tailwind CSS, HeadlessUI and MUI
- Axios - API requests
- React Leaflet - displaying maps
- Firebase for managing stored data e.g. avatars
- GeoCode.maps.co API - map geocoding
- Yup Validation Library
- Versel - hosting

#### Backend

- Express.js
- PostgreSQL
- Jest / SuperTest
- Supabase
- Render

## Running this Project Locally

### Installation

Ensure you have the following installed:

Node.js v14.x or later. Instructions to do this can be found here: https://nodejs.org/en <br>
npm v6.x or later. To install this, run `npm install npm@latest -g` in your terminal

### Setup

1. Clone or fork this repository.

2. In your terminal, locate the directory you would like to save the code to and type `git clone` followed by the cloned/forked repo link.

3. In the cloned directory, type `npm install` in your terminal to install all dependencies.

4. Create a dotenv file titled `.env.local`, and insert the following environment variables:
   * `NEXT_PUBLIC_API_URL=<Your Express Backend API URL>`
   * `NEXT_PUBLIC_FIREBASE_API_KEY=<Your Firebase API key>`
   * `NEXT_PUBLIC_GEOCODER_API_KEY=<Your Geocode.maps.co API key>`

5. To run the app in development mode, type `npm run dev` and the application will become available on the following URL: `http://localhost:3000`.
