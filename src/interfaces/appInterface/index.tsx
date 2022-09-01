import { Dispatch, SetStateAction } from "react";

export interface IContextProps {
  cart: IResultProps[];
  setCart: Dispatch<SetStateAction<IResultProps[]>>;
  textBySearch: string;
  setTextBySearch: Dispatch<SetStateAction<string>>;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}

export interface IResultProps {
  id: number;
  name: string;
  price: number;
  url: string;
}

export type IconModalProps = {
  handleClick: () => void;
};

export type HeaderProps = {
  logoName: string;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
};

export type buttonProps = {
  handleClick: (id: number) => void;
};

export interface CardsProps {
  url: string;
  price: number;
  text: string;
  dataForProduct: IResultProps;
  setProduct: Dispatch<SetStateAction<IResultProps | any>>;
}

export const DEFAULT_VALUE = {
  id: 0,
  name: "teste",
  price: 0,
  url: "///",
};
