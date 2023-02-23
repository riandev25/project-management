import { ICheckitemObject } from '../../interfaces/checklist';

interface IAddCheckitemState {
  _id: string;
  isOptionOpen: boolean;
  isDateOptionOpen: boolean;
}

export const addCheckitemState = (
  checkitemData: ICheckitemObject[]
): IAddCheckitemState => {
  return checkitemData.map(({ _id }) => ({
    ...{ _id },
    isOptionOpen: false,
    isDateOptionOpen: false,
  }));
};
