import { MyTemplate } from "../../components/MyDefaltTemplate/My-Defalt-Template";
import { UserList } from "../../components/UserDataCard/User-List";
import { MyButton } from "../../components/CustomButtons/MyButton";
import { IoIosArrowDown } from "react-icons/io";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import style from "./style.module.sass";
import { SearchInput } from "../../components/CustomInputs/SearchInput/Search-input";
import { UserContext } from "../../providers/UserContext";
import { useContext, useEffect, useState } from "react";
import { UpdatedUser } from "../../components/modals/UserUpdate/Updated-User";
import { CreatedUser } from "../../components/modals/UserCreate/created-User";
import { DeletedUser } from "../../components/modals/DeleteConfirm/Delete-User";
export const DashBoard = () => {
  const { CreateModal, setCreateModal, updateModal, users, deleteModal } =
    useContext(UserContext);
  const [whoPage, setWhoPage] = useState(0);
  const [recordsPerPage, setRecord] = useState(1);
  const [currentPage, setCurrentPage] = useState(0);

  const startIndex = currentPage * recordsPerPage;
  const endIndex = startIndex + recordsPerPage;
  const currentItens = users?.slice(startIndex, endIndex);

  useEffect(() => {
    setCurrentPage(0);
  }, [recordsPerPage]);

  return (
    <MyTemplate>
      <div className={style.title}>
        <h1 className="font title">Teste Engenheiro de Software Full Stack</h1>
        <p className="font paragraph">
          Desenvolva no padrão MVC. Use e abuse da Orientação a Objetos.
        </p>
      </div>

      <div className={style.handleDashBoard}>
        <div className={style.handleButton}>
          <MyButton
            styleButton={"btn default"}
            onClick={() => setCreateModal(true)}
          >
            Cadastrar
          </MyButton>
          <SearchInput placeholder={"Buscar"} styleInput={"secundary"} />
        </div>

        <UserList users={currentItens} />
        <div className={style.modalsContainer}>
          {CreateModal && <CreatedUser />}
          {updateModal && <UpdatedUser />}
          {deleteModal && <DeletedUser />}
        </div>

        <div className={style.footer}>
          <div className={style.infoPage}>
            <select
              className={style.selectPage}
              onChange={(e) => {
                setRecord(+e.target.value);
              }}
            >
              <option defaultValue={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
            </select>
            <p className="font paragraph grey">
              Exibindo 1 - {recordsPerPage} de {users?.length} Registro(s)
            </p>
          </div>

          <div className={style.swithPage}>
            <button
              className={style.arrowIcons}
              onClick={(e) => {
                whoPage > 0 ? setWhoPage(whoPage - 1) : setWhoPage(whoPage + 1);
              }}
            >
              <RiArrowLeftSLine size={30} />
            </button>
            <button
              className={style.numberPage}
              value={whoPage}
              onClick={(e) => setCurrentPage(+e.target.value)}
            >
              {whoPage + 1}
            </button>
            <button
              className={style.numberPage}
              value={whoPage + 1}
              onClick={(e) => setCurrentPage(+e.target.value)}
            >
              {whoPage + 2}
            </button>
            <button
              className={style.numberPage}
              value={whoPage + 2}
              onClick={(e) => setCurrentPage(+e.target.value)}
            >
              {whoPage + 3}
            </button>
            <button
              className={style.arrowIcons}
              onClick={(e) => {
                setWhoPage(whoPage + 1);
              }}
            >
              <RiArrowRightSLine size={30} />
            </button>
          </div>
        </div>
      </div>
    </MyTemplate>
  );
};
