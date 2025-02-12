import axios from "axios";

// Crear una instancia de Axios
const axiosInstance = axios.create({
    baseURL: "http://127.0.0.1:5000", // URL base de tu API
    timeout: 5000, // Tiempo límite de respuesta (opcional)
    headers: {
        "Content-Type": "application/json", // Tipo de contenido por defecto
    },
});

// Agregar un interceptor de peticiones para capturar los datos enviados
axiosInstance.interceptors.request.use(
    (config) => {
        console.log("Request enviada:", config); // Aquí puedes ver los datos enviados
        return config; // Retorna la config para continuar con la solicitud
    },
    (error) => {
        console.error("Error en el interceptor de request:", error);
        return Promise.reject(error); // Rechaza la promesa si hay un error
    }
);

// Agregar un interceptor de respuestas para ver la respuesta del servidor
axiosInstance.interceptors.response.use(
    (response) => {
        console.log("Respuesta recibida:", response); // Aquí puedes ver la respuesta
        return response; // Retorna la respuesta para manejarla en el cliente
    },
    (error) => {
        console.error("Error en la respuesta:", error.response || error);
        return Promise.reject(error); // Rechaza la promesa si hay un error en la respuesta
    }
);

export default axiosInstance;