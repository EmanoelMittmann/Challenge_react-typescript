import { ContainerCard, ImgCard } from "./style";
import { createContext, Dispatch, SetStateAction } from "react";
import { CardsProps } from "../../../interfaces/appInterface";

export const Cards = ({ url, price, text, dataForProduct, setProduct }: CardsProps) => 
  
    <ContainerCard>
      <ImgCard src={url} />
      <b>{text}</b>
      <p>R$:{price}</p>
      <button onClick={() => setProduct(dataForProduct)}>
        <i>Add</i>
      </button>
    </ContainerCard>

