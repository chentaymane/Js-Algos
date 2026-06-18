const all = (obj) => {
  const keys = Object.keys(obj);
  return new Promise((resolve, reject) => {
    const result = {};
    let remaining = keys.length;

    if (remaining === 0) return resolve({});

    keys.forEach(key => {
      Promise.resolve(obj[key])
        .then(value => {
          result[key] = value;
          remaining--;
          if (remaining === 0) resolve(result);
        })
        .catch(reject);
    });
  });
};