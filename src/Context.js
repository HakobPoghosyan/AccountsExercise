import React from "react";
import axios from "axios";

const UserContext = React.createContext();

export const UserProvider = (props) => {
  const apiUrl = process.env.REACT_APP_API_URL;

  const getAllUsersData = () => {
    return axios
      .get(`${apiUrl}/api`)
      .then((res) => {
        return res?.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getSingleUserData = (id) => {
    return axios
      .get(`${apiUrl}/api/${id}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <UserContext.Provider
      value={{
        getAllUsersData,
        getSingleUserData,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
