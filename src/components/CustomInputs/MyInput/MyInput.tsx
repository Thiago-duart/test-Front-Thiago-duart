import { forwardRef } from "react";
import style from "./style.module.sass";
interface Pros {
  label: string;
  placeholder: string;
  styleInput: string;
  cepData: string;
}
export const MyInput = forwardRef(
  ({ label, placeholder, styleInput, cepData, ...rest }: Pros, ref: any) => {
    return (
      <>
        <div className={style.container}>
          <label className="font label">{label}</label>
          <input
            placeholder={placeholder}
            defaultValue={cepData && cepData}
            className={`${style.input} ${
              styleInput === "age" ? style.age : style.default
            }`}
            ref={ref}
            {...rest}
          />
        </div>
      </>
    );
  }
);
