import * as yup from 'yup';

export const createBoardchema = yup.object().shape({
  boardName: yup.string().required(),
});
