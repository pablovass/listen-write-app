// src/api/faceApi.ts
import axios from "axios";

// Tipos de respuesta (opcional, para TypeScript)
interface FaceResponse {
    face: string;
    audioId: string;
}

interface SendResponsePayload {
    audioId: string;
    userInput: string;
}

interface SendResponseResponse {
    message: string;
}

// Función para obtener la frase y el ID de audio
export const fetchFaceAndAudio = async (): Promise<FaceResponse> => {
    const response = await axios.get("/api/random-face");
    return response.data;
};

// Función para enviar la respuesta del usuario
export const sendResponse = async (payload: SendResponsePayload): Promise<SendResponseResponse> => {
    const response = await axios.post("/api/send-response", payload);
    return response.data;
};