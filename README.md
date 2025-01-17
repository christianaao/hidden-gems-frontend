# Hidden Gems Application

## About this Project

This project is the frontend application of the Hidden Gems website, created using Next.js, React Leaflet Maps, Tailwind CSS and much more. It is connected to an Express backend server that handles all data-related operations (please see Backend links below). This website is designed to allow users to discover, review, and comment on Hidden Gems (places and events) around Greater Manchester.

## Project Links

Frontend APP: https://hidden-gems-oo.vercel.app/ <br>
Frontend Repo: https://github.com/christianaao/hidden-gems-frontend <br>
Original Repo Link: https://github.com/flynnjim/hidden-gems-frontend <br>

Backend API: https://hidden-gems-project.onrender.com/api <br>
Backend Repo: https://github.com/christianaao/hidden-gems-backend <br>
Original Repo Link: https://github.com/espiers13/hidden-gems <br>

_Please refer to the Backend Repo on guidance for using the Backend API_

## Features of this Project

This project was created as part of a group project. This CRUD (Create, Read, Update, Delete) application provides users with an engaging experience for browsing and interacting with Hidden Gems around Greater Manchester through our site.

### Website Features

* visual map which allows user to view all events and places (Gems) around Greater Manchester. Can also activate your location to view Gems near you.
* list of all Hidden Gems to browse through, with details about the event or place such as creater, date of event (where applicable), and vote and comment counts
* Home page displays Top Gems and Gems Happening Soon which features carrossel swiping functionality
* inidividual Hidden Gem pages that can be viewed and read
* functionality to filter Gems by category
* functionality to sort Gems by date or rating in ascending or descending order
* voting section for each individual Gem
* comments section for each individual Gem
* Login and Sign Up form validation and authentication
* Menu side panel and navigation bar
* user page detailing personal info and Gems posted
* functionality for a user to add and delete comments they post
* users can also post a new Hidden Gem:
    - form validation for missing/incorrect detail formats
    - ability to upload images
    - map functionality to access location coordinates to determine Gem address

_and more features to come!_

### Technology

- Next.js File-Based Routing: efficient routing system using the file structure
- Dynamic Page Layouts: pages and layouts built with React components
- API Integration with Express Backend: all data (users, gems, comments) are fetched from the backend using Axios
- Map Coordination: GeoCode.maps.co API converted coordinates to addresses and vice-versa
- Interactive Map: React Leaflet allows Gem locations to be displayed visually on the map
- Firebase Data Storing and Image Uploading: Firebase allows users to upload and store images, as well as access to select stored files in the database e.g. user avatars during signup
- Tailwind CSS: for styling components

## Tech Stack

#### Frontend

- Next.js
- Axios
- Firebase
- React Leaflet
- GeoCode.maps.co API
- Tailwind CSS, HeadlessUI and MUI
- FontAwesome
- React Hook Form Library
- Yup Validation Library
- Versel

#### Backend

- Express.js
- PostgreSQL
- Jest, SuperTest and Husky
- Supabase
- Render

## Running this Project Locally

### Installation and Software Requirements

Node.js - v14.x or later. Instructions to do this can be found here: https://nodejs.org/en <br>
npm - v6.x or later. To install this, run `npm install npm@latest -g` in your terminal

### Setup

1. Clone or fork this repository.

2. In your terminal, locate the directory you would like to save the code to and type `git clone` followed by the cloned/forked repo link.

3. In the cloned directory, type `npm install` in your terminal to install all dependencies.

4. Create a dotenv file titled `.env.local`, and insert the following environment variables:
   * `NEXT_PUBLIC_API_URL=<Your Express Backend API URL>`
   * `NEXT_PUBLIC_FIREBASE_API_KEY=<Your Firebase API key>`
   * `NEXT_PUBLIC_GEOCODER_API_KEY=<Your Geocode.maps.co API key>`

5. To run the app in development mode, type `npm run dev` and the application will become available on the following URL: `http://localhost:3000`.

☺ I hope you enjoy browsing through my website ☺
