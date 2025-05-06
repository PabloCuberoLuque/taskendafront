// src/components/Register.js
import React, { useState } from 'react';
import axios from 'axios';

function Register() {
    const [userData, setUserData] = useState({
        username: '',
        password: '',
        email: '',
        rol_id: 1 // Rol fijo con valor 1
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/auth/register', userData);
            if (response.data) {
                setSuccess('Usuario registrado exitosamente!');
                setError('');
                // Limpiar el formulario
                setUserData({
                    username: '',
                    password: '',
                    email: '',
                    rol_id: 1
                });
            }
        } catch (error) {
            setError(error.response?.data?.message || 'Error al registrar usuario');
            setSuccess('');
            console.error('Error:', error);
        }
    };

    return (
        <div style={styles.container}>
            <form onSubmit={handleSubmit} style={styles.form}>
                <h2>Registro de Usuario</h2>
                {error && <p style={styles.error}>{error}</p>}
                {success && <p style={styles.success}>{success}</p>}

                <div style={styles.inputGroup}>
                    <label>Nombre de Usuario:</label>
                    <input
                        type="text"
                        name="username"
                        value={userData.username}
                        onChange={handleChange}
                        style={styles.input}
                        required
                    />
                </div>

                <div style={styles.inputGroup}>
                    <label>Contraseña:</label>
                    <input
                        type="password"
                        name="password"
                        value={userData.password}
                        onChange={handleChange}
                        style={styles.input}
                        required
                    />
                </div>

                <div style={styles.inputGroup}>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                        style={styles.input}
                        required
                    />
                </div>

                <button type="submit" style={styles.button}>
                    Registrarse
                </button>
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


export default Register;