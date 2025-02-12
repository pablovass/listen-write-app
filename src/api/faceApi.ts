// src/api/faceApi.ts
import axios from "axios";

// Tipos de respuesta (opcional, para TypeScript)

interface SendResponsePayload {
    audioId: string;
    userInput: string;
}

interface SendResponseResponse {
    message: string;
}

// Función para obtener la frase y el ID de audio
export const fetchFaceAndAudio = async (): Promise<{ texto: string; audio: string }> => {
    const response = await axios.get("http://127.0.0.1:5000/frases/random");
    const { texto, audio } = response.data; // Extraemos `texto` y `audio`
    if (!texto || !audio) {
        throw new Error("Faltan datos en la respuesta del servidor");
    }
    return { texto, audio }; // Retornar frase y referencia al audio
};
export const fetchAudioFile = async (audioPath: string): Promise<string> => {
    const audioUrl = `http://127.0.0.1:5000/audio/${audioPath}`; // Formamos la URL correcta
    return audioUrl; // Asumimos que solo necesitas devolver la URL para usarla directamente en un reproductor de audio
};


// Función para enviar la respuesta del usuario
export const sendResponse = async (payload: SendResponsePayload): Promise<SendResponseResponse> => {
    const response = await axios.post("/api/send-response", payload);
    return response.data;
};