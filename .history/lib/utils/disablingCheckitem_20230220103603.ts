export const disablingCheckitem = (
  remainingDays: number,
  remainingHours: number,
  remainingMinutes: number,
  remainingSeconds: number
) => {
  if (remainingDays && remainingHours && remainingMinutes && remainingSeconds) {
    if (
      remainingDays > 0 &&
      remainingHours > 0 &&
      remainingMinutes > 0 &&
      remainingSeconds > 0
    )
      return false;
    else return true;
  }
  return false;
};
