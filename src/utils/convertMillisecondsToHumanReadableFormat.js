export default function convertMillisecondsToHumanReadableFormat(milliseconds) {
  let unit = 'milliseconds';

  if (milliseconds >= 1000) {
    milliseconds /= 1000;
    unit = 'seconds';
  } else if (milliseconds >= 60 * 1000) {
    milliseconds /= 60 * 1000;
    unit = 'minutes';
  } else if (milliseconds >= 3600 * 1000) {
    milliseconds /= 3600 * 1000;
    unit = 'hours';
  }

  return milliseconds.toFixed(2) + ' ' + unit;
}
