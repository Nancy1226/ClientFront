import React, { useState } from 'react';
import FormRegister from "../components/organisms/FormRegister";
import Section from "../components/molecules/Section";
import "../assets/styles/Forms.css"

function Register() {
    return (  
    <>
        <div className="container" id="container">
            <FormRegister />
            <Section />
        </div>
    </>
    );
}

export default Register;