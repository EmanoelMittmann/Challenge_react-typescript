import { Container, ContentModal, ContextLines } from "./style";
import { useContext } from "react";
import { valueCartContext } from "../../../App";
import { buttonProps } from "../../../interfaces/appInterface";


const Modal = (Props : buttonProps) => {
  const { cart, setCart } = useContext(valueCartContext);

  return (
    <ContentModal>
      <Container>
        {cart.map((i) => (
          <ContextLines key={i.id}>
            {i.name}  |  R$:{i.price}
            <button onClick={() => {Props.handleClick(i.id)}}>X</button>
          </ContextLines>
        ))}
      </Container>
    </ContentModal>
  );
};

export default Modal;
