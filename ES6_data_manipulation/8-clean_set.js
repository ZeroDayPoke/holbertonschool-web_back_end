export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || !startString) return '';

  let result = '';

  for (const item of set) {
    if (item.startsWith(startString)) {
      result += `${item.replace(startString, '')}-`;
    }
  }

  return result.slice(0, -1);
}
