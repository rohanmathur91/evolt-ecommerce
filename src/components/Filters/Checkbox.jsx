import React from "react";
import { useProduct } from "../../contexts";

export const Checkbox = ({ _id, title, value, actionType, payload }) => {
  const { productDispatch } = useProduct();

  return (
    <label htmlFor={_id} className="cursor-pointer">
      <input
        id={_id}
        type="checkbox"
        className="mr-2 cursor-pointer"
        checked={value}
        onChange={(e) =>
          productDispatch({
            type: actionType,
            payload: payload || e.target.checked,
          })
        }
      />
      {title}
    </label>
  );
};

Checkbox.defaultProps = {
  id: "",
  title: "",
  value: false,
  actionType: "",
  payload: "",
};
