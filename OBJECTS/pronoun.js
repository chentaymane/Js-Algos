function pronoun(str) {
  let result = {};
  let arr = ['i', 'you', 'he', 'she', 'it', 'they', 'we'];
  let words = str.toLowerCase().match(/\w+/gi);
  for (let i = 0; i < words.length; i++) {
    let current = words[i];
    let next = words[i + 1];
    if (arr.includes(current)) {
      if (!result[current]) {
        result[current] = { word: [], count: 0 };
      }
      result[current].count++;
      if (next && !arr.includes(next)) {
        result[current].word.push(next);
      }
    }
  }
  return result;
}