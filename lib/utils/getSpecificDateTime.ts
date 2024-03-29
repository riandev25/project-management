interface IGetSpecificDateTime {
  remainingDays: number;
  remainingHours: number;
  remainingMinutes: number;
  remainingSeconds: number;
}

export const getSpecificDateTime = (date: Date): IGetSpecificDateTime => {
  const today = new Date();
  const timeDiff = Math.abs(date.getTime() - today.getTime());
  const remainingDays = Math.floor(timeDiff / (1000 * 3600 * 24));
  const remainingHours = Math.floor((timeDiff / (1000 * 3600)) % 24);
  const remainingMinutes = Math.floor((timeDiff % (1000 * 3600)) / (1000 * 60));
  const remainingSeconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  return {
    remainingDays,
    remainingHours,
    remainingMinutes,
    remainingSeconds,
  };
};
