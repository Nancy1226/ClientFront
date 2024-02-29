import Input from "../atoms/Input.jsx";
import Title from "../atoms/Title.jsx";
import Button from "../atoms/Button.jsx";
import { searchClient } from '../../api/route.js';
import { Formik, Form } from "formik";
import { Navigate, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import styled from "styled-components";
import { useEffect, useState } from 'react';
import axios from 'axios';

function BodyDashboard() {

    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get("http://localhost:8800/proyecto/get");
                setData(res.data);
                console.log("Datos actualizados:", res.data); // Imprime los datos obtenidos
            } catch (error) {
                console.error("Error al obtener datos:", error);
            }
        }
        fetchData();
    }, []);

    const handlerClick = () => {

        navigate("/dashboard");
    }
    return (
        <>
            <StyledContainer>
                <Formik
                    initialValues={{
                        nombre: "",
                        telefono: ""
                    }}
                    validate={(values) => { //funcion para validar el formumlario
                        let errores = {};
                        if (!values.nombre) {
                            errores.nombre = "Por favor ingresa un nombre";
                        }

                        if (!values.telefono) {
                            errores.telefono = "Por favor ingresa un numero de telefono";
                        }

                        return errores;
                    }}
                    onSubmit={async (values, actions) => { //funcion para enviar el forumario      
                        console.log("Imprimiendo los valores ")
                        console.table(values)
                        try {
                            const response = await searchClient(values);
                            console.log("--------------------------------")
                            console.log(setData);
                            setData(response.data)
                        } catch (e) {
                            console.log("Error: " + e);
                        }
                    }
                    }

                >
                    {({ values, errors, touched, handleSubmit, handleChange, handleBlur, isSubmitting }) => (
                        <Form onSubmit={handleSubmit}>
                            <Title msn={"Usuarios"} />

                            <Input
                                type={"text"}
                                placeholder={"Ingrese el nombre"}
                                name="nombre"
                                dato={values.nombre}
                                valor={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.nombre && errors.nombre && <div className="error">{errors.nombre}</div>}

                            <Input
                                type={"text"}
                                placeholder={"Ingrese el telefono"}
                                name="telefono"
                                dato={values.telefono}
                                valor={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.telefono && errors.telefono && <div className="error">{errors.telefono}</div>}

                            <Button name={"buscar"} />
                            <StyledButon type="button" onClick={handlerClick}>Salir</StyledButon>
                        </Form>
                    )}
                </Formik>
                    <Styled>
                <p>hay {data.length}</p>
                    </Styled>
                <StyledContainerTable>
                        <div className="table-responsive-sm">
                            <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th>CLAVE CLIENTE</th>
                                        <th>NOMBRE</th>
                                        <th>CORREO</th>
                                        <th>TELEFONO</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((item) => (
                                        <tr key={item.id}>
                                            <td>{item.clave_cliente}</td>
                                            <td>{item.nombre}</td>
                                            <td>{item.correo}</td>
                                            <td>{item.telefono}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                </StyledContainerTable>
            </StyledContainer>
        </>
    );
}

export default BodyDashboard;

const StyledContainer = styled.div`
    margin-top: 6%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

const StyledContainerTable = styled.div`
    width: 90%;
    height: 70px;
    padding: 2%;
`;

const Styled = styled.div`
    .p{
     margin-top:2px;
    }
`;
const StyledButon = styled.button`
    background-color: #512da8;
    color: #fff;
    font-size: 12px;
    padding: 10px 45px;
    border: 1px solid transparent;
    border-radius: 8px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    margin-top: 10px;
    margin-left: 2%;
    &:hover{
        cursor: pointer;
    }
`;