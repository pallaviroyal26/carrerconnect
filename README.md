# CareerConnect – Job Portal Web Application

## About the Project

CareerConnect is a frontend Job Portal Web Application developed using HTML, CSS, and JavaScript. It provides an interactive platform where users can explore job opportunities, search for jobs, save interesting listings, and submit job applications.

The application also includes user registration, login, profile management, and PDF resume upload functionality.

## Features

- **Home Page:** Displays featured job opportunities and job categories.
- **Job Search:** Search jobs based on job title and location.
- **Job Details:** View job descriptions, company information, and required skills.
- **User Registration:** Create a new account.
- **User Login:** Login using registered credentials.
- **Profile Management:** Add and manage personal and professional details.
- **Saved Jobs:** Save interesting jobs and remove them later.
- **Job Applications:** Apply for available job opportunities.
- **PDF Resume Upload:** Upload PDF resumes while submitting applications.
- **My Applications:** View previously submitted applications.
- **Resume Storage:** Uses IndexedDB to store uploaded PDF files.
- **Browser Data Persistence:** Uses LocalStorage to maintain application and profile information.

## Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Structure of web pages |
| CSS3 | Styling and responsive layouts |
| JavaScript | Functionality and interactivity |
| LocalStorage | Store application and account information |
| IndexedDB | Store uploaded PDF resume files |
| VS Code | Development environment |
| Git & GitHub | Version control and project hosting |

## Project Structure

```text
CareerConnect/
│
├── index.html
├── jobs.html
├── job-details.html
├── apply.html
├── login.html
├── register.html
├── profile.html
├── saved-jobs.html
├── my-applications.html
├── contact.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── jobs.js
│   ├── script.js
│   ├── job-details.js
│   ├── saved-jobs.js
│   └── my-applications.js
│
└── images/
```

## How to Run the Project

1. Clone or download this repository.
2. Open the project folder in Visual Studio Code.
3. Install the Live Server extension if it is not already installed.
4. Open `index.html`.
5. Right-click and select **Open with Live Server**.
6. Explore the CareerConnect application in your browser.

## Storage Implementation

- LocalStorage is used to maintain registered account details, profile information, saved jobs, and submitted application records.
- IndexedDB is used to store uploaded PDF resumes.
- Data is maintained within the user's browser.

## Future Enhancements

- Develop a backend using Java and Spring Boot.
- Integrate a MySQL database.
- Implement secure user authentication.
- Add employer and administrator dashboards.
- Enable real-time job posting and application management.

## Important Note

This project is a frontend demonstration. It uses browser-based storage and does not provide production-level authentication or centralized employer application management. A secure backend and database are required for real-world deployment.

## Author

**Pallavi**

GitHub: [pallaviroyal26](https://github.com/pallaviroyal26)

## Project Repository

[CareerConnect – GitHub Repository](https://github.com/pallaviroyal26/carrerconnect)