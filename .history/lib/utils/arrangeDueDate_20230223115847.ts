export const arrangeDueDate = (
  remainingDays?: number,
  remainingHours?: number,
  remainingMinutes?: number,
  remainingSeconds?: number
): string | undefined => {
  if (remainingDays && remainingHours && remainingMinutes && remainingSeconds) {
    if (remainingDays > 0 && remainingHours > 0)
      return `(${remainingDays} days and ${remainingHours} hours left to finish)`;
    else
      return `(${remainingMinutes} minutes and ${remainingSeconds} seconds left to finish)`;
  }
};
