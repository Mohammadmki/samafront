import DatePicker from "react-multi-date-picker";
import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import gregorian from "react-date-object/calendars/gregorian";
import gregorian_en from "react-date-object/locales/gregorian_en";
import { CalendarDotsIcon } from "@phosphor-icons/react";

export default function DateSelect({
  placeholder,
  data,
  setdata,
  name,
  title,
  error,
}) {
  // تبدیل تاریخ ذخیره‌شده میلادی به تاریخ قابل نمایش شمسی
  const pickerValue = data?.[name]
    ? new DateObject(data[name], {
        calendar: gregorian,
        locale: gregorian_en,
      }).convert(persian, persian_fa)
    : null;

  const changeHandler = (value) => {
    if (!value) {
      setdata((prev) => ({
        ...prev,
        [name]: "",
      }));
      return;
    }

    // تبدیل تاریخ انتخاب‌شده شمسی به میلادی
    const gregorianDate = value
      .convert(gregorian, gregorian_en)
      .format("YYYY-MM-DD");

    setdata((prev) => ({
      ...prev,
      [name]: gregorianDate,
    }));
  };

  return (
    <div className="flex flex-col w-full">
      {title && (
        <label htmlFor={name} className="mb-2 text-neutral-700">
          {title}
        </label>
      )}

      <DatePicker
        value={pickerValue}
        onChange={changeHandler}
        locale={persian_fa}
        calendar={persian}
        calendarPosition="bottom-right"
        render={(value, openCalendar) => (
          <div className="relative w-full">
            <CalendarDotsIcon
              className="w-5 h-5 absolute end-3 top-1/2 -translate-y-1/2 cursor-pointer"
              onClick={openCalendar}
            />

            <input
              id={name}
              value={value}
              onFocus={openCalendar}
              readOnly
              placeholder={placeholder}
              className={`w-full pe-10 transition-all duration-200 bg-white rounded-lg p-2 border ${
                error?.[name]
                  ? "border-red-500"
                  : "border-neutral-200"
              } focus:border-blue-600 outline-none placeholder:text-sm text-black`}
            />
          </div>
        )}
        inputClass="w-full"
        className="w-full"
      />

      <p className="text-sm mx-2 text-red-500">
        {error?.[name] && error[name]}
      </p>
    </div>
  );
}