const sourceObject = {
  num: 42,
  bool: true,
  str: 'some text',
  log: console.log,
}
function get(v1) {
  return sourceObject[v1];
}

function set(v1, v2) {
  sourceObject[v1] = v2;
  return v2;
}