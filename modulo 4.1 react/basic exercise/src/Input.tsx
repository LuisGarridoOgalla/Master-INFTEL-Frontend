import React from "react";
import { InputContext } from "./user-filter.context";

export const Input: React.FC = () => {
  const { inputValue, setInputValue } = React.useContext(InputContext);
  return (
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
};
