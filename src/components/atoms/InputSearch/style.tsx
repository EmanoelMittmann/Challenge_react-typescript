import styled from "styled-components"


export const ContainerInput = styled.input`
    border:none;
    width: 35%;
    border-radius: 10px;
    color: black;
    height: 30px;
    position: absolute;
    padding-left: 30px;
    background-color:white;

    ::placeholder{
        color: black
    }

    &:hover, &:focus{
        outline:none;
    }
`