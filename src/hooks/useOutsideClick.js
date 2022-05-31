import { useEffect } from "react";

export const useOutsideClick = (ref, isOptions, handleCloseOptions) => {
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOptions && ref.current && !ref.current.contains(event.target)) {
        handleCloseOptions(false);
      }
    };

    if (isOptions) {
      document.body.addEventListener("click", handleOutsideClick);
    }

    console.log("running");
    return () => document.body.removeEventListener("click", handleOutsideClick);
  }, [ref, isOptions, handleCloseOptions]);
};
