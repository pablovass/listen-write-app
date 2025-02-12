// src/App.tsx
import React from "react";
import AppRouter from "./routes/AppRouter";
import "./styles/reset.css"; // Resetear estilos si es necesario
import "./styles/variables.css"; // Variables globales CSS

const App: React.FC = () => {
    return <AppRouter />;
};

export default App;