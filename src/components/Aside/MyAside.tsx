import barsgraphic from "../../assets/asideIcons/bars-graphic.svg";
import contract from "../../assets/asideIcons/contract.svg";
import fileIcon from "../../assets/asideIcons/file-edit.svg";
import flowMagic from "../../assets/asideIcons/flow-magic.svg";
import boxIcon from "../../assets/asideIcons/boxIcon.svg";
import style from "./style.module.sass";

export const MyAside = () => {
  return (
    <div>
      <aside className={style.aside}>
        <div>
          <img src={barsgraphic} alt="barsgraphic" />
          <img src={flowMagic} alt="flowMagic" />
          <img src={fileIcon} alt="fileIcon" />
          <img src={contract} alt="contract" />
        </div>
        <img src={boxIcon} alt="box" />
      </aside>
    </div>
  );
};
