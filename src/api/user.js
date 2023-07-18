import ourAxios from "./ourAxios"
import {Cookies} from "react-cookie"

export const cookies = new Cookies();

export const postWithToken = async (path, data) => {
  const accessToken = cookies.get('accessToken');
  const response = await ourAxios.post(path, data, {
    headers:{
      'Content-Type' : 'application/json',
      Authorization : `${accessToken}`
    }
  })
  return response;
}

export const getWithToken = async (path) => {
  const accessToken = cookies.get('accessToken');
  const response = await ourAxios.get(path, {
    headers:{
      'Content-Type' : 'application/json',
      Authorization : `${accessToken}`
    }
  })

  return response;
}

export const deleteWithToken = async (path) => {
  const accessToken = cookies.get('accessToken');
  const response = await ourAxios.delete(path, {
    headers:{
      'Content-Type' : 'application/json',
      Authorization : `${accessToken}`
    }
  })

  return response;
}

export const putWithToken = async (path, data) => {
  const accessToken = cookies.get('accessToken');
  const response = await ourAxios.put(path, data, {
    headers:{
      'Content-Type' : 'application/json',
      Authorization : `${accessToken}`
    }
  })

  return response;
}

export const signUp = async ({email, password, nickname}) => {
  await ourAxios.post(`api/users/signup`,{email,password,nickname});
}

export const deleteUser = async ({userId}) => {
  await ourAxios.delete(`api/users/${userId}`);
}

export const login = async ({email, password}) => {
  await ourAxios.post(`api/users/login`,{email,password},{withCredentials:true});
}

export const logout = async () => {
  postWithToken(`api/users/logout`);
}

