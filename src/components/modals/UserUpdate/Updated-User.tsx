import { MyInput } from "../../CustomInputs/MyInput/MyInput";
import { MySelect } from "../../CustomInputs/MySelect/MySelect";
import { MyButton } from "../../CustomButtons/MyButton";
import { IoMdClose } from "react-icons/io";
import style from "./style.module.sass";
import { UserContext } from "../../../providers/UserContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";

export const UpdatedUser = () => {
  const { setUpdateModal, userData, editUser } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: {
      userId: userData?.userId,
      name: userData?.name,
      githubUser: userData?.githubUser,
      age: userData?.age,
      cep: userData?.address.cep,
      state: userData?.address.state,
      city: userData?.address.city,
      neighborhood: userData?.address.neighborhood,
      street: userData?.address.street,
      number: userData?.address.number,
      complement: userData?.address.complement,
    },
  });
  const onSubmit = (data) => {
    const userDataBody = {
      userId: data?.userId,
      name: data?.name,
      githubUser: data?.githubUser,
      age: data?.age,
      address: {
        cep: data?.cep,
        state: data?.state,
        city: data?.city,
        neighborhood: data?.neighborhood,
        street: data?.street,
        number: data?.number,
        complement: data?.complement,
      },
    };
    console.log(userDataBody);

    editUser.mutate(userDataBody);
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.header}>
          <h1 className="font title">Adicionar</h1>
          <div>
            <IoMdClose onClick={() => setUpdateModal(false)} />
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={style.column0}>
            <div className={style.div1}>
              <MyInput
                placeholder="Digite um ID"
                label={"ID"}
                type="text"
                {...register("userId")}
              />
            </div>
            <div>
              <MyInput
                placeholder={"Digite um nome"}
                label={"Nome"}
                type="text"
                {...register("name")}
              />
            </div>
          </div>

          <div className={style.column0}>
            <div className={style.div1}>
              <MyInput
                placeholder={"0"}
                label={"Idade"}
                type="number"
                styleInput="age"
                {...register("age")}
              />
            </div>
            <div>
              <MyInput
                placeholder={"Usuario do GitHub"}
                label={"GitHub User"}
                type="text"
                {...register("githubUser")}
              />
            </div>
          </div>

          <div className={style.column1}>
            <div className={style.div0}>
              <MyInput
                placeholder={"00.000-000"}
                label={"Cep"}
                type="number"
                {...register("cep")}
              />
            </div>
            <div className={style.div1}>
              <MySelect
                label={"Estado"}
                placeholder={"---"}
                {...register("state")}
              />
            </div>
            <div className={style.div2}>
              <MySelect
                label={"Cidade"}
                placeholder={"Selecione a cidade"}
                {...register("city")}
              />
            </div>
            <div className={style.div3}>
              <MySelect
                label={"Bairro"}
                placeholder={"Selecione o bairro"}
                {...register("neighborhood")}
              />
            </div>
          </div>

          <div className={style.column2}>
            <div className={style.div0}>
              <MyInput
                placeholder={"Jardinete juventina"}
                label={"Rua"}
                type="text"
                {...register("street")}
              />
            </div>
            <div className={style.div1}>
              <MyInput
                placeholder="---"
                label={"Numero"}
                type="number"
                {...register("number")}
              />
            </div>

            <div className={style.div2}>
              <MyInput
                placeholder={"Ex. Casa 01, Ap 20/BI 01..."}
                label={"Complemento"}
                type="text"
                {...register("complement")}
              />
            </div>
          </div>
          <div className={style.handleButtons}>
            <MyButton
              styleButton="btn secundary"
              onClick={(e) => {
                e.preventDefault(), setUpdateModal(false);
              }}
            >
              Cancelar
            </MyButton>
            <MyButton type="submit" styleButton="btn default">
              Salvar
            </MyButton>
          </div>
        </form>
      </div>
      <div className={style.backDrop}></div>
    </>
  );
};
