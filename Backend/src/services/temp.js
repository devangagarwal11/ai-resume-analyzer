const resume = `
Devang Agarwal
Full Stack Developer

Summary:
Passionate Full Stack Developer with experience building web applications using React, Node.js, Express.js, MongoDB, and SQL databases. Strong understanding of REST APIs, authentication, state management, and modern JavaScript. Interested in AI-powered applications and scalable backend systems.

Experience:
- Built an Uber Clone using React, Node.js, Express, MongoDB, and Socket.IO.
- Developed authentication and authorization systems using JWT.
- Created responsive user interfaces with React and Tailwind CSS.
- Integrated file upload and cloud storage solutions.

Skills:
JavaScript, TypeScript, React, Redux Toolkit, Node.js, Express.js, MongoDB, MySQL, PostgreSQL, HTML, CSS, Tailwind CSS, Git, REST APIs.

Education:
Bachelor of Technology in Computer Science.
`;

const selfDescription = `
I am a motivated software developer who enjoys solving challenging problems and building products that create real-world value. I have a strong foundation in full-stack web development and continuously learn new technologies. I work well independently and in teams, communicate effectively, and take ownership of my work. My goal is to become an expert software engineer capable of designing scalable systems and leading impactful projects.
`;

const jobDescription = `
Position: Full Stack Developer

We are seeking a Full Stack Developer to join our engineering team. The ideal candidate should have experience developing modern web applications using React on the frontend and Node.js on the backend.

Responsibilities:
- Design and develop scalable web applications.
- Build RESTful APIs and integrate third-party services.
- Collaborate with product managers and designers.
- Optimize application performance and reliability.
- Write clean, maintainable, and testable code.

Requirements:
- Strong proficiency in JavaScript and TypeScript.
- Experience with React, Node.js, Express.js, and MongoDB.
- Knowledge of SQL databases and database design.
- Familiarity with Git and modern development workflows.
- Excellent problem-solving and communication skills.

Preferred:
- Experience with cloud platforms.
- Understanding of AI/LLM integrations.
- Experience with Docker and CI/CD pipelines.
`;

module.exports={resume,selfDescription,jobDescription}


