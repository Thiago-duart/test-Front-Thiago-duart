import logoRoit from "../../assets/menuIcons/logoRoit.svg";
import brazil from "../../assets/menuIcons/brazil.svg";
import { TiThMenuOutline } from "react-icons/ti";
import { SearchInput } from "../CustomInputs/SearchInput/Search-input";
import { IoIosArrowDown } from "react-icons/io";
import style from "./style.module.sass";
export const MyHeader = () => {
  return (
    <div>
      <header className={style.header}>
        <div>
          <div className={style.iconMenu}>
            <TiThMenuOutline color="white" size={26} />
          </div>
          <img src={logoRoit} alt="" />
        </div>
        <div>
          <SearchInput placeholder={"Buscar"} styleInput={"default"} />
          <div className={style.handleFlag}>
            <img src={brazil} alt="flag brazil" />
            <IoIosArrowDown className={style.icon} size={22} />
          </div>
          <div className={style.handleUser}>
            <p>TD</p>
          </div>
        </div>
      </header>
    </div>
  );
};
