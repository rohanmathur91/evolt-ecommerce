import React, { useState } from "react";
import { Link } from "react-router-dom";
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

      <div className="flex-row">
        <Link
          to="/cart"
          className="btn btn-outlined goto-cart-btn flex-row flex-center w-100 my-1 p-1 mr-1 font-semibold transition-2 rounded-sm"
        >
          <span className="material-icons-outlined mr-1">west</span>
          Goto Cart
        </Link>

        <button
          onClick={handleAddAddress}
          className="btn btn-outlined add-address-btn flex-row flex-center w-100 my-1 p-1 font-semibold transition-2 rounded-sm"
        >
          <span className="material-icons-outlined mr-1">add</span> Add new
          address
        </button>
      </div>

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