// {
//   "matchScore": 88,
//   "technicalQuestions": [
//     {
//       "question": "Explain the concept of state management in React applications. How would you choose between Redux Toolkit and React Context API for a new project, and why?",
//       "intention": "To assess understanding of React state management, Redux Toolkit, and decision-making skills based on project requirements.",
//       "answer": "The candidate should discuss local vs. global state, the benefits and features of Redux Toolkit (e.g., immutable updates, middleware, dev tools), and the use cases for React Context API (simpler global state, avoiding prop drilling). The choice should be justified based on project complexity, team size, and specific state management needs."
//     },
//     {
//       "question": "Describe the architecture of a typical RESTful API built with Node.js and Express.js. How do you handle authentication and authorization in such an API?",
//       "intention": "To evaluate backend architecture knowledge, understanding of REST principles, and security implementation, especially given the candidate's mention of JWT.",
//       "answer": "The candidate should explain the roles of routes, controllers, middleware, and database interaction in an Express.js application. For authentication/authorization, they should detail JWT (token generation, verification, refresh tokens), session-based authentication, and potentially role-based access control (RBAC)."
//     },
//     {
//       "question": "You mentioned building an Uber Clone. How did you handle real-time updates for driver location and ride requests? What technologies did you use and why?",
//       "intention": "To delve into practical experience with real-time communication (Socket.IO mentioned in resume), scalability considerations, and technology choices for dynamic applications.",
//       "answer": "The candidate should explain the use of Socket.IO for bidirectional, event-driven communication. They should describe how events were emitted and listened to for location updates and ride requests, and discuss potential challenges like scaling and message broadcasting."
//     },
//     {
//       "question": "Discuss database design principles. Given a scenario where you need to store user profiles, posts, and comments, would you choose MongoDB or a SQL database (like MySQL/PostgreSQL) and why?",
//       "intention": "To assess understanding of database design, trade-offs between NoSQL and SQL, and the ability to justify technology choices based on data structure and application needs.",
//       "answer": "The candidate should discuss normalization vs. denormalization, ACID vs. BASE properties. For the scenario, they should explain when SQL (relational integrity, complex queries, structured data) or NoSQL (flexibility, scalability for specific use cases, schema-less data) would be more appropriate, considering data relationships and future growth."
//     }
//   ],
//   "behavioralQuestions": [
//     {
//       "question": "Tell me about a challenging technical problem you faced in a project and how you overcame it. What did you learn from that experience?",
//       "intention": "To assess problem-solving skills, resilience, and ability to learn from difficulties and apply those lessons.",
//       "answer": "The candidate should describe a specific technical challenge, the steps they took to diagnose and resolve it, the resources they utilized, and the ultimate outcome or lessons learned that can be applied to future work."
//     },
//     {
//       "question": "Describe a time when you had to collaborate with product managers or designers. How did you ensure effective communication and successful delivery of the feature?",
//       "intention": "To evaluate collaboration skills, communication effectiveness, and ability to work in a cross-functional team, which is a key responsibility.",
//       "answer": "The candidate should provide an example of cross-functional collaboration, highlighting their communication strategies (e.g., active listening, clear explanations, regular updates), how they managed expectations, and how their contributions led to the successful delivery of a feature."
//     },
//     {
//       "question": "You mentioned an interest in AI-powered applications. How do you stay updated with new technologies and trends in the industry, especially in areas you're interested in but might not have direct experience with yet?",
//       "intention": "To gauge curiosity, self-learning ability, and passion for technology, aligning with the 'continuously learn new technologies' statement in their self-description.",
//       "answer": "The candidate should describe their methods for continuous learning, such as reading blogs, taking online courses, working on personal projects, attending webinars/conferences, or participating in developer communities. They should demonstrate a proactive approach to expanding their skill set."
//     }
//   ],
//   "skillGaps": [
//     {
//       "skill": "Cloud platforms (AWS/Azure/GCP)",
//       "severity": "medium"
//     },
//     {
//       "skill": "Docker",
//       "severity": "medium"
//     },
//     {
//       "skill": "CI/CD pipelines",
//       "severity": "medium"
//     },
//     {
//       "skill": "AI/LLM integrations (practical experience)",
//       "severity": "low"
//     },
//     {
//       "skill": "Testing frameworks/methodologies (e.g., Jest, React Testing Library)",
//       "severity": "medium"
//     }
//   ],
//   "preparationPlan": [
//     {
//       "day": 1,
//       "focus": "Core Full Stack Review & React Deep Dive",
//       "tasks": [
//         "Review advanced React concepts: hooks, context API, performance optimization (memoization, lazy loading).",
//         "Practice Redux Toolkit best practices, asynchronous actions with Redux Thunk/Saga.",
//         "Solve 2-3 medium-difficulty LeetCode problems focusing on data structures and algorithms."
//       ]
//     },
//     {
//       "day": 2,
//       "focus": "Backend & Database Mastery",
//       "tasks": [
//         "Deep dive into Node.js event loop, error handling, and security best practices in Express.js.",
//         "Review advanced SQL queries, indexing, and database optimization techniques for MySQL/PostgreSQL.",
//         "Explore MongoDB aggregation framework and schema design for scalability."
//       ]
//     },
//     {
//       "day": 3,
//       "focus": "System Design & Modern DevOps Concepts",
//       "tasks": [
//         "Research fundamental concepts of a major cloud platform (e.g., AWS EC2, S3, Lambda, RDS).",
//         "Understand Docker basics: containers, images, Dockerfile, Docker Compose.",
//         "Learn about CI/CD principles and common tools (e.g., GitHub Actions, Jenkins) for automated deployments.",
//         "Practice a simple system design problem, focusing on scalability and reliability."
//       ]
//     }
//   ],
//   "title": "Full Stack Developer"
// }