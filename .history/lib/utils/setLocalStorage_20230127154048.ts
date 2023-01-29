interface ISetLocalStorage {
  key: string;
  value: string;
}

export const setLocalStorage = (key: string, value: string) => {
  localStorage.setItem(key, JSON.stringify(value));
};
