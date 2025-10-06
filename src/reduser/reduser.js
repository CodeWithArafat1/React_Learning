import ItemData from "./data";

export const DELETE_ALL = "DELETE_ALL";
export const RESET = "RESET";
export const DELETE_ITEM = "DELETE_ITEM";

export const reducer = (state, action) => {
  const { type, payload } = action;
  if (type === DELETE_ALL) {
    return { ...state, tasks: [] };
  }
  if (type === RESET) {
    return { ...state, tasks: ItemData };
  }

  if (type === DELETE_ITEM) {
    const filteredData = state.tasks.filter((item) => item.id !== payload.id);
    return { ...state, tasks: filteredData };
  }

  return state;
};
