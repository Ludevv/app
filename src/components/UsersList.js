import React from "react";

const UsersList = (props) => {
  const users = props.users.map((user) => (
    <div key={user.login.uuid}>
      <img src={user.picture.large} alt="" srcset="" />
      <h4>{`${user.name.title} ${user.name.last}`}</h4>
      <p>{user.email}</p>
    </div>
  ));
  return <div>{users}</div>;
};

export default UsersList;
