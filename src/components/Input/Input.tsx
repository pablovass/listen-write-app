import React from "react";
import styles from "./Input.module.css";

interface InputProps {
    value: string;
    placeholder?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ value, placeholder = "", onChange }) => {
    return (
        <input
            className={styles.input}
            type="text"
            value={value}
            placeholder={placeholder}
            onChange={onChange}
        />
    );
};

export default Input;