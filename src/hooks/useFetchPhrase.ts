import { useState, useEffect } from "react";

interface PhraseState {
    id: number;
    texto: string;
    audio: string;
    nivel: string;
    tags: string[];
    error: string;
}

export const useFetchPhrase = () => {
    const [data, setData] = useState<PhraseState | null>(null);

    useEffect(() => {
        const fetchPhrase = async () => {
            try {
                console.log("Iniciando fetch...");
                const response = await fetch("http://127.0.0.1:5000/frases/random");

                console.log("Respuesta recibida:", response);

                if (!response.ok) {
                    console.error("Error HTTP:", response.status, response.statusText);
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const result = await response.json();
                console.log("Datos recibidos:", result); // <--- Verifica aquí

                // Resto del código...
            } catch (err) {
                console.error("Error al obtener la frase:", err);
                setData({
                    id: 0,
                    texto: "",
                    audio: "",
                    nivel: "",
                    tags: [],
                    error: "Error al cargar los datos. Intenta nuevamente.",
                });
            }
        };

        fetchPhrase();
    }, []);

    return data;
};