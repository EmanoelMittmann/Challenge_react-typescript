import styled from "styled-components";

export const ContainerCard = styled.div`
  margin: 2.5em;
  width: 15em;
  height: 18em;
  background-color: #fff;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  box-sizing: border-box;
  transition: all 300ms ease;

  &:hover {
    width: 19em;
    height: 19em;
    box-shadow: 1px 0 40px gray;
  }
  b {
    color: #ffd700;
  }
  p {
    color: #ff4500;
  }
  button {
    border: none;
    background-color: blue;
    color: white;
    height: 20px;
    width: 5em;
    border-radius: 5px;
    cursor: pointer;
    transition: all 300ms ease;
    font-family: roboto;
  }

  button:hover {
    opacity: 0.5;
    background-color: white;
    outline: 1px solid blue;
    color: black;
  }

  @media(min-width: 650px){
    &:hover{
      width:16em;
      height:17.6em;
      box-shadow: 1px 0 40px gray;
    }
  }
`;

export const FormCard = styled.form`
  display: flex;
  margin: auto;
  flex-wrap: wrap;
  align-items: center;
`;

export const ImgCard = styled.img`
  background-color: gray;
  width: 15em;
  height: 14em;
`;
