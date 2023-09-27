import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createContext, useState } from "react";
import { apiCrud } from "../services/sevices";
import { TypeUser } from "../@types/crudType";
import axios from "axios";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const client = useQueryClient();

  const [CreateModal, setCreateModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [userId, setUserId] = useState(0);

  const [userData, setUserData] = useState({});
  const [cepData, setCepData] = useState({});

  const token = JSON.parse(localStorage.getItem("@token"));

  const { data: users } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const { data } = await apiCrud.get("/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const users: TypeUser[] = data.data;

      return users;
    },
  });

  const createUser = useMutation({
    mutationFn: async (data) => {
      return await apiCrud.post(
        "/user",
        { data },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
    onSuccess: () => {
      client.refetchQueries();
      setCreateModal(false);
    },
  });

  const deleteUser = useMutation({
    mutationFn: async (userId) => {
      return await apiCrud.delete(`/user/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: () => {
      client.refetchQueries();
      setDeleteModal(false);
    },
  });

  const editUser = useMutation({
    mutationFn: async (data: TypeUser) => {
      return await apiCrud.patch(
        `/user/${data.userId}`,
        { data },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
    onSuccess: () => {
      client.refetchQueries();
      setUpdateModal(false);
    },
  });
  const queryCep = async (e) => {
    const cep = e.target.value;
    if (cep.length === 8) {
      const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      setCepData(data);
    }
  };
  return (
    <UserContext.Provider
      value={{
        users,
        CreateModal,
        setCreateModal,
        createUser,
        deleteUser,
        updateModal,
        setUpdateModal,
        editUser,
        userData,
        setUserData,
        queryCep,
        cepData,
        setCepData,
        deleteModal,
        setDeleteModal,
        userId,
        setUserId,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
