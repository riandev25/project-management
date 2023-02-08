export const setLocalStorage = (key: string, value: string) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = (key: string) => {
  const stringifiedIdBoard = String(localStorage.getItem(key));
  return JSON.parse(stringifiedIdBoard);
};

export const removeLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};

export const getArrayLocalStorage = (key: string) => {
  try {
    const item = localStorage.getItem(key);
    // const stringifiedIdBoard = Array(item);
    return JSON.parse(item || '');
  } catch (err) {
    return err;
  }
};
