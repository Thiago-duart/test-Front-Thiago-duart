export interface TypeUser {
  userId: string;
  name: string;
  age: number;
  githubUser: string;
  address: {
    cep: string;
    state: string;
    city: string;
    neighborhood: string;
    street: string;
    number: string;
    complement: string;
    logradouro: string;
    ibge: string;
    gia: string;
    ddd: string;
    siafi: string;
  };

  githubData: {
    login: String;
    id: Number;
    avatar: String;
    url: String;
    repos: Array<Object>;
  };
}
