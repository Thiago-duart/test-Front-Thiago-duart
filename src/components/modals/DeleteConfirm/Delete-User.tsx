import { IoMdClose } from "react-icons/io";
import style from "./style.module.sass";
import { MyButton } from "../../CustomButtons/MyButton";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";
export const DeletedUser = () => {
  const { setDeleteModal, userId, deleteUser } = useContext(UserContext);
  return (
    <>
      <div className={style.container}>
        <div className={style.header}>
          <h1 className="font title">Adicionar</h1>
          <div>
            <IoMdClose onClick={() => setDeleteModal(false)} />
          </div>
        </div>
        <div className={style.contentInfo}>
          <div>
            <IoMdClose color="white" />
          </div>
          <p>Confirma a exclusão deste registro?</p>
        </div>
        <div className={style.handleButtons}>
          <MyButton
            styleButton="btn deletedSecundary"
            onClick={() => setDeleteModal(false)}
          >
            Cancelar
          </MyButton>
          <MyButton
            styleButton="btn deletedDefault"
            onClick={() => deleteUser.mutate(userId)}
          >
            Excluir
          </MyButton>
        </div>
      </div>
      <div className={style.backDrop}></div>
    </>
  );
};
