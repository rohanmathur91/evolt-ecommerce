import React from "react";
import { useAuth } from "../../contexts";

export const AccountSettings = () => {
  const { handleLogout } = useAuth();

  return (
    <>
      <h4>Account settings</h4>
      <button
        onClick={handleLogout}
        className="btn mt-2 btn-solid p-1 font-semibold transition-2 rounded-sm"
      >
        Logout
      </button>
    </>
  );
};
