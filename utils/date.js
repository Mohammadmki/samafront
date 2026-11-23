export const formatPersianDate = (date) => {
  if (!date) return "-";

  return date
    .slice(0, 10)
    .replaceAll("-", "/")
    .replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[digit]);
};