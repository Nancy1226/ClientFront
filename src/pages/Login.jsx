import React, { useState } from 'react';
import FormLogin from "../components/organisms/FormLogin";
import Sections from "../components/molecules/Sections";
import "../assets/styles/Forms.css"

function Login({toggleForm}) {

    return ( 
    <>
        <div className="container" id="container">
            <FormLogin />
            <Sections toggleForm={toggleForm} />
        </div>
    </>
    );
}

export default Login;