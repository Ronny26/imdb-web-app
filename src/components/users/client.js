import axios from "axios";
const request = axios.create({
  withCredentials: true,
});

const BASE_API = "http://localhost:4000/api";
export const USERS_API = `${BASE_API}/users`;
export const signin = async (credentials) => {
  const response = await request.post( `${USERS_API}/signin`, credentials );

  console.log(response)
  return response.data;
};

export const updateUser = async (user) => {
    const response = await request.put(`${USERS_API}/${user._id}`, user);
    return response.data;
};
export const findAllUsers = async () => {
    const response = await request.get(`${USERS_API}`);
    return response.data;
};
  export const createUser = async (user) => {
    const response = await request.post(`${USERS_API}`, user);
    return response.data;
  };
  export const findUserById = async (id) => {
    const response = await request.get(`${USERS_API}/${id}`);
    return response.data;
  };
  export const deleteUser = async (user) => {
    const response = await request.delete(
      `${USERS_API}/${user._id}`);
    return response.data;
  };
  export const signup = async (credentials) => {
    const response = await request.post(
      `${USERS_API}/signup`, credentials);
    return response.data;
  };
  export const signout = async () => {
    const response = await request.post(`${USERS_API}/signout`);
    return response.data;
  };
  
  
  