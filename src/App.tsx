import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import "./App.css";
import Main from "./components/pages/main";
import { IContextProps, IResultProps } from "./interfaces/appInterface";

const storage = JSON.parse(localStorage.getItem("product") as any);

const DEFAULT_VALUE = storage || ([] as IResultProps[]);

export const valueCartContext = createContext<IContextProps>(
  {} as IContextProps
);

function App() {
  const [textBySearch, setTextBySearch] = useState<string>('')
  const [page, setPage] = useState<number>(1);
  const [cart, setCart] = useState(DEFAULT_VALUE as IResultProps[]);

  return (
    <valueCartContext.Provider value={{cart, setCart, textBySearch, setTextBySearch, page, setPage}}>
      <div className="App">
        <Main />
      </div>
    </valueCartContext.Provider>
  );
}

export default App;
