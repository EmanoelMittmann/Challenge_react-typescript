import React, { useState, useEffect, FormEvent } from "react";
import { FormCard } from "../../atoms/cards/style";
import { Cards } from "../../atoms/cards";
import { useContext } from "react";
import { valueCartContext } from "../../../App";
import { DEFAULT_VALUE, IResultProps } from "../../../interfaces/appInterface";

const CardsData = () => {
  const [data, setData] = useState<IResultProps[]>([]);
  const [product, setProduct] = useState<IResultProps>(DEFAULT_VALUE);
  const { cart, setCart, textBySearch, page } = useContext(valueCartContext);
  const baseUrl = `http://localhost:3000/products?_page=${page}&_limit=4`;

  useEffect(() => {
    const MockApi = async () => {
      const dados = await fetch(baseUrl, {
        method: "GET",
      });
      const jsonData = await dados.json();
      setData(jsonData);
    };

    const HandleSearchProducts = (textBySearch: string) => {
      const findProductByName = data.filter((myCart) =>
        myCart.name.toLocaleLowerCase().includes(textBySearch)
      );
      setData(findProductByName);
    };

    if (!textBySearch) {
      MockApi();
    }
    HandleSearchProducts(textBySearch);
  }, [textBySearch, page]);

  useEffect(() => {
    localStorage.setItem("product", JSON.stringify(cart));
  }, [cart]);

  const HandleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setCart([...cart, product]);
  };

  return (
    <FormCard onSubmit={(e) => HandleSubmit(e)}>
      {data.map((dataForProduct) => (
        <Cards
          key={dataForProduct.id}
          dataForProduct={dataForProduct}
          setProduct={setProduct}
          price={dataForProduct.price}
          url={dataForProduct.url}
          text={dataForProduct.name}
        />
      ))}
    </FormCard>
  );
};

export default CardsData;
