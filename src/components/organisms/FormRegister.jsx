import styled from "styled-components";
import { Formik, Form} from "formik";
import { Navigate, useNavigate } from "react-router-dom";
import { useState, useContext, useRef} from 'react';
// import { loginUser } from '../../api/routes';
import Swal from 'sweetalert2';
import axios from "axios";
import Title from "../atoms/Title.jsx";
import Input from "../atoms/Input.jsx";
import Button from "../atoms/Button.jsx";
import Span from "../atoms/Label.jsx";
import UserContext from '../../context/UserContext.js';
import "../../assets/styles/Forms.css"

function FormRegister() {
    const { setIsLoged } = useContext(UserContext);
    const { setUserName } = useContext(UserContext);
    const navigate = useNavigate();
  
    return ( 
    <>
    <div class="form-container sign-up">
     <Formik
              initialValues={{
                email:"",
                password_user:"",
              }}

              validate={(values)=>{ //funcion para validar el formumlario
                let errores = {};

                //validacion correo
                if (!values.email) {
                  errores.email = "Por favor ingresa un correo";
                } else if (
                  !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                    values.email
                  )
                ) {
                  errores.email =
                    "El correo solo puede contener letras, numeros, puntos, guiones y guion bajo";
                }

                //validacion contraseña
                if (!values.password_user) {
                  errores.password_user = "Por favor ingresa una contraseña";
                } else if (
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/.test(
                      values.password_user
                    )
                  ) {
                    errores.password_user =
                      "El correo solo puede contener letras, numeros, puntos";
                  }

                //validacion para ambos
                

                return errores;
              }}

              onSubmit={ async(values, actions) => { //funcion para enviar el forumario      
                try {
                //   const response = await loginUser(values);
                //   if(response.status === 200){
                //     Swal.fire({
                //       icon: "success",
                //       title: "Bienvenido",
                //       showConfirmButton: false,
                //       timer: 1500,
                //     });
                //   }
                // await new Promise((resolve) => {
                //   window.localStorage.setItem( "loggedUser", JSON.stringify(response.data));
                //   resolve();
                // });
                // setIsLoged(true);
                // setUserName(response.data);
                navigate("/dashboard");
            
                } catch (error) {
                  Swal.fire({
                    icon: "error",
                    title: "Error...",
                    text: "Intente de nuevo",
                    footer: 'Si el problema persiste intentelo mas tarde'
                  });
                  console.log(error);
                //   if (error.response) {
                //     console.log(error.response.data);
                //   }
                }
                
              }}

            >
              {({ values, errors, touched,handleSubmit, handleChange, handleBlur, isSubmitting }) => (

                  <Form onSubmit={handleSubmit}>
                  <Title msn={"Inicio de sesion"} />
                  <Span txt={"Ingrese su contraseña y correo electronico"} />
                  <Input
                    type={"email"}
                    placeholder={"Correo"}
                    name="email"
                    dato={values.email}
                    valor={handleChange}
                    onBlur={handleBlur}
                  />
                {touched.email && errors.email && <div className="error">{errors.email}</div>}

                  <Input
                    type={"password"}
                    placeholder={"Contraseña"}
                    name="password_user"
                    dato={values.password_user}
                    valor={handleChange}
                    onBlur={handleBlur}
                  />
                {touched.password_user && errors.password_user && <div className="error">{errors.password_user}</div>}

                  <Button  name={"Iniciar sesion"} />
                </Form>
              )}
            </Formik>
        </div>
    </> 
    );
}

export default FormRegister;
