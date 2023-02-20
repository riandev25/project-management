export const arrangeDueDate = (
  remainingDays?: number,
  remainingHours?: number,
  remainingMinutes?: number,
  remainingSeconds?: number
) => {
  if (remainingDays && remainingHours && remainingMinutes && remainingSeconds) {
    if (remainingDays > 0 && remainingHours > 0)
      return `(${remainingDays} days and ${remainingHours} hours left)`;
    else
      return `(${remainingMinutes} minutes and ${remainingSeconds} seconds left)`;
  }
};
