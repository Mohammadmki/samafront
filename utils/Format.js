export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('fa-IR', {
    style: 'decimal'
  }).format(amount);
};