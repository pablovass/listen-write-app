import { useState, useEffect } from "react";
import axios from "axios";

interface AudioState {
    audioUrl: string;
    error: string;
}

export const useFetchAudio = (audioId: string | null) => {
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
    }, [audioId]); // `audioId` es ahora un parámetro dinámico

    return audioData; // Devolvemos la URL del audio y posibles errores
};