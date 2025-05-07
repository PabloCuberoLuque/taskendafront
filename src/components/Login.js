import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import {authService} from "../services/authService"; // Añade esta línea

const Login = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await authService.login(credentials);
            console.log('Login exitoso:', response);
            navigate('/dashboard');
        } catch (error) {
            setError(error.response?.data?.message || 'Error al iniciar sesión');
        }
    };

    const goToRegister = () => {
        navigate('/Register');
    };

    return (
        <div style={styles.container}>
            <form onSubmit={handleSubmit} style={styles.form}>
                <h2>Inicio Sesión</h2>
                {error && <p style={styles.error}>{error}</p>}
                
                <div style={styles.inputGroup}>
                    <label>Usuario</label>
                    <input
                        type="text"
                        name="username"
                        value={credentials.username}
                        onChange={(e) => setCredentials({
                            ...credentials,
                            username: e.target.value
                        })}
                        style={styles.input}
                        required
                    />
                </div>

                <div style={styles.inputGroup}>
                    <label>Contraseña</label>
                    <input
                        type="password"
                        name="password"
                        value={credentials.password}
                        onChange={(e) => setCredentials({
                            ...credentials,
                            password: e.target.value
                        })}
                        style={styles.input}
                        required
                    />
                </div>

                <button type="submit" style={styles.button}>
                    Iniciar Sesión
                </button>

                <button type="button" onClick={goToRegister} style={styles.button}>Registrarse</button>
            </form>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: `linear-gradient(135deg, #CDB4DB 0%, #FFB8DD 25%, #FFAFCC 50%, #BDE0FE 75%, #A2D2FF 100%)`,
    },
    form: {
        padding: '40px',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: '20px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '400px',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        textAlign: 'center',
    },
    title: {
        textAlign: 'center',
        color: '#333',
        marginBottom: '30px',
        fontSize: '2em',
        fontWeight: '600',
    },
    inputGroup: {
        marginBottom: '20px',
    },
    input: {
        width: '100%',
        padding: '15px',
        fontSize: '16px',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        border: '2px solid #BDE0FE',
        borderRadius: '12px',
        outline: 'none',
        transition: 'all 0.3s ease',
        '&:focus': {
            borderColor: '#CDB4DB',
            boxShadow: '0 0 0 3px rgba(205, 180, 219, 0.3)',
        },
        textAlign: 'center',
    },
    button: {
        width: '100%',
        padding: '15px',
        fontSize: '16px',
        fontWeight: '600',
        backgroundColor: '#FFAFCC',
        color: 'white',
        border: 'none',
        borderRadius: '12px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        marginTop: '10px',
        '&:hover': {
            backgroundColor: '#FFB8DD',
            transform: 'translateY(-2px)',
            boxShadow: '0 5px 15px rgba(255, 175, 204, 0.4)',
        },
    },
    error: {
        color: '#ff4d4d',
        textAlign: 'center',
        marginBottom: '15px',
        padding: '10px',
        backgroundColor: 'rgba(255, 77, 77, 0.1)',
        borderRadius: '8px',
        fontSize: '14px',
    }
};

export default Login;