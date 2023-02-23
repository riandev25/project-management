export const setLocalStorage = (key: string, value: string): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = (key: string): string => {
  const stringifiedIdBoard = String(localStorage.getItem(key));
  return JSON.parse(stringifiedIdBoard);
};

export const removeLocalStorage = (key: string): void => {
  localStorage.removeItem(key);
};

export const getArrayLocalStorage = (key: string): Array<string> => {
  const item = String(localStorage.getItem(key));
  return JSON.parse(item);
};
