

# Social Media App

A full-stack social media application built with a modern, component-based architecture for a fast and responsive user experience.  
It provides secure authentication, dynamic UI, real-time notifications, and seamless content sharing.

---

## Table of Contents

- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Architecture & Folder Structure](#architecture--folder-structure)  
- [Setup & Installation](#setup--installation)  
- [Environment Variables](#environment-variables)  
- [Usage](#usage)  
- [API Endpoints](#api-endpoints)  
- [Contributing](#contributing)  
- [License](#license)  
- [Acknowledgements](#acknowledgements)  

---

## Features

- **Secure Authentication**: User sign-up, sign-in, and session management powered by **Clerk**.  
- **Real-time Notifications**: In-app toast notifications and email alerts for key events.  
- **Dynamic UI**: A responsive and intuitive interface built with **React** and styled with **Tailwind CSS**.  
- **State Management**: Efficient and predictable state handling using **Redux**.  
- **Media Uploads**: Seamless uploading and managing of profile pictures and post images via **Multer**.  
- **Webhooks & Background Jobs**: Integrated **Clerk webhooks** and **Inngest** for backend automation.  
- **User Profiles**: Editable user details and profile management.  
- **Posts & Feed**: Create, view, and delete posts with content sharing.  

---

## Tech Stack

### Frontend
- **Framework**: React + Vite  
- **Routing**: React Router  
- **State Management**: React Redux  
- **Styling**: Tailwind CSS  
- **UI Components**: Lucid-react  
- **Authentication**: Clerk (React SDK)  
- **Notifications**: React Hot Toast  

### Backend
- **Server**: Express (Node.js)  
- **Database**: MongoDB (via Mongoose)  
- **Authentication**: Clerk (server-side)  
- **Background Jobs**: Inngest  
- **File Uploads**: Multer  
- **Email Service**: Nodemailer + Brevo Mail  
- **CORS & Config**: CORS, dotenv  

---

## Architecture & Folder Structure

```

Social\_media\_app/
├── client/         # React front-end
│   ├── src/
│   ├── public/
│   └── ...
├── server/         # Back-end API
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   ├── configs/
|   ├── index.js
│   └── ...
├── .gitignore
├── README.md
└── (other config files)

````

---

## Setup & Installation

### Prerequisites
- Node.js (v18+ recommended)  
- npm or yarn  
- MongoDB instance (local or cloud, e.g. MongoDB Atlas)  
- Clerk account & API keys  

### Clone & Install

```bash
git clone https://github.com/jai1309/Social_media_app.git
cd Social_media_app
````

#### Install dependencies

Frontend:

```bash
cd client
npm install
```

Backend:

```bash
cd ../server
npm install
```

---

## Environment Variables

Create a `.env` file in the `server/` folder.

```env
MONGODB_URI=your_mongodb_connection_string

INNGEST_EVENT_KEY=your_inngest_event_key
INNGEST_SIGNING_KEY=your_inngest_signing_key

CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint

SENDER_EMAIL=your_sender_email
SMTP_USER=your_smtp_username
SMTP_PASS=your_smtp_password

FRONTEND_URL=http://localhost:5173
   ```



---

## API Endpoints

### Inngest
- `POST /api/inngest` → Inngest client & functions

### User
- `GET /api/user/data` → Get user data  
- `POST /api/user/update` → Update user profile & cover  
- `POST /api/user/discover` → Discover users  
- `POST /api/user/follow` → Follow user  
- `POST /api/user/unfollow` → Unfollow user  
- `POST /api/user/connect` → Send connection request  
- `POST /api/user/accept` → Accept connection request  
- `GET /api/user/connections` → Get user connections  
- `POST /api/user/profiles` → Get user profiles  
- `GET /api/user/recent-messages` → Get recent messages

### Posts
- `POST /api/post/add` → Add a new post (max 4 images)  
- `GET /api/post/feed` → Get feed posts  
- `POST /api/post/like` → Like a post  

### Stories
- `POST /api/story/create` → Create a new story  
- `GET /api/story/get` → Get stories  

### Messages
- `GET /api/message/:userId` → Stream messages (SSE)  
- `POST /api/message/send` → Send a message (with optional image)  
- `POST /api/message/get` → Get chat messages


---

## Contributing

Contributions are welcome!

1. Fork the repository
2. Create a branch:

   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:

   ```bash
   git commit -m "Add some feature"
   ```
4. Push to your fork:

   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a Pull Request

---

## License

This project is licensed under the **MIT License**.

---

## Acknowledgements

* **Clerk** for authentication
* **Brevo** for email services
* **Inngest** for background jobs & event handling
* **Open-source community** for providing the libraries used

```

