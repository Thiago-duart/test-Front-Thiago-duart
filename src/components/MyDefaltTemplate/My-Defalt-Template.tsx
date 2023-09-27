import { MyHeader } from "../Header/MyHeader";
import { MyAside } from "../Aside/MyAside";
import style from "./style.module.sass";
export const MyTemplate = ({ children }: Record<string, any>) => {
  return (
    <>
      <div className="container">
        <MyHeader />
        <div className={style.main}>
          <MyAside />
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};
