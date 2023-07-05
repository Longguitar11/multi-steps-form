import { GregorianCalendar, CalendarDate } from "@internationalized/date";

export const dateToCalendarDate = (value: Date) => {
  if (!value) return value;

  if (value instanceof CalendarDate) {
    return value;
  }

  return new CalendarDate(
    value.getFullYear(),
    value.getMonth() + 1,
    value.getDate()
  );
};

export function createCalendar(identifier: string) {
  switch (identifier) {
    case "gregory":
      return new GregorianCalendar();
    default:
      throw new Error(`Unsupported calendar ${identifier}`);
  }
}
