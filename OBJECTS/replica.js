function replica(target, ...obj) {
  for (let i = 0; i < obj.length; i++) {
    let keys = Object.keys(obj[i]);
    for (let elment of keys) {
      let value = obj[i][elment];
      if (typeof value != 'object' || value instanceof RegExp) {
        target[elment] = value;
      } else if (Array.isArray(value)) {
        target[elment] = value;
      } else {
        if (
          typeof target[elment] !== 'object' ||
          Array.isArray(target[elment])
        ) {
          target[elment] = {};
        }
        replica(target[elment], value);
      }
    }
  }
  return target;
}