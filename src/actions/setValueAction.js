import { INPUT_TYPE } from "./actionType";

export const setValue = (data) => ({
  type: INPUT_TYPE,
  payload: data
});
