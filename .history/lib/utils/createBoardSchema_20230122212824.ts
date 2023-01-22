import * as yup from 'yup';

export const authSchema = yup.object().shape({
  boardName: yup.string().required(),
});
