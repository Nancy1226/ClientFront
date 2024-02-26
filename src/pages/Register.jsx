import React, { useState } from 'react';
import FormRegister from "../components/organisms/FormRegister";
import Sections from "../components/molecules/Sections";
import "../assets/styles/Forms.css"

function Register({ toggleForm }) {
    return (  
    <>
        <div className="container" id="container">
            <FormRegister />
            <Sections toggleForm={toggleForm} />
        </div>
    </>
    );
}

export default Register;