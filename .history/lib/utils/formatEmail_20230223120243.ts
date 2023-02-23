export const formatEmail = (value: string): string => {
  const user = value.split('@');
  return user[0];
};
