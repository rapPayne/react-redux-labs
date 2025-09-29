// like "Saturday, January 19"
export function toShowingDateString(date: Date): string {
  const dow = daysOfWeek[date.getDay()];
  const month = monthsOfYear[date.getMonth()];
  const dom = date.getDate();

  return `${dow}, ${month} ${dom}`;
}

// Like "7:45 pm"
export function toShowingTimeString(date: Date) {
  const hr = date.getHours();
  const hour = hr > 12 ? hr - 12 : hr;
  const minute = date.getMinutes();
  const ampm = date.getHours() < 12 ? "am" : "pm";
  return `${hour}:${minute < 10 ? '0' + minute : minute} ${ampm}`
}

// Like "Mon" or "Tue"
export function toShortDayOfWeekString(date: Date) { return shortDaysOfWeek[date.getDay()] }

// A static (not instance method) Array of date objects
export const getArrayOfDays = (howManyDays: number = 7): Array<Date> => [...Array(howManyDays).keys()].map(day => new Date(Date.now() + day * 24 * 60 * 60 * 1000));

const shortDaysOfWeek = [
  'Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat',
];
const daysOfWeek = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',
];
const monthsOfYear = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July',
  'August', 'September', 'October', 'November', 'December',
];
