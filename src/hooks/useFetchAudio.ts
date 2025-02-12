import { useState, useEffect } from "react";
import axios from "axios";

interface AudioState {
    audioUrl: string;
    error: string;
}

/**
 * Hook para cargar un audio dado su ID
 */
export const useFetchAudio = (audioId: string | null, refreshKey?: number) => {
    const [audioData, setAudioData] = useState<AudioState>({ audioUrl: "", error: "" });

    useEffect(() => {
        const loadAudio = async () => {
            if (!audioId) {
                setAudioData({ audioUrl: "", error: "No se proporcionó un ID de audio." });
                return;
            }

            try {
                const response = await axios.get(`http://127.0.0.1:5000/audio/${audioId}`, {
                    responseType: "blob",

                });
                const audioBlobUrl = URL.createObjectURL(response.data); // Creamos una URL para el archivo de audio
                console.log("Datos Audio:", audioId); // Verifica la estructura del objeto aquí
                setAudioData({
                    audioUrl: audioBlobUrl,
                    error: "",
                });
            } catch (error) {
                console.error("Error fetching audio:", error);
                setAudioData({
                    audioUrl: "",
                    error: "Error al cargar el audio. Intenta nuevamente.",
                });
            }
        };

        loadAudio();
    }, [audioId, refreshKey]); // Agregamos refreshKey como dependencia

    return audioData; // Devolvemos la URL del audio y posibles errores
};