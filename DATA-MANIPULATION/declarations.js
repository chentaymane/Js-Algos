const escapeStr = "\`\\\/" + "\"\'";

const arr = Object.freeze([4, '2']);

const obj = Object.freeze({
  str: "string",
  num: 10,
  bool: true,
  undef: undefined
});

const nested = Object.freeze({
  arr: Object.freeze([4, undefined, '2']),
  obj: Object.freeze({
    str: "hello",
    num: 42,
    bool: true
  })
});


/*nested.obj.str="by"

console.log(nested)*/