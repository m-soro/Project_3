# Open Peaks V2

## [Project Link](https://openpeaks.netlify.app/)

---

### [Backend Repo](https://github.com/m-soro/Project_3_backend)

### [Frontend Repo](https://github.com/m-soro/Project_3_frontend)

### [Trello Board](https://trello.com/b/xQLtnoxs/project3)

---

Is a single page, full stack MERN application that lets you check and compare skiing and snowboarding destinations around the world.
My third and capstone project for Per Scholas Software Engineering Track.

This app is the extended version of my [second project](https://github.com/m-soro/Project_2), where users can create an account, save their favorite destinations in a list where my front end calls an API to show relevant data.

### Plan/Build

1. Started this project with user authentication - this took the most time.

---

2. Set up backend

- Set up server - ensuring successful connection with MongoDB
  - I followed suggested practices in Module 3
- Set up Schemas - (1) User (2) Mountain

- Set up routes - (1) User (2) Mountain

---

### User Stories

### Challenges

### Design

### Limitations and Known Issues

### Future Plans

### Acknowledgements

---

# MOD 3 : MERN STACK APPLICATION

### Necessary Deliverables

### 1) Project Planning

A project consists of more than just code.

This project requires planning organized within a Trello board with the following lists:

**Icebox:** Holds user stories that have yet to be moved to the Current/MVP list. All user stories are originally put into the Icebox, including both MVP and wish list stories.

**Current/MVP**: Holds user stories that must be completed to meet the minimum project requirements (MVP). Once the MVP has been met, additional user stories may be moved from the Icebox.
Completed: Hold completed user stories.

**Wireframes**: Sketches of each screens's user interface for the major functionality of the application.

**Entity-Relationship-Diagram (ERD)**: A diagram of the app's models (one per data entity) and the relationships between them.

**User stories** need to be formed properly using this template:
As a <role>, I want <feature> so that <reason>. The reason is optional if it's patently obvious.

### 2) Project Source Control & README

The project's source code for both your Express Backend and React Frontend must be hosted on a personal GitHub repository.

The repo is to contain frequent commits dated from the beginning of the project through its completion.

The project must include a README.mdfile with the following sections:

- **Introduction**: A paragraph used to introduce interested parties to the project and needs to include one or more screenshots.

- **Technologies Used**: A list of all technologies, libraries, APIs, etc. used in the project.

- **Getting Started**: Links to the project's planning (Trello board) and the deployed app.

- **Unsolved Problems**: List any unsolved issues

- **Future Enhancements**: Identify future features and enhancements planned for the project.

### 3) Application Technical Requirements/Deliverables

1. A **functioning** full-stack, single-page application for (Express) and a CDN service for (React).

2. Incorporate the technologies of the MERN-stack:

- MongoDB/Mongoose
- Express
- React
- Node

3. Have a well-styled interactive front-end that communicates with the Express backend via AJAX.
4. Implement token-based authentication - "...a user can sign-up, log in & log out".
5. Implement authorization by restricting functionality to authenticated users.
6. Navigation should respond to the login status of the user.
7. One User data entity minimum, which will be used for Auth; other data entities can be added and related if desired but are not required.
8. **Have a comprehensive feature-set**.

   **1. Full CRUD distributed across all Data Entities**

   **Or**

   **2. One of the following features instead**:

   - **(Easy)** - Consume a third-party API and display API data in components.
   - **(Moderate)** - Include an admin interface w/features.
   - **(Hard)** - Utilize multi-user, real-time communications (difficult and time consuming)

### 4) Project Presentation

You will have 7 minutes to present and demonstrate the following:

1. Introduce your project by paraphrasing its README.
2. Click the link in the README to open the deployed app.
3. Demonstrate the application's authentication features by signing up a new user, logging out that user, then logging in with your preferred user.
4. Demonstrate your app's main features.
5. Share/discuss the following code (not line-by-line):

- The main/central Mongoose model
- Your "favorite" Express controller method
- Your "favorite" React component
- The client-side routing

6. Share the experience by answering the following:

- What was your biggest challenge?
- What are your key learnings/takeaways?
- Following your presentation, there will be a brief Q & A period and optional instructor feedback.

### Suggestions to Get Started

- Don’t get too caught up in too many awesome features – simple is better. Favor fewer features that look/feel impressive over numerous clunky/sloppy features.

- Implement the Usermodel and authentication first. Then implement the "As a visitor, when I browse to the app, I want..." user story.

- Prioritize user stories and code them accordingly.

- When implementing a feature, think through the steps that it takes in plain language first. If necessary, write and/or diagram the steps to help guide your coding.

- Follow the steps we've done in class to implement features, beginning with the user's interaction, identifying the proper route, etc.

- Read the docs for whatever technologies / frameworks / API’s you use.

### Best Practices

- **Write DRY code**.

- In a SPA, communication with the backend is via AJAX. Build **RESTful APIs to CRUD your data entities (resources)** and perform other functionality via AJAX. In a React app, those AJAX calls should be made from "service" modules, not components.

- **Be consistent** with your code style.

- **Clearly name variables and functions** - remember, variables are usually named as nouns and functions as verbs.

- **Write well-formatted HTML/CSS/JS**. Properly formatting your code makes it more readable. Improperly formatted code infers sloppiness.

- **Comment your code where it makes sense**. Most code is self-documenting, however, comments help explain complicated code.

- If you have any questions regarding these requirements, please feel free to contact your instructional team!
