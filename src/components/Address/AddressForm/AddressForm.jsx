import React, { useState } from "react";
import { useOrder } from "../../../contexts";
import { UPDATE_ADDRESS, SET_SELECTED_ADDRESS } from "../../../reducer";
import { v4 as uuid } from "uuid";
import { address } from "../../../staticData";
import "./AddressForm.css";

export const AddressForm = ({ editAddress, handleShowModal }) => {
  const [addressForm, setAddressForm] = useState(
    editAddress ?? {
      home: "",
      area: "",
      pinCode: "",
      fullName: "",
      country: "India",
      mobileNumber: "",
      cityAndState: "",
    }
  );
  const { addresses, orderDispatch } = useOrder();

  const handleInputChange = (event, field) => {
    setAddressForm((prevForm) => ({
      ...prevForm,
      [field]: event.target.value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newAddress = { _id: uuid(), ...addressForm };
    orderDispatch({
      type: UPDATE_ADDRESS,
      payload: !editAddress
        ? newAddress
        : { isEdit: true, address: addressForm },
    });

    if (addresses.length === 0) {
      orderDispatch({ type: SET_SELECTED_ADDRESS, payload: newAddress._id });
    }

    handleShowModal(false);
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      onClick={(event) => event.stopPropagation()}
      className="address py-2 px-4 w-100 flex-column border rounded-sm mt-4 mx-2 mb-2"
    >
      <div className="flex-row items-center content-space-between">
        <h3 className="my-1">Add address</h3>
        <button
          title="Close"
          type="button"
          onClick={() => handleShowModal(false)}
        >
          <span className="material-icons-outlined">close</span>
        </button>
      </div>
      <select
        required
        id="country"
        type="text"
        value={addressForm.country}
        placeholder="Enter your country"
        className="mt-2 py-1 px-2 text-base border rounded-sm"
        onChange={(event) => handleInputChange(event, "country")}
      >
        <option value="India">India</option>
        <option value="Iceland">Iceland</option>
        <option value="Hungary">Hungary</option>
        <option value="Japan">Japan</option>
      </select>

      <input
        required
        type="text"
        id="fullName"
        value={addressForm.fullName}
        placeholder="Enter your full name"
        className="mt-2 py-1 px-2 text-base border rounded-sm"
        onChange={(event) => handleInputChange(event, "fullName")}
      />

      <input
        required
        id="mobileNumber"
        type="number"
        value={addressForm.mobileNumber}
        placeholder="10-digit mobile number"
        className="mt-2 py-1 px-2 text-base border rounded-sm"
        onChange={(event) => handleInputChange(event, "mobileNumber")}
      />

      <input
        required
        id="pinCode"
        type="number"
        value={addressForm.pinCode}
        placeholder="6-digit PIN code"
        className="mt-2 py-1 px-2 text-base border rounded-sm"
        onChange={(event) => handleInputChange(event, "pinCode")}
      />

      <input
        required
        id="home"
        type="text"
        value={addressForm.home}
        placeholder="Enter house details"
        className="mt-2 py-1 px-2 text-base border rounded-sm"
        onChange={(event) => handleInputChange(event, "home")}
      />

      <input
        required
        id="area"
        type="text"
        value={addressForm.area}
        placeholder="Enter area details"
        className="mt-2 py-1 px-2 text-base border rounded-sm"
        onChange={(event) => handleInputChange(event, "area")}
      />

      <input
        required
        id="cityAndState"
        type="text"
        value={addressForm.cityAndState}
        placeholder="Enter city and state details"
        className="mt-2 py-1 px-2 text-base border rounded-sm"
        onChange={(event) => handleInputChange(event, "cityAndState")}
      />

      <button
        type="button"
        onClick={() => setAddressForm(address)}
        className="btn btn-outlined mt-2 p-1 w-100 font-semibold transition-2 rounded-sm"
      >
        Fill dummy values
      </button>

      <div className="flex-row my-2">
        <button
          type="button"
          onClick={() => handleShowModal(false)}
          className="btn btn-outlined p-1 w-100 font-semibold transition-2 mr-1 rounded-sm"
        >
          Cancel
        </button>
        <button className="btn btn-solid p-1 w-100 font-semibold transition-2 rounded-sm">
          Save
        </button>
      </div>
    </form>
  );
};

AddressForm.defaultProps = { editAddress: null, handleShowModal: () => {} };
