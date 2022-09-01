import styled from "styled-components"


export const ContainerInput = styled.input`
    border:none;
    border-radius: 10px;
    color: black;
    width: 20em;
    height: 30px;
    padding-left: 30px;
    background-color:white;

    ::placeholder{
        color: black
    }

    &:hover, &:focus{
        outline:none;
    }
`