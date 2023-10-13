# Open Peaks V2

## [Project Link](https://openpeaks.onrender.com/auth)

---

### [Backend Repo](https://github.com/m-soro/Project_3_backend)

### [Frontend Repo](https://github.com/m-soro/Project_03)

### ~~[Frontend Repo](https://github.com/m-soro/Project_3_frontend)~~

### [Trello Board](https://trello.com/b/xQLtnoxs/project3)

---

Open Peaks V2 is a single page, full stack MERN application that lets you check and compare skiing and snowboarding destinations around the world.
My third and capstone project for Per Scholas Software Engineering Track.

This app is the extended version of my [second project](https://github.com/m-soro/Project_2), where users can create an account, save their favorite destinations in a list where my front end calls an API to show relevant data.

### Plan/Build

1. Started this project with **user authentication** - this took the most time.

   - Consists of two routes: logIn and Register
   - I also took this time to build utilities/data.js, this will supply additional data to Ski resorts API in the frontend.

---

2. **Set up backend**

- **Set up server** - ensuring successful connection with MongoDB

  - I followed **suggested practices in Module 3**
  - Entry point for backend is src/index.js -> database configurations and routes

- **Set up Schemas** - (1) User (2) Resorts

  - **User has 3 properties**:
    - username - unique
    - password
    - savedMountains - an array of type mongoose type ObjectID, that points to **mountains collection**.
  - **Resorts has 3 properties**:
    - listName
    - moutains - an array of resorts
    - userOwner - an array of type mongoose type ObjectID, that points to **users collection**.
  - **Export** these models to users and mountain routes

- **Set up Routes** - (1) User (2) Mountain
  - Used express.Router() organize the routes
  - Looked into past assignments and labs about RESTFUL routes/INDUCES
  - I used **Postman** to test all of the routes

---

3. **Set up frontend**

- Used **best practices learned in Module 2**
- Entry point is _src/App.js_
  - Used BrowserRouter to create route paths, used useGetUserName custom hook to pass in the userName currently logged in.
- **Components and Pages**:
  - Auth.js page has Log in and Register components inside.
  - Auth.js routes is tested first in Postman to verify that it is working.
  - In CreateData.js I used **Material UI's** form select component to restrict what the user can enter. This is because the Ski Resort API is only restricted to 148 ski resorts.
  - I then wired this form to the create route in the backend.
  - Home.js is the **index** page, Dashboard.jsx is the **show** page.
  - I used _material ui_ to have an image gallery in Home.js.
  - **useLocation** is used to pass in state to the **next in line** component when a Link element is clicked. From Home.js --> Dashboard.js.
  - In Dashboard.js, I used my _utilities/data.js_ to supplement the data coming from the API. This component is the **show** page where users can see each results of their selected resorts in one group. My main idea here is to build a data dashboard.

### User Stories

- As a user I can:
  - Sign up
  - Log in and Log out
  - Create a list
  - View a list in detail
  - Edit list name
  - Delete a list

### Challenges

- I spent a lot of time with the user Authentication
- Passing in data from component to another. Attempted to useContext to hold data but, instead found useLocation() to be able to solve this.
- Create and Update is tricky. Due to the fact the the API is restricted to 148 Resorts. I did not want the user to just type in what they wanted to track. It must be pre-populated so the API doesn't throw an error.
- I can re-create another another select input in Edit route but I didnt have enough time. To meet the Full CRUD requirement, users can edit the name of their list.
- My original plan is to create a data dahsboard, with stats and conditions arranged in a grid using frameworks such as material ui, but I didnt had enough time and I have more pressing priorities.
- Another challenge is to get the result of the promise of the API, then store the result in useState. I used useEffect and useState like this -> `functionThatRetursAPromise().then((res) => setData(res))`.
- I try catch block to solve the issue of React re-rendering and sometimes API call returns null.
- Another challenge, was the result of the API call, its an object nested inside an object inside another object. I used object destructuring to extract layers of data inside the object that is returned by the API.

### Design

- **Design was minimal and clean. I didn't have enough time to spend in styling**.

### Technologies Used

- MongoDB
- Express
- React
- NodeJs
- JavaScript
- Axios
- Pico.css
- Material UI
- Atom code editor
- VS code
- Nelify - frontend deployment
- Render - backend deployment

### Limitations and Known Issues

- ~~The supplemental data in utilities/data.js is inconsitent. I plan to correct this as soon as possible.~~
- Due to time constrainsts, User is only restricted in editing the name of their list.
- Re factoring is needed to DRY up the code.
- There is no catch all route.

### Future Plans

- Style it
- Maybe add a "re-order" cards or list feature so that your top priority list is on top.
- Maybe a community page, where logged in users can leave a comment, buy and sell gears, and interact with each other.

### Acknowledgements

- The Amazing instructors at Per Scholas: Tishana, Manara and Kasper.
- All the help that Manara provided.
- YouTube

---

# CAPSTONE PROJECT REQUIREMENTS:

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
