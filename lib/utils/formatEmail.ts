export const formatEmail = (value: string) => {
  const user = value.split('@');
  return user[0];
};
