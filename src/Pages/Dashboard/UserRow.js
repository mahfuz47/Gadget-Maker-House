import React, { useState } from "react";
import { toast } from "react-toastify";

const UserRow = ({ user, refetch, index }) => {
  const [users, setUsers] = useState([]);
  const { email, role, _id } = user;
  const makeAdmin = () => {
    fetch(`http://localhost:5000/users/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast("Failed to make an admin");
        }
        return res.json();
      })

      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(`Successfully made an admin`);
        }
      });
  };

  const handleRemoveUsers = (id) => {
    const proceedDelete = window.confirm("Are you sure to delete user?");
    if (proceedDelete) {
      const url = `http://localhost:5000/users/${email}`;
      fetch(url, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = users.filter((user) => user._id !== id);
          setUsers(remaining);
        });
    }
  };
  return (
    <tr key={user._id}>
      <td>
        <p className="font-semibold">{index + 1}.</p>
      </td>
      <td>
        <p className="font-semibold">{email}</p>
      </td>
      <td>
        <p className="font-bold text-gray-900">
          {role !== "admin" ? "User" : "Admin"}
        </p>
      </td>
      <td>
        {role !== "admin" && (
          <button onClick={makeAdmin} className="btn btn-xs">
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button onClick={() => handleRemoveUsers(_id)} className="btn btn-xs">
          Remove User
        </button>
      </td>
    </tr>
  );
};

export default UserRow;
