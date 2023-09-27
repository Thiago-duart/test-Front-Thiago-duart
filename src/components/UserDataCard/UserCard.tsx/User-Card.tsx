import { AiOutlineEye } from "react-icons/ai";
import { BsTrash3 } from "react-icons/bs";
import style from "./style.module.sass";
import { UserContext } from "../../../providers/UserContext";
import { useContext } from "react";
import { TypeUser } from "../../../@types/crudType";

export const UserCard = ({ user }: TypeUser) => {
  const { setUserId, setUpdateModal, setUserData, setDeleteModal } =
    useContext(UserContext);
  const { userId, name, age, githubUser, address } = user;
  const formatedAddress = `${address?.neighborhood}, ${address?.number} - ${address?.logradouro} - ${address?.city}/${address?.state} `;

  return (
    <li className={style.li}>
      <div>
        <p className="font paragraph1">{userId}</p>
      </div>
      <div>
        <p className="font paragraph1">{name}</p>
      </div>
      <div>
        <p className="font paragraph1">{age}</p>
      </div>
      <div>
        <p className="font paragraph1">{githubUser}</p>
      </div>
      <div>
        <p className={style.address}>{formatedAddress}</p>
      </div>
      <div>
        <AiOutlineEye
          className="icons"
          size={24}
          onClick={() => {
            setUpdateModal(true), setUserData(user);
          }}
        />
        <BsTrash3
          className="icons"
          color="red"
          size={22}
          onClick={() => {
            setDeleteModal(true), setUserId(userId);
          }}
        />
      </div>
    </li>
  );
};
