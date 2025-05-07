import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/authService'; // Importa el servicio de autenticación

export default function ProtectedRoute({ children }) {
    const [isAuth, setIsAuth] = useState(null); // Estado para saber si el usuario está autenticado
    const navigate = useNavigate();

    useEffect(() => {
        // Usa checkAuth para verificar la autenticación
        authService.checkAuth()
            .then(() => {
                setIsAuth(true); // Si la respuesta es positiva, el usuario está autenticado
            })
            .catch(() => {
                setIsAuth(false); // Si hay error (por ejemplo, 401), el usuario no está autenticado
                navigate('/login'); // Redirige a login si no está autenticado
            });
    }, [navigate]);

    if (isAuth === null) return <p>Cargando...</p>; // Mientras se verifica, puedes mostrar un mensaje de carga

    return isAuth ? children : null; // Si está autenticado, muestra los children (la ruta protegida)
}