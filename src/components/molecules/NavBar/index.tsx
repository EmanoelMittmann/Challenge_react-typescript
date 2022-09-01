import { InputSearch } from "../../atoms/InputSearch";
import { BtnIconPurchases } from "../../atoms/btnIconPurchases";
import { Container, Logotext, ContainerChildren } from "./style";
import {
  useContext,
  useEffect,
  useState,
} from "react";
import { valueCartContext } from "../../../App";
import { HeaderProps } from "../../../interfaces/appInterface";

const Navbar = ({ logoName, setOpenModal }: HeaderProps) => {
  const { cart, setCart } = useContext(valueCartContext);
  const [totalyPurchases, setTotalyPurchases] = useState<number>();
  let valuesPurchases: any = [];

  useEffect(() => {
    valuesPurchases = cart.map((values) => (values.price));
    setTotalyPurchases(
      valuesPurchases.reduce(
        (previous: number, current: number) => previous + current,0
      )
    );
  }, [cart]);
  
  return (
    <Container>
      <ContainerChildren>
        <Logotext>{logoName}</Logotext>
      </ContainerChildren>
      <ContainerChildren>
        <InputSearch/>
      </ContainerChildren>
      <ContainerChildren>
        <BtnIconPurchases handleClick={() => setOpenModal((prev) => !prev)} />
      </ContainerChildren>
      <ContainerChildren>
        <h5>Total de Compras: R${totalyPurchases},00</h5>
      </ContainerChildren>
    </Container>
  );
};

export default Navbar;
