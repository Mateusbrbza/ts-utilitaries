export function formatToPercentage(number: number) {
  return new Intl.NumberFormat('default', {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(number / 100);
};
