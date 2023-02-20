export const getDateTime = (date: Date) => {
  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const formattedTime = date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
  const dueDate = date.getTime() > new Date().getTime();

  return { formattedDate, formattedTime, dueDate };
};
