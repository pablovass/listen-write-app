// src/hooks/useFace.ts
import { useState, useEffect } from "react";
import axios from "axios";

export const fetchFaceAndAudio = async (): Promise<{ face: string; audioId: string; id: number }> => {
    const response = await axios.get("http://127.0.0.1:5000/frases/random");
    const { texto: face, audio: audioId , id:idN } = response.data; // Mapeamos las claves del JSON a las propiedades esperadas
    return { face, audioId, id: idN }; // Devolvemos un objeto con `face`, `audioId`, y `id`
};

const useFace = () => {
    const [faceData, setFaceData] = useState<{ face: string; audioId: string ; id:number } | null>(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await fetchFaceAndAudio();
                setFaceData(data);
            } catch (error) {
                console.error("Error fetching face data:", error);
            }
        };
        loadData();
    }, []);

    return faceData;
};

export default useFace;