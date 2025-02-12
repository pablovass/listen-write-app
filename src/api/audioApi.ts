// src/api/audioApi.ts
export const fetchAudioFile = async (audioPath: string): Promise<string> => {
    const audioUrl = `http://127.0.0.1:5000/audio/${audioPath}`; // Formamos la URL completa del endpoint
    return audioUrl; // Retornamos la URL para usar directamente en el reproductor de audio
};