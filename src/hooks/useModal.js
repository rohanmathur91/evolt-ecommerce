import { useState } from "react";

export const useModal = () => {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = (displayModal) => setShowModal(displayModal);

  return { showModal, handleShowModal };
};
