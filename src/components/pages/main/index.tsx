import { createContext, useContext, useState } from "react";
import {Footer} from "../../molecules/Footer";
import Navbar from "../../molecules/NavBar";
import CardsData from "../../organisms/cardsData";
import { ContainerMainChildren } from "../../molecules/NavBar/style";
import Modal from "../../molecules/Modal";
import { valueCartContext } from "../../../App";

const Main = () => {
  const [openModal, setOpenModal] = useState(false);
  const { cart, setCart, setPage, page } = useContext(valueCartContext);

  return (
    <>
      <Navbar logoName="Loja Invictus" setOpenModal={setOpenModal}/>
      {openModal && (
        <Modal
          handleClick={(id) => {
            const products = cart.findIndex(i => i.id === id)

              cart.splice(products,1)
              setCart([...cart])
          }}
        />
      )}
      <ContainerMainChildren>
        <CardsData />
      </ContainerMainChildren>      
        <button disabled={page == 1} onClick={() => setPage(page - 1)}>prev</button>
                {page}
        <button disabled={page == 2} onClick={() => setPage(page + 1)}>next</button>
      <Footer />
    </>
  );
};

export default Main;
