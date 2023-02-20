export const filterDueDate = (remainingTime?: number) => {
  if (!remainingTime) return;
  return remainingTime !== undefined && remainingTime > 0;
};
