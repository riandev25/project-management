export const arrangeDueDate = (
  remainingDays?: number,
  remainingHours?: number,
  remainingMinutes?: number,
  remainingSeconds?: number
) => {
  if (remainingDays && remainingHours && remainingMinutes && remainingSeconds) {
    if (remainingDays > 0 && remainingHours > 0)
      return `(${remainingDays} and ${remainingHours} left)`;
    else return `(${remainingMinutes} and ${remainingSeconds} left)`;
  }
};
