import { render } from "../main.js";

export const useState = (defaultValue) => {
  let value = defaultValue;

  const getValue = () => {
    return value;
  };

  const setValue = (newValue) => {
    value = newValue;
    render();
  };
  return [getValue, setValue];
};
