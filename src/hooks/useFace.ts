// src/hooks/useFace.ts
import { useState, useEffect } from "react";
import { fetchFaceAndAudio } from "../api/faceApi";

const useFace = () => {
    const [faceData, setFaceData] = useState<{ face: string; audioId: string } | null>(null);

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