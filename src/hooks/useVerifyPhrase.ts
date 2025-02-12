import { useState } from "react";
import axiosInstance from "../api/axiosInstance"; // Importa la instancia personalizada

// Define la interfaz para el resultado esperado
interface VerifyResult {
    mensaje: string;
    texto_original: string;
    texto_usuario: string;
    detalles: {
        palabra: string;
        correcta: boolean;
    }[];
}

export const useVerifyPhrase = () => {
    // Aplica el tipo VerifyResult al estado
    const [result, setResult] = useState<VerifyResult | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const verifyPhrase = async (id: number, texto: string) => {
        setLoading(true);
        setError(null);
        setResult(null);

        try {
            const response = await axiosInstance.post<VerifyResult>("/frases/verificar", { id, texto }); // Especifica el tipo esperado para la respuesta
            setResult(response.data);
            console.log("Respuesta del servidor (hook):", response.data);
        } catch (err: any) {
            console.error("Error de Axios (hook):", err.response || err);
            setError("No se pudo verificar la frase. Intenta nuevamente.");
        } finally {
            setLoading(false);
        }
    };

    return { verifyPhrase, result, error, loading };
};