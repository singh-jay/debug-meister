export default function JSONStringify(value) {
  if (!value) return value;
  try {
    const stringifiedJSON = JSON.stringify(value);
    return stringifiedJSON;
  } catch (e) {
    return value;
  }
}
