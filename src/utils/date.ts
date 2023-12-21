const currentDate = new Date();

export const currentMonthIndex = currentDate.getMonth();

export const currentYear = currentDate.toLocaleString('en-US', { year: '2-digit' });

export const months = Array.from({ length: 12 }, (_, index) => {
  const date = new Date(currentDate.getFullYear(), index, 1);
  return date.toLocaleString('en-US', { month: 'long' });
});
