export default function (payload, duration = 1500, probability = 0.8) {
  const v = Math.random();
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (v < probability) {
        resolve({
          payload,
          code: 1,
        });
      } else {
        reject({
          payload,
          code: 0,
        });
      }
    }, duration);
  });
}
