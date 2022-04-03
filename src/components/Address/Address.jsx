import React, { useState } from "react";
import { useOrder } from "../../contexts";
import { useModal } from "../../hooks";
import { AddressCard, AddressForm } from "./";
import { ModalContainer } from "../";
import "./Address.css";

export const Address = () => {
  const [editAddress, setEditAddress] = useState(null);
  const { addresses } = useOrder();
  const { showModal, handleShowModal } = useModal();

  const handleAddAddress = () => {
    setEditAddress(null);
    handleShowModal(true);
  };

  return (
    <>
      {showModal && (
        <ModalContainer handleShowModal={handleShowModal}>
          <AddressForm
            editAddress={editAddress}
            handleShowModal={handleShowModal}
          />
        </ModalContainer>
      )}
      <button
        onClick={handleAddAddress}
        className="btn btn-outlined flex-row items-center w-100 my-1 p-1 font-semibold transition-2 rounded-sm"
      >
        <span className="material-icons-outlined">add</span> Add new address
      </button>

      <ul className="my-2 flex-column content-center">
        {addresses.length ? (
          addresses.map((address) => (
            <li key={address._id} className="mb-3 border rounded-sm py-2 px-3">
              <AddressCard
                address={address}
                setEditAddress={setEditAddress}
                handleShowModal={handleShowModal}
              />
            </li>
          ))
        ) : (
          <li className="text-base">Please add a address.</li>
        )}
      </ul>
    </>
  );
};
