import React from "react";

const DisplayUser = ({ userInfo }) => {
  return (
    <table className="table-auto w-full border border-gray-300">
      <tbody>
        <tr>
          <td className="border px-4 py-2 font-primary text-primary-300">Id</td>
          <td className="border px-4 py-2 text-secondary-300">{userInfo.id}</td>
        </tr>
        <tr>
          <td className="border px-4 py-2 font-primary text-primary-300">
            Name
          </td>
          <td className="border px-4 py-2 text-secondary-300">{`${userInfo.first_name} ${userInfo.last_name}`}</td>
        </tr>
        <tr>
          <td className="border px-4 py-2 font-primary text-primary-300">
            Email
          </td>
          <td className="border px-4 py-2 text-secondary-300">
            {userInfo.email}
          </td>
        </tr>
        <tr>
          <td className="border px-4 py-2 font-primary text-primary-300">
            Username
          </td>
          <td className="border px-4 py-2 text-secondary-300">
            {userInfo.username}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default DisplayUser;
