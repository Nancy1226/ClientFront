import styled from "styled-components";

function Span({txt}) {
    return ( 
    <>
        <StyledLabel>{txt}</StyledLabel>
    </> 
    );
}

export default Span;

const StyledLabel = styled.span`
    font-size: 12px;
    margin-bottom: 1em;
`;