import React from 'react';

const Dashboard = () => {
    return (
        <div style={styles.container}>
            <div style={styles.sidebar}>
                <div style={styles.logo}>
                    <h2>Taskenda</h2>
                </div>
                <nav style={styles.nav}>
                    <button style={styles.navItem}>📅 Calendario</button>
                    <button style={styles.navItem}>✓ Tareas</button>
                    <button style={styles.navItem}>📌 Importante</button>
                    <button style={styles.navItem}>📋 Proyectos</button>
                    <button style={styles.navItem}>🎯 Objetivos</button>
                </nav>
            </div>
            <div style={styles.mainContent}>
                <div style={styles.header}>
                    <div style={styles.searchBar}>
                        <input
                            type="text"
                            placeholder="Buscar tareas..."
                            style={styles.searchInput}
                        />
                    </div>
                    <div style={styles.userSection}>
                        <button style={styles.addButton}>+ Nueva Tarea</button>
                    </div>
                </div>
                <div style={styles.calendarSection}>
                    <div style={styles.welcomeSection}>
                        <div style={styles.welcomeText}>
                            <h1>Buenos días</h1>
                            <p>Organiza tu día y alcanza tus metas</p>
                        </div>
                        <img
                            src="https://todoist.com/_next/static/images/header@2x_1b6cd0af12b3f8fe05d84960f8232db3.webp"
                            alt="Ilustración de productividad"
                            style={styles.welcomeImage}
                        />
                    </div>
                    <div style={styles.calendar}>
                        {/* Aquí iría el componente del calendario */}
                    </div>
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        height: '100vh',
        backgroundColor: '#ffffff',
    },
    sidebar: {
        width: '250px',
        backgroundColor: 'rgba(205, 180, 219, 0.1)', // #CDB4DB con transparencia
        padding: '20px',
        borderRight: '1px solid rgba(189, 224, 254, 0.3)', // #BDE0FE con transparencia
    },
    logo: {
        marginBottom: '30px',
        color: '#FFAFCC',
        textAlign: 'center',
    },
    nav: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    },
    navItem: {
        padding: '12px 15px',
        borderRadius: '8px',
        border: 'none',
        backgroundColor: 'transparent',
        textAlign: 'left',
        fontSize: '16px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        color: '#333',
        '&:hover': {
            backgroundColor: 'rgba(255, 175, 204, 0.1)', // #FFAFCC con transparencia
        },
    },
    mainContent: {
        flex: 1,
        padding: '20px',
        backgroundColor: '#ffffff',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '30px',
    },
    searchBar: {
        flex: '1',
        maxWidth: '500px',
    },
    searchInput: {
        width: '100%',
        padding: '12px 20px',
        borderRadius: '8px',
        border: '2px solid #BDE0FE',
        fontSize: '16px',
        outline: 'none',
        transition: 'all 0.3s ease',
        '&:focus': {
            borderColor: '#FFAFCC',
            boxShadow: '0 0 0 3px rgba(255, 175, 204, 0.1)',
        },
    },
    userSection: {
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
    },
    addButton: {
        padding: '12px 24px',
        backgroundColor: '#FFAFCC',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: '500',
        transition: 'all 0.3s ease',
        '&:hover': {
            backgroundColor: '#FFB8DD',
            transform: 'translateY(-2px)',
        },
    },
    welcomeSection: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '40px',
        backgroundColor: 'rgba(189, 224, 254, 0.1)', // #BDE0FE con transparencia
        borderRadius: '20px',
        marginBottom: '30px',
    },
    welcomeText: {
        flex: 1,
    },
    welcomeImage: {
        maxWidth: '300px',
        height: 'auto',
        borderRadius: '10px',
    },
    calendarSection: {
        padding: '20px',
        backgroundColor: '#ffffff',
        borderRadius: '20px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    },
};

export default Dashboard;
