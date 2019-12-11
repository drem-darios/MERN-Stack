import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Test User',
      image: 'https://media.giphy.com/media/Ov5NiLVXT8JEc/giphy.gif',
      places: 3
    }
  ];
  return <UsersList items={USERS}/>
};

export default Users;
