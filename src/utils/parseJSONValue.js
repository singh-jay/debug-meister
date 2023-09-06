export default function parseJSONValue(value, parseJSON = true) {
  if (!parseJSON) return value;
  try {
    const parsedJSON = JSON.parse(value);
    return parsedJSON;
  } catch (e) {
    return value;
  }
}
