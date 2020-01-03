// like "Saturday, January 19"
Date.prototype.toShowingDateString = function () {
  const dow = daysOfWeek[this.getDay()];
  const month = monthsOfYear[this.getMonth()];
  const date = this.getDate();

  return `${dow}, ${month} ${date}`;
}

// Like "7:45 pm"
Date.prototype.toShowingTimeString = function () {
  const hr = this.getHours();
  const hour = hr > 12 ? hr - 12 : hr;
  const minute = this.getMinutes();
  const ampm = this.getHours() < 12 ? "am" : "pm";
  return `${hour}:${minute < 10 ? '0' + minute : minute} ${ampm}`
}

// Like "Mon" or "Tue"
Date.prototype.toShortDayOfWeekString = function () { return shortDaysOfWeek[this.getDay()] };

// A static (not instance method) Array of date objects
Date.getArrayOfDays = (howManyDays = 7) => [...Array(howManyDays).keys()].map(day => new Date(Date.now() + day * 24 * 60 * 60 * 1000));

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

/* eslint no-extend-native: 0 */