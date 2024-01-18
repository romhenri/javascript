export default function makeFirstCapital(string) {
  if (typeof string !== 'string') {
    return string; // Do nothing
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
};