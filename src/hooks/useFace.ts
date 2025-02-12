// useFace.ts
import { useState, useEffect } from "react";
import { fetchFaceAndAudio } from "./fetchFaceAndAudio"; // Reutilizamos el helper que creaste


const useFace = (refreshKey: number): { face: string; audioId: string; id: number } | null => {
    const [faceData, setFaceData] = useState<{ face: string; audioId: string; id: number } | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchFaceAndAudio(); // Llama al helper que ya formatea los datos
                setFaceData(data); // Guardamos los datos en el estado
            } catch (error) {
                console.error("Error fetching face data:", error);
            }
        };

        fetchData();
    }, [refreshKey]); // Reintentamos al cambiar refreshKey

    return faceData;
};

export default useFace;