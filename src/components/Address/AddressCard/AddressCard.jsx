import React from "react";
import { useOrder } from "../../../contexts";
import { REMOVE_ADDRESS } from "../../../reducer";
import "./AddressCard.css";

export const AddressCard = ({ address, handleShowModal, setEditAddress }) => {
  const { orderDispatch } = useOrder();
  const { _id, home, pinCode, country, fullName, cityAndState, mobileNumber } =
    address;

  const handleEditClick = () => {
    handleShowModal(true);
    setEditAddress(address);
  };

  const handleRemoveClick = () => {
    orderDispatch({ type: REMOVE_ADDRESS, payload: _id });
  };

  return (
    <li key={_id} className="mb-3 border rounded-sm py-2 px-3">
      <div>
        <p className="font-semibold mb-1">{fullName}</p>
        <p className="mb-1">{home}</p>
        <p className="mb-1">{`${cityAndState}, ${pinCode}`}</p>
        <p className="mb-1">{country}</p>
        <p>Phone Number: {mobileNumber}</p>
        <div className="mt-2 ml-auto">
          <button
            onClick={handleEditClick}
            className="btn btn-solid font-semibold items-end transition-2 mt-1"
          >
            Edit
          </button>
          <button
            onClick={handleRemoveClick}
            className="btn btn-outlined font-semibold rounded-sm items-end transition-2 mx-1 mt-1"
          >
            Remove
          </button>
        </div>
      </div>
    </li>
  );
};

AddressCard.defaultProp = {
  address: {
    _id: "",
    home: "",
    pinCode: "",
    country: "",
    fullName: "",
    cityAndState: "",
    mobileNumber: "",
  },
  setEditAddress: () => {},
  handleShowModal: () => {},
};
