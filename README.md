

# **React SPA: Listen and Write**

This project is a Single Page Application (SPA) built with **React** and **TypeScript**. It allows users to load a random phrase from an API endpoint, play an audio file associated with that phrase, and submit a written response to compare their input against the original phrase, receiving detailed feedback.

---

## **Table of Contents**

- [Features](#features)
- [Project Structure](#project-structure)
- [Requirements](#requirements)
- [Installation and Setup](#installation-and-setup)
- [Running the Project](#running-the-project)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

---

## **Features**

- Display a random phrase retrieved from an API.
- Play an audio file associated with the displayed phrase.
- Accept user input via a text box.
- Send user responses to the backend API for phrase verification.
- Provide detailed feedback on user-submitted input, including error detection and word-by-word correctness.
- Modular and scalable architecture, ensuring efficient feature extensions.

---

## **Project Structure**

The project is organized into a modular and scalable folder structure to ensure maintainability:
```
src/
├── api/                         # API interaction logic
│   ├── axiosInstance.ts         # Configured Axios instance with interceptors
│   ├── faceApi.ts               # Logic for fetching phrases and related audio
├── components/                  # Reusable UI components
│   ├── Button/                  # Button component with styles
│   ├── Input/                   # Text input field component
├── context/                     # React Context for global state management
├── hooks/                       # Custom React hooks
│   ├── useFetchAudio.ts         # Fetch audio by ID
│   ├── useVerifyPhrase.ts       # Phrase verification logic
│   ├── useFetchPhrase.ts        # Fetch random phrases
│   ├── useFace.ts               # Hook combining phrase & audio retrieval
├── pages/                       # Main application pages
│   ├── Home/                    # Main page (Listen and Write)
│   ├── NotFound/                # Fallback route for invalid paths
├── routes/                      # Router configurations using react-router-dom
│   └── AppRouter.tsx            # Main application routes
├── services/                    # Helpers and utilities for logic/validation
├── styles/                      # Global and modular CSS styles
│   ├── reset.css                # CSS reset for consistent styling
│   ├── variables.css            # Global variables for theming
├── types/                       # TypeScript type definitions
│   ├── face.types.ts            # Data structures for phrases and audio
│   ├── api.types.ts             # API response schemas
├── App.tsx                      # Application root component
├── index.tsx                    # Entry point for React rendering
└── vite-env.d.ts                # Vite-specific TypeScript type definitions
```
### **Key Highlights of Structure**

- **`api/`**: Centralized services for interacting with APIs. Includes the Axios instance, request configuration, and backend endpoints.
- **`components/`**: Modular and reusable interface components like `Button` and `Input` for improved UI consistency.
- **`hooks/`**: Custom React hooks for encapsulating API calls, data fetching, and state management.
- **`pages/`**: Houses the main pages of the app. Each folder contains components, hooks, and styles relevant to that page.
- **`routes/`**: Contains route configurations using `react-router-dom` for seamless navigation across pages.
- **`styles/`**: Includes global styles such as resets and reusable CSS variables.
- **`types/`**: Strong TypeScript typings ensure type safety across API responses and application state.

---

## **Requirements**

To run this project, make sure the following tools are installed:

- [Node.js](https://nodejs.org/) (version 16 or above)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) (dependency management)
- [Vite](https://vitejs.dev/) (lightweight development environment)

---

## **Installation and Setup**

Follow these steps to set up the application locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/<your-repository>.git
   cd <your-repository>
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Access the application in your browser at:
   ```
   http://localhost:5173
   ```

---

## **Running the Project**

Ensure the backend API is running locally before starting the application. You can modify the `baseURL` in `src/api/axiosInstance.ts` if necessary:

```typescript
const axiosInstance = axios.create({
    baseURL: "http://127.0.0.1:5000",
    timeout: 5000,
    headers: {
        "Content-Type": "application/json"
    },
});
```

To start the application:

1. Build the project locally:
   ```bash
   npm run dev
   ```

2. Open the application in your browser using the specified local server URL.

---

## **Technologies Used**

- **React**: Component-based UI framework.
- **TypeScript**: Strongly-typed programming for safer code.
- **Vite**: Development environment for fast builds and live reload.
- **Axios**: Simplified HTTP requests with built-in interceptors.
- **CSS Modules**: Scoped styling for components.

Additional tools include:

- **React Router** for route management.
- **Custom Hooks** for modular logic.
- **ESLint** for maintaining code quality.

---

## **Contributing**

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/<feature-name>
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add <feature-name>"
   ```
4. Push the branch:
   ```bash
   git push origin feature/<feature-name>
   ```

5. Open a pull request.

---

## **License**

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```

### **What Changed?**
- Updated and cleaned up phrases for clarity.
- Assured all relevant files (hooks, API logic, and folder structure) are described.
- Detailed the technologies and tools with concise explanations.
- Polished sections for setup, running, and contributing. 

Feel free to use or adapt this for your project! 😊
