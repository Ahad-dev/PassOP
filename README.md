# PassOp - Password Manager

PassOp is a web application that allows users to store, edit, delete, and copy their passwords. This application is built using React for the frontend and Express for the backend, with MongoDB as the database.

## Table of Contents

- [Features](#features)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Store Passwords**: Save site-specific usernames and passwords.
- **Edit Passwords**: Update stored passwords.
- **Delete Passwords**: Remove passwords from storage.
- **Copy Passwords**: Copy passwords for easy pasting.

## Folder Structure

```plaintext
PassOp/
├── backend/
│   ├── node_modules/
│   ├── db.js
│   ├── index.js
│   ├── package-lock.json
│   ├── package.json
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Manager.jsx
│   │   ├── Navbar.jsx
│   │   ├── PasswordTable.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── vite.config.js
```

## Installation

1. **Clone the repository**

   ```sh
   git clone https://github.com/yourusername/PassOp.git
   cd PassOp
   ```

2. **Install dependencies**

   - Backend

     ```sh
     cd backend
     npm install
     ```

   - Frontend

     ```sh
     cd ../
     npm install
     ```

3. **Set up MongoDB**

   Ensure you have MongoDB installed and running on your machine. Update the `db.js` file in the backend to connect to your MongoDB instance.

## Usage

1. **Run the backend server**

   ```sh
   cd backend
   node index.js
   ```

   The backend server will start on `http://localhost:3000`.

2. **Run the frontend server**

   ```sh
   npm run dev
   ```

   The frontend development server will start on `http://localhost:5173`.

## API Endpoints

- **GET `/`**: Fetch all stored passwords.
  - **Response**: JSON array of password objects.

- **POST `/`**: Add a new password.
  - **Request Body**: JSON object with `site`, `username`, `password`.
  - **Response**: The created password object.

- **DELETE `/:id`**: Delete a password by its ID.
  - **Response**: A success message.

## Contributing

We welcome contributions! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a pull request.

## License

This project is licensed under the MIT License.

---

Feel free to customize this README file further according to your project's specific details and requirements. If you have any additional features or instructions, you can include those as well.