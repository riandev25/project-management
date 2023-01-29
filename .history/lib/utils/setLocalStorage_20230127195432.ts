export const setLocalStorage = (key: string, value: string) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = (key: string) => {
  const stringifiedIdBoard = String(localStorage.getItem(key));
  return JSON.parse(stringifiedIdBoard);
};
