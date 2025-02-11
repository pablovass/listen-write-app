
# **React SPA: Listen and Write**

This project is a Single Page Application (SPA) built with **React** and **TypeScript**. It allows users to load a random phrase from an API endpoint, play an audio file related to that phrase, and submit a written response to receive feedback.

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
- Allow users to write and submit their input via a text box.
- Send the user response to the API and display feedback.
- Modular and scalable architecture, ready for extending to multiple endpoints or new features.

---

## **Project Structure**

This project follows a modular and scalable folder structure for better maintainability and simplicity:

```
src/
├── api/                         # Modules for interacting with backend endpoints
│   ├── faceApi.ts               # Logic for fetching phrases and audio
│   └── index.ts                 # Centralized export for all API services
├── components/                  # Reusable components
│   ├── Button/                  # Generic reusable button
│   ├── Input/                   # Reusable text input
│   └── ...                      # Other reusable components
├── context/                     # React context for global states
├── hooks/                       # Custom React hooks
│   ├── useFace.ts               # Hook to handle phrase and audio logic
│   └── ...                      # Other custom hooks
├── pages/                       # Application's main pages
│   ├── Home/                    # Main page (Listen and Write)
│   ├── NotFound/                # Handles invalid routes
│   └── ...
├── routes/                      # Router configuration
│   └── AppRouter.tsx            # Defines application's routes
├── services/                    # Reusable functionalities/utils, such as validation
├── styles/                      # Global styles and variables
│   ├── reset.css                # CSS reset
│   ├── variables.css            # Global CSS variables
│   └── ...
├── types/                       # Global TypeScript type definitions
│   ├── face.types.ts            # Type definitions for face/audio responses
│   └── api.types.ts             # Type definitions for API responses
├── App.tsx                      # Application's main entry point
├── index.tsx                    # React application startup
└── vite-env.d.ts                # Vite-specific TypeScript types
```

### **Folder Structure Explanation**

- **`api/`**: Contains services for interacting with external APIs. Centralizes backend communication logic.
- **`components/`**: Includes reusable components like buttons and inputs to encourage code reuse.
- **`hooks/`**: Custom hooks that abstract specific logic, such as fetching data or managing state.
- **`pages/`**: Main pages of the application. Each page has its own directory with related components and styles.
- **`routes/`**: Files configuring the application's routes using `react-router-dom`.
- **`styles/`**: Contains global styles, such as CSS reset and variables (e.g., colors, typography, etc.).
- **`types/`**: Defines reusable and strongly-typed TypeScript interfaces for API responses or other structures.

---

## **Requirements**

To run this project, ensure you have the following tools installed:

- **Node.js** (v16 or above)
- **npm** or **yarn** package manager
- **Vite** for a fast development environment

---

## **Installation and Setup**

Follow these steps to set up the project locally:

1. Clone this repository:
```shell script
git clone https://github.com/your-username/your-repo.git
   cd your-repo
```

2. Install project dependencies:
```shell script
npm install
```

3. Configure the environment:
   If necessary, create an `.env` file to set up environment variables such as API endpoints:
```
VITE_API_URL=http://your-api-url/api
```

---

## **Running the Project**

To run the project in development mode, execute:

```shell script
npm run dev
```

The application will be available at [http://localhost:5173](http://localhost:5173).

### Available Scripts

- **Build the project for production**:
```shell script
npm run build
```

- **Preview the production build**:
```shell script
npm run preview
```

---

## **Technologies Used**

This project leverages the following technologies and tools:

- **React**: To build the user interface.
- **TypeScript**: For static typing and improved code reliability.
- **Vite**: As a fast and efficient build and development tool.
- **CSS Modules**: For scoping styles to individual components.
- **Axios**: To handle API requests.
- **React Router**: For dynamic routing.
- **ESLint and Prettier**: For maintaining clean and consistent code.

---

## **Contributing**

Contributions are welcome! If you'd like to contribute, follow these steps:

1. Fork this repository.
2. Create a branch for your new feature or bug fix:
```shell script
git checkout -b feature/your-new-feature
```
3. Implement your changes and commit them.
4. Submit a pull request for review.

---

## **License**

This project is licensed under the **MIT License**. See the `LICENSE` file for more details.

