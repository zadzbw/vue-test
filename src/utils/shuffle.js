export default function shuffle(arr) {
  const result = arr.concat();
  for (let i = 0; i < arr.length; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    if (i !== j) {
      [result[i], result[j]] = [result[j], result[i]];
    }
  }
  return result;
}
