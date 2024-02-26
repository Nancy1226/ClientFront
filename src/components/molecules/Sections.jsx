import React, { useState } from 'react';
import GroupLink from "./GroupLink";
import Login from '../../pages/Login';
import Register from '../../pages/Register';

function Sections() {
    const [isSignUp, setIsSignUp] = useState(false);

    const toggleForm = () => {
        setIsSignUp(!isSignUp);
    };

    return (
        <>
            <div className={`container ${isSignUp ? 'active' : ''}`}>
                {isSignUp ? <Register toggleForm={toggleForm} /> : <Login toggleForm={toggleForm} />}
            </div>
            <div className="toggle-container">
                <div className="toggle">
                    <div className={`toggle-panel ${isSignUp ? 'toggle-right' : 'toggle-left'}`}>
                        <h1>{isSignUp ? 'Hola, Amigo!' : 'Bienvenido de nuevo!'}</h1>
                        <p>{isSignUp ? 'Regístrese con sus datos personales para utilizar todas las funciones del sitio' : 'Ingrese sus datos personales para utilizar todas las funciones del sitio'}</p>
                        <GroupLink onClick={toggleForm} msn={isSignUp ? "Iniciar sesión" : "Registrarse"} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sections;