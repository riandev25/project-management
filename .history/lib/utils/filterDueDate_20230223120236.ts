export const filterDueDate = (remainingTime?: number): boolean | undefined => {
  if (!remainingTime) return;
  return remainingTime !== undefined && remainingTime > 0;
};
