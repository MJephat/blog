# blog

Welcome to the Blog Website, a full-stack application built with React.js for the front end, Node.js and Express.js for the backend, and MySQL database. The application uses various technologies such as Axios, Cookie-parser, React-Quill, Multer, and Bcrypt for enhanced functionality and security. The deployment is managed on Vercel for the frontend and AWS for the backend and database.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

User Authentication: Secure user authentication is implemented using bcrypt for password hashing and cookie-parser for managing user sessions.

Rich Text Editor: React-Quill is integrated for a user-friendly and feature-rich text editor, allowing users to create engaging blog posts.

Image Uploads: Multer is used for handling file uploads, enabling users to include images in their blog posts.

Data Fetching: Axios is utilized for making HTTP requests to the backend, ensuring smooth communication between the frontend and backend.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/MJephat/blog.git
   ```

2. Install dependencies for the frontend:

   ```bash
   cd blog
   npm install
   npm i react- quill
   npm i react-router-dom@latest
   npm install resolve-url-loader --save-dev
   npm install node-sass saas-loader
   npm i sass --save -dev
   npm i axios --save-dev

   ```

3. Install dependencies for the backend:

   ```bash
   cd api
   npm install
   npm install express mysql and nodemon
   npm i bcrypt
   npm i multer --save-dev
   npm install cors
   ```
   Download database tools like mysql workbench...

4. Set up the MySQL database and configure the connection details in the `api/db.js` file.

5. Run the backend server:

   ```bash
   npm start
   ```

6. Run the frontend development server:

   ```bash
   cd blog
   npm start
   ```

## Usage

Once the installation is complete and the servers are running, open your browser and navigate to `http://localhost:3000` to access the Blog Website.

## Technologies Used

- React.js
- Node.js
- Express.js
- MySQL
- Axios
- Cookie-parser
- React-Quill
- Multer
- Bcrypt

## Deployment

The project is deployed on [Vercel](https://vercel.com/), and the database is deployed on [AWS](https://aws.amazon.com/). Ensure to configure the deployment settings based on your preferences.

link: https://blog-beta-wine.vercel.app/

## Contributing

Contributions are welcome! Feel free to submit issues and pull requests.
## Authors
1. MJephat
2. Gkmaina

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.