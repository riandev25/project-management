export const setLocalStorage = (key: string, value: string) => {
  localStorage.setItem(key, JSON.stringify(value));
};

// export const getLocalStorage = (key: string) => {
//   const stringifiedIdBoard = String(localStorage.getItem(key));
//   return JSON.parse(stringifiedIdBoard);
// };

export const removeLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};

export const getLocalStorage = (key: string) => {
  try {
    const item = localStorage.getItem(key);
    const stringifiedIdBoard = String(item);
    return JSON.parse(stringifiedIdBoard);
  } catch (err) {
    return err;
  }
};
