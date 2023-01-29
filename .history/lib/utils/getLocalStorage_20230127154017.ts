export const getLocalStorage = (key: string) => {
  const stringifiedIdBoard = String(localStorage.getItem(key));
  return JSON.parse(stringifiedIdBoard);
};
