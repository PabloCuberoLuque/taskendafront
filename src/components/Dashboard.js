import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from "../services/authService";

const Dashboard = () => {
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            console.log('Iniciando proceso de logout...');
            await authService.logout();
            console.log('Logout exitoso.');
            navigate('/login');
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
        }
    };


    return (
        <button onClick={handleLogout} style={styles.logoutButton}>
            🚪 Cerrar Sesión
        </button>
    );
};

const styles = {
    logoutButton: {
        padding: '12px 24px',
        backgroundColor: '#f8f9fa',
        color: '#666',
        border: '1px solid #E0E0E0',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: '500',
        transition: 'all 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
    },
    logoutButtonHover: {
        backgroundColor: '#e9ecef',
        color: '#FF6B6B',
    },
};



export default Dashboard;
