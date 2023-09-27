import { z } from "zod";

export const userCreateSchema = z.object({
  cep: z
    .string()
    .min(8)
    .max(8)
    .nonempty({ message: "o campo de Cep e Obrigatório" }),
  state: z.string().nonempty({ message: "o campo de estado e Obrigatório" }),
  city: z.string().nonempty({ message: "o campo de cidade e Obrigatório" }),
  neighborhood: z
    .string()
    .nonempty({ message: "o campo de bairro e Obrigatório" }),
  street: z.string().nonempty({ message: "o campo de rua e Obrigatório" }),
  number: z.string().nonempty({ message: "o campo de numero e Obrigatório" }),
  name: z.string().nonempty({ message: "o campo de nome e Obrigatório" }),
  age: z.string().nonempty({ message: "o campo de idade e Obrigatório" }),
  githubUser: z
    .string()
    .nonempty({ message: "o campo de GitHub User e Obrigatório" }),
  userId: z.string().nonempty({ message: "o campo de Id e Obrigatório" }),
  complement: z.string(),
});
