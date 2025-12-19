Full Stack Company Website (MERN)
Project Overview

This project is a full-stack MERN application developed as part of a placement assignment.
The application consists of:

A public landing page to showcase projects, clients, and collect user details

A private admin panel to manage projects, clients, and view user submissions

The goal of the project is to demonstrate end-to-end full-stack development including frontend, backend, database integration, API handling, and deployment readiness.

Tech Stack
Frontend

React (Vite)

React Router

Axios

CSS / Tailwind (for styling)

Backend

Node.js

Express.js

MongoDB (MongoDB Atlas)

Cloudinary (for image storage)

Multer (file uploads)

Application Flow
1. Landing Page (Public)

The landing page is accessible to all users and includes the following sections:

Our Projects

Displays all projects fetched from the backend

Each project includes:

Project image

Project name

Project description

Dummy “Read More” button (non-functional)

Existing dummy data remains visible

Projects added from the admin panel appear dynamically along with dummy data

Happy Clients

Displays client testimonials fetched from the backend

Each client includes:

Image

Name

Description

Designation

Contact Form

Users can submit:

Full name

Email address

Mobile number

City

On submission:

Data is sent to the backend

Saved in the database

Viewable in the admin panel

Newsletter Subscription

Users can subscribe using their email address

Email is stored in the backend

Admin can view all subscribed emails

Admin Access

An Admin button is available in the top-right corner of the landing page

Redirects to the admin panel

2. Admin Panel (Private)

The admin panel is designed for internal management and content control.

Admin Features
Project Management

Admin can add new projects by providing:

Project image

Project name

Project description

Images are uploaded to Cloudinary

Newly added projects appear on the landing page automatically

Client Management

Admin can add client details:

Client image

Client name

Description

Designation

Client data is reflected instantly on the landing page

Contact Form Responses

Admin can view all contact form submissions

Details displayed:

Full name

Email

Mobile number

City

Read-only view

Newsletter Subscribers

Admin can view all subscribed email addresses

Read-only list

Note: Authentication was not implemented as it was not required for this assignment.

Backend API Overview
Feature	Method	Endpoint
Add Project	POST	/api/projects
Get Projects	GET	/api/projects
Add Client	POST	/api/clients
Get Clients	GET	/api/clients
Submit Contact	POST	/api/contact
Get Contacts	GET	/api/contact
Subscribe Newsletter	POST	/api/newsletter
Get Subscriptions	GET	/api/newsletter
Image Handling

Images are uploaded using multipart/form-data

Cloudinary is used for image storage

(Bonus) Image cropping can be handled on the frontend before upload

Deployment Status
Frontend

Frontend is ready for deployment on platforms like:

Vercel

Netlify

Backend (Deployment Challenge Faced)

While deploying the backend, some issues were faced related to:

Environment variable configuration (.env)

Cloudinary credentials setup

Platform-specific environment handling during deployment

Due to time constraints, the backend was verified locally with all APIs working correctly via Postman.
Deployment configuration is in progress and can be finalized by resolving environment variable setup on the hosting platform.

How to Run Locally
Backend
cd backend
npm install
npm run dev

Frontend
cd frontend
npm install
npm run dev

Conclusion

This project demonstrates:

Proper separation of frontend and backend

Clean API integration

Real-world admin panel functionality

Database-driven dynamic content

Scalable project structure

The application fulfills all core requirements of the assignment and follows practical full-stack development practices
