import { MyInput } from "../../CustomInputs/MyInput/MyInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { MySelect } from "../../CustomInputs/MySelect/MySelect";
import { MyButton } from "../../CustomButtons/MyButton";
import { IoMdClose } from "react-icons/io";
import style from "./style.module.sass";
import { UserContext } from "../../../providers/UserContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { userCreateSchema } from "./create.schema";
import { CreateUser } from "../../../@types/createUserType";

export const CreatedUser = () => {
  const { setCreateModal, createUser, queryCep, cepData, setCepData } =
    useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(userCreateSchema) });
  const onSubmit = (data: CreateUser) => {
    const userDataBody = {
      userId: data.userId,
      name: data.name,
      githubUser: data.githubUser,
      age: data.age,
      address: {
        cep: data.cep,
        state: data.state,
        city: data.city,
        neighborhood: data.neighborhood,
        street: data.street,
        number: data.number,
        complement: data.complement,
      },
    };

    createUser.mutate(userDataBody);
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.header}>
          <h1 className="font title">Adicionar</h1>
          <div>
            <IoMdClose onClick={() => setCreateModal(false)} />
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
              <p className="font messageError">{errors.userId?.message}</p>
            </div>
            <div>
              <MyInput
                placeholder={"Digite um nome"}
                label={"Nome"}
                type="text"
                {...register("name")}
              />
              <p className="font messageError">{errors.name?.message}</p>
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
              <p className="font messageError">{errors.age?.message}</p>
            </div>
            <div>
              <MyInput
                placeholder={"Usuario do GitHub"}
                label={"GitHub User"}
                type="text"
                {...register("githubUser")}
              />
              <p className="font messageError">{errors.githubUser?.message}</p>
            </div>
          </div>

          <div className={style.column1}>
            <div className={style.div0}>
              <MyInput
                placeholder={"00.000-000"}
                label={"Cep"}
                type="number"
                {...register("cep")}
                onInput={(e) => queryCep(e)}
              />
              <p className="font messageError">{errors.cep?.message}</p>
            </div>
            <div className={style.div1}>
              <MySelect
                label={"Estado"}
                placeholder={"---"}
                {...register("state")}
                cepData={cepData.uf}
              />
              <p className="font messageError">{errors.state?.message}</p>
            </div>
            <div className={style.div2}>
              <MySelect
                label={"Cidade"}
                placeholder={"Selecione a cidade"}
                {...register("city")}
                cepData={cepData.localidade}
              />
              <p className="font messageError">{errors.city?.message}</p>
            </div>
            <div className={style.div3}>
              <MyInput
                label={"Bairro"}
                placeholder={"Ex. bairro Pedrinhas"}
                {...register("neighborhood")}
                cepData={cepData.bairro}
              />
              <p className="font messageError">
                {errors.neighborhood?.message}
              </p>
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
              <p className="font messageError">{errors.street?.message}</p>
            </div>
            <div className={style.div1}>
              <MyInput
                placeholder="---"
                label={"Numero"}
                type="number"
                {...register("number")}
              />
              <p className="font messageError">{errors.number?.message}</p>
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
                e.preventDefault(), setCreateModal(false);
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
