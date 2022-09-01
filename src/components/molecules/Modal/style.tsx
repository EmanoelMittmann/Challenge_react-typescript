import styled from "styled-components";

export const ContentModal = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(3px);
  align-items: center;
  color: #141414;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 10;
  width: 100%;
  height: 100%;
`;

export const Container = styled.div`
  width: 300px;
  height: 400px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  z-index: 10;
  border-radius: 10px;
`;

export const ContextLines = styled.div`
  padding: 5px;
  display:flex;
  flex-direction:row; 
  justify-content:space-around;
  
  button{
    border:none;
    background-color: white;
    cursor:pointer;
    color: red;
  }
`;
