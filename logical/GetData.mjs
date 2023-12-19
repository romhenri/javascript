export function getDate() {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}
export function getDateFormatted() {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}
export function getTime() {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  return `${hour}:${minute}`;
}
export function getFullTime() {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  return `${hour}:${minute}:${second}`;
}
export function getTimeFormatted() {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  return `${hour}.${minute}`;
}
export function getFullTimeFormatted() {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  return `${hour}.${minute}.${second}`;
}
export function getLink() {
  try {
    const link = window.location.href;
    return link;
  } catch (error) {
    return console.log(error.message);
  }
}
export function getBrowser() {
  try {
    const browser = window.navigator.userAgent;
    return browser;
  } catch (error) {
    return console.log(error.message);
  }
}

// console.log(getDate()); // Out: 24/12/2020
// console.log(getDateFormatted()); // Out: 24-12-2020
// console.log(getFullTime()); // Out: 12:00:00
// console.log(getTime()); // Out: 12:00
// console.log(getTimeFormatted()); // Out: 12.00
// console.log(getFullTimeFormatted()); // Out: 12.00.00
// console.log(getLink()); // Out: http://localhost:3000/
// console.log(getBrowser()); // Out: Mozilla/5.0...