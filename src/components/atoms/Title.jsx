import styled from "styled-components";

function Title({msn}) {
    return ( 
    <>
        <StyledDiv>
        <h1>{msn}</h1>
        </StyledDiv>
    </> 
    );
}
export default Title;

const StyledDiv = styled.div`
    margin-bottom: 1em;
`;

