import filterIcon from "../../assets/userCard/filter.svg";
import { TypeUser } from "../../@types/crudType";
import style from "./style.module.sass";
import { UserCard } from "./UserCard.tsx/User-Card";
export const UserList = ({ users }) => {
  const userArray: TypeUser[] = users;

  return (
    <>
      <div className={style.main}>
        <ul>
          <div className={style.infoBar}>
            <div className={style.container}>
              <div>
                <p className="font title2">ID</p>
                <img src={filterIcon} alt="filterIcon" />
              </div>
              <div>
                <p className="font title2">Nome</p>
                <img src={filterIcon} alt="filterIcon" />
              </div>
              <div>
                <p className="font title2">Idade</p>
                <img src={filterIcon} alt="filterIcon" />
              </div>
              <div>
                <p className="font title2">GitHub User</p>
                <img src={filterIcon} alt="filterIcon" />
              </div>
              <div>
                <p className="font title2">Endereço</p>
                <img src={filterIcon} alt="filterIcon" />
              </div>
              <div></div>
            </div>
          </div>
          {userArray?.map((user, indice) => {
            return <UserCard key={indice} user={user} />;
          })}
        </ul>
      </div>
    </>
  );
};
