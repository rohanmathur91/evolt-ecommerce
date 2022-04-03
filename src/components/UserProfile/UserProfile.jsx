import React from "react";
import { useAuth } from "../../contexts";

export const UserProfile = () => {
  const { user } = useAuth();

  return (
    <>
      <h4>Profile Details</h4>
      <div className="my-2">
        <p className="mb-1">Name: {user && user.fullName}</p>
        <p>Email: {user && user.email} </p>
      </div>
    </>
  );
};
