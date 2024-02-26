import styled from "styled-components";

function Button({name}) {
    return ( 
    <>
    <StyledButton type={"submit"}>
            {name}
    </StyledButton>
    </> 
    );
}

export default Button;

const StyledButton = styled.button`
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
    &:hover{
        cursor: pointer;
    }
`;