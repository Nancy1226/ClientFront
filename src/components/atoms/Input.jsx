import styled from "styled-components"
import { Field } from "formik";

function Input({ type, name, dato, valor, onBlur, placeholder}) {
    return ( 
    <>
    <StyledInput type={type}
        placeholder={placeholder}
        name={name}
        value={dato}
        onChange={valor}
        onBlur={onBlur}>
        
    </StyledInput>
    </>
     );
}

export default Input;

const StyledInput = styled(Field)`
    background-color: #eee;
    border: none;
    margin: 8px 0;
    padding: 10px 15px;
    font-size: 13px;
    border-radius: 8px;
    width: 100%;
    outline: none;
`;