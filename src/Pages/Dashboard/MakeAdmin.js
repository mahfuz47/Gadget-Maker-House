import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Utilities/Loading";
import Title from "../../Utilities/Title";
import UserRow from "./UserRow";

const MakeAdmin = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("https://gadget-maker-house-server.onrender.com/users", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <Title title="Make Admin"></Title>
      <h2 className="text-xl mx-2 my-1">Total users: {users.length}</h2>
      <div className="overflow-x-auto border-x rounded-lg">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No.</th>
              <th>USER</th>
              <th>Role</th>
              <th>Manage</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <UserRow
                key={user._id}
                user={user}
                index={index}
                serial={1}
                refetch={refetch}
              ></UserRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MakeAdmin;
