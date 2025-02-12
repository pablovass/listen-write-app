import React, { useState } from "react";
import { useFetchAudio } from "../../hooks/useFetchAudio";
import useFace from "../../hooks/useFace";
import { useVerifyPhrase } from "../../hooks/useVerifyPhrase"; // Importamos el hook para verificar
import Button from "../../components/Button/Button"; // Si decides usar el componente personalizado
import Input from "../../components/Input/Input";

const Home: React.FC = () => {
    const [refreshKey, setRefreshKey] = useState(0); // Key para forzar la recarga de datos
    const faceData = useFace(refreshKey); // Cargar nueva palabra y datos del audio
    const { audioUrl, error: audioError } = useFetchAudio(faceData?.audioId || null); // Audio dinámico
    const { verifyPhrase, result, error: verifyError, loading } = useVerifyPhrase();

    const [userInput, setUserInput] = useState<string>("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput(event.target.value);
    };

    const handleSubmit = async () => {
        if (!faceData || !faceData.id) return;
        await verifyPhrase(Number(faceData.id), userInput);
    };

    const handleNewPhrase = () => {
        setRefreshKey((prevKey) => prevKey + 1); // Cambiar refreshKey para obtener nuevos datos
        setUserInput(""); // Limpiar el input del usuario
    };

    if (!faceData) {
        return <p>Cargando datos...</p>; // Muestra un estado de carga mientras se obtiene la frase
    }

    return (
        <div className="home">
            <h1>Escucha y Escribe</h1>

            {/* Mostrar el reproductor de audio */}
            {audioError ? (
                <p className="error">{audioError}</p>
            ) : (
                audioUrl && (
                    <audio key={audioUrl}
                           controls>
                        <source src={audioUrl} type="audio/mpeg" />
                        Tu navegador no soporta el elemento de audio.
                    </audio>
                )
            )}

            {/* Mostrar la frase */}
            <p>{faceData.face}</p>

            {/* Input para ingresar texto */}
            <div className="input-container">
                <Input
                    value={userInput}
                    onChange={handleInputChange}
                    placeholder="Escribe aquí..."
                />
                <Button onClick={handleSubmit} disabled={loading}>
                    {loading ? "Verificando..." : "Enviar"}
                </Button>
            </div>

            {/* Botón para cambiar de palabra */}
            <div style={{ marginTop: "20px" }}>
                <Button onClick={handleNewPhrase}>
                    Otra Palabra
                </Button>
            </div>

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