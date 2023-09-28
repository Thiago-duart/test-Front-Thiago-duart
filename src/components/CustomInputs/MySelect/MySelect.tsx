import { forwardRef } from "react";
import style from "./style.module.sass";
interface Props {
  label: string;
  placeholder: string;
  cepData: string;
}
export const MySelect = forwardRef(
  ({ label, placeholder, cepData, ...rest }: Props, ref: any) => {
    return (
      <div className={style.container}>
        <label className="font label">{label}</label>
        <select {...rest} className={style.select} ref={ref}>
          <option defaultValue={placeholder} className={style.defaultOption}>
            seleciona um valor
          </option>
          <option value={cepData}>{cepData}</option>
        </select>
      </div>
    );
  }
);
