export default function convertMillisecondsToHumanReadableFormat(milliseconds) {
  let unit = 'ms';

  if (milliseconds >= 1000) {
    milliseconds /= 1000;
    unit = 's';
  } else if (milliseconds >= 60 * 1000) {
    milliseconds /= 60 * 1000;
    unit = 'm';
  } else if (milliseconds >= 3600 * 1000) {
    milliseconds /= 3600 * 1000;
    unit = 'h';
  }

  return milliseconds.toFixed(2) + ' ' + unit;
}
