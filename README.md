# 🚀 AI-Powered Resume Analyzer & ATS Optimizer

## 📖 Project Description

Navigating the modern job market requires highly targeted, ATS-friendly applications. This project is a comprehensive, full-stack web application designed to simulate a real-world SaaS product. It empowers job seekers to optimize their resumes for specific roles, ensuring they get past automated filters and into the hands of recruiters.

The core objective of this application is to bridge the gap between a candidate's existing experience and the exact requirements of a target job description (JD). By uploading their current resume and pasting a target JD, users initiate an advanced, AI-driven analysis pipeline. 

The system parses the document and cross-references it with the job requirements. It intelligently identifies missing keywords, highlights critical skill gaps, and provides actionable insights to improve the candidate's match rate. Going beyond simple keyword matching, the application leverages artificial intelligence to predict highly probable technical and behavioral interview questions based on the specific intersections of the user's resume and the job description.

Finally, the application synthesizes this optimized data to construct a newly formatted, highly readable HTML resume template. It then automatically renders and exports this document as a pristine, machine-readable PDF guaranteed to parse cleanly through standard Applicant Tracking Systems (ATS).

---

## 🛠️ Detailed Technology Stack

### Frontend Architecture
* **React.js:** The user interface is built as a dynamic Single Page Application (SPA) using React.js. This ensures a highly responsive, seamless user experience without page reloads. The component-based architecture handles complex client-side states, such as file uploads, loading indicators during AI processing, and real-time visualization of skill gaps and generated interview questions.

### Backend Infrastructure
* **Node.js:** Serves as the robust backend runtime environment, chosen for its asynchronous, non-blocking I/O model. This makes it highly efficient for handling concurrent API requests, document parsing, and file stream operations.
* **Express.js:** The lightweight web framework layered on top of Node.js. It manages all RESTful API routing, middleware integration, secure file upload handling, and orchestrates the communication between the frontend, the AI processing layer, and the PDF generation service.

### Security & Authentication
* **JSON Web Tokens (JWT):** Utilized for secure, stateless user authentication. Upon registration or login, users receive a cryptographically signed token that verifies their identity for subsequent API requests, ensuring that personal resume data remains strictly confidential and isolated.
* **Token Blacklisting:** Implemented to provide enterprise-grade security and true session termination. When a user securely logs out, their active JWT is immediately added to a blacklist server-side. This invalidates the token prior to its natural expiration, preventing unauthorized reuse or replay attacks.

### Artificial Intelligence Integration
* **Gemini API:** The cognitive engine of the application. The Node.js backend securely interfaces with Google's Gemini API to perform advanced Natural Language Processing (NLP). Gemini is responsible for deeply understanding the context of the user's experience, extracting required competencies from the job description, calculating the exact skill gap, and dynamically generating relevant, role-specific interview questions.

### Document Generation
* **Puppeteer:** A powerful Node.js library providing a high-level API to control headless Chrome or Chromium. Once the AI and backend have mapped the optimized resume data into a polished HTML structure, Puppeteer spins up a headless browser instance in the background. It renders the HTML with pixel-perfect CSS styling and safely exports the final result as a clean, text-selectable, and ATS-friendly PDF document.