import { BiSearchAlt2 } from "react-icons/bi";
import style from "./style.module.sass";

interface props {
  placeholder: string;
  styleInput: string;
}

export const SearchInput = ({ placeholder, styleInput }: props) => {
  return (
    <div
      className={`${style.inputSearch} ${
        styleInput === "default" ? style.default : style.secundary
      }`}
    >
      <BiSearchAlt2 className={style.icon} />
      <input type="text" placeholder={placeholder} />
    </div>
  );
};
