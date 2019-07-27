export const getTime = (longTimeString) => {
 const time = new Date(longTimeString);
 const mm = time.getMinutes();
 const hh = time.getHours();
 const ampm = hh > 12 ? "pm" : "am";
 return `${hh>12?hh-12:hh}:${mm<10?'0'+mm:mm} ${ampm}`;
}