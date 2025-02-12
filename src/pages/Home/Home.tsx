import React, { useState } from "react";
import { useFetchAudio } from "../../hooks/useFetchAudio";
import useFace from "../../hooks/useFace";
import { useVerifyPhrase } from "../../hooks/useVerifyPhrase"; // Importamos el hook para verificar
import Button from "../../components/Button/Button"; // Si decides usar el componente personalizado
import Input from "../../components/Input/Input";

const Home: React.FC = () => {
    const faceData = useFace(); // Obtenemos el ID y la frase desde el endpoint /frases/random
    const { audioUrl, error: audioError } = useFetchAudio(faceData?.audioId || null); // Cargamos el audio correspondiente
    const { verifyPhrase, result, error: verifyError, loading } = useVerifyPhrase(); // Para verificar

    const [userInput, setUserInput] = useState<string>(""); // Entrada del usuario

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput(event.target.value);
    };

    const handleSubmit = async () => {
        if (!faceData || !faceData.audioId) return; // Verificamos que hay datos válidos

        // Enviamos el texto y el ID al servidor (conversión a número si es necesario)
        await verifyPhrase(Number(faceData.audioId), userInput);
    };

    if (!faceData) {
        return <p>Cargando frase...</p>;
    }

    return (
        <div className="home">
            <h1>Escucha y Escribe</h1>

            {/* Mostramos el reproductor de audio */}
            {audioError ? (
                <p className="error">{audioError}</p>
            ) : (
                audioUrl && (
                    <audio controls>
                        <source src={audioUrl} type="audio/mpeg" />
                        Tu navegador no soporta el elemento de audio.
                    </audio>
                )
            )}

            {/* Mostramos la frase */}
            <p>{faceData.face}</p>

            {/* Input para que el usuario escriba su frase */}
            <Input
                value={userInput}
                placeholder="Escribe aquí..."
                onChange={handleInputChange}
            />

            {/* Botón enviar */}
            <Button onClick={handleSubmit} disabled={loading}>
                {loading ? "Verificando..." : "Enviar"}
            </Button>

            {/* Mostrar errores o respuestas */}
            {verifyError && <p className="error">{verifyError}</p>}
            {result && (
                <div className="result">
                    <h2>Resultado:</h2>
                    <p><strong>Mensaje:</strong> {result.mensaje}</p>
                    <p><strong>Original:</strong> {result.texto_original}</p>
                    <p><strong>Tu texto:</strong> {result.texto_usuario}</p>
                    <ul>
                        {result.detalles.map((detalle, index) => (
                            <li key={index}>
                                <strong>{detalle.palabra}:</strong>{" "}
                                {detalle.correcta ? "Correcta" : "Incorrecta"}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Home;