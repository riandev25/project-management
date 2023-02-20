export const arrangeDueDate = (
  hasDueDate: boolean,
  remainingDays: number,
  remainingHours: number,
  remainingMinutes: number,
  remainingSeconds: number
) => {
  if (
    hasDueDate === true &&
    remainingDays &&
    remainingHours &&
    remainingMinutes &&
    remainingSeconds
  ) {
    if (remainingDays > 0 && remainingHours > 0)
      return `(${remainingDays} and ${remainingHours} left)`;
    else return `(${remainingMinutes} and ${remainingSeconds} left)`;
  }
};
