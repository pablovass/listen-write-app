import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
    onClick: () => void; // Acción al hacer clic
    children: React.ReactNode; // Contenido del botón
    disabled?: boolean; // Propiedad opcional para deshabilitar el botón
}

const Button: React.FC<ButtonProps> = ({ onClick, children, disabled }) => {
    return (

        <button
            className={styles.button}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};


export default Button;