import { MyInput } from "../../components/CustomInputs/MyInput/MyInput";
import { MyButton } from "../../components/CustomButtons/MyButton";
import { useForm } from "react-hook-form";
import style from "./style.module.sass";
import { apiCrud } from "../../services/sevices";
import { useNavigate } from "react-router-dom";
export const LoginPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submit = async (content) => {
    const { data } = await apiCrud.post("/auth/login", { content });
    localStorage.setItem("@token", JSON.stringify(data.access_token));
    if (data) {
      navigate("/");
    }
  };
  return (
    <>
      <div className={style.container}>
        <h1 className="font title"> teste login</h1>
        <form
          className={style.login__container}
          onSubmit={handleSubmit(submit)}
        >
          <MyInput
            label="E-mail"
            placeholder="email"
            type="text"
            {...register("email")}
          />
          <MyInput
            label="Senha"
            placeholder="Password"
            type="password"
            {...register("password")}
          />
          <MyButton className="btn default" type="submit">
            Login
          </MyButton>
        </form>
      </div>
    </>
  );
};
