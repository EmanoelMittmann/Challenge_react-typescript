import { IconModalProps } from "../../../interfaces/appInterface"
import { Container } from "./style"


export const BtnIconPurchases = (Props: IconModalProps) => {
  return (
    <Container onClick={Props.handleClick}>
        <i className="bi bi-cart-dash"></i>
    </Container>
  )
}
