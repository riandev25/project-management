interface ISetLocalStorage {
  key: string;
  value: string;
}

export const setLocalStorage = ({ key, value }: ISetLocalStorage) => {
  localStorage.setItem(key, JSON.stringify(value));
};
