import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 10vh;
  background-color: gray;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: 1px 0px 10px black;

`;
export const ContainerChildren = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  align-items: center;
  color: yellow;
  position:relative;
  margin-left:20px ;

  button{
    margin:auto;
  }

  @media(min-width: 650px) {
    display: flex;
    height: 120vh;
  }
`;

export const ContainerMainChildren = styled.div`
  display: flex;
  box-sizing: border-box;
  height: 150vh;
  flex-wrap: no-wrap;
  align-items: center;
  justify-content: space-around;
  color: yellow;

  @media(min-width: 650px) {
    display: flex;
    height: 120vh;
  }
`;

export const Logotext = styled.h2`
  color: white;
  font-family: Roboto, sans-serif;
`;
