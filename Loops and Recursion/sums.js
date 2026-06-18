function sums(n) {
  const result = [];

  function backtrack(remaining, min, current) {
    if (remaining === 0) {
      result.push([...current]);
      return;
    }

    for (let i = min; i <= remaining; i++) {
      current.push(i);
      backtrack(remaining - i, i, current);
      current.pop();
    }
  }

  backtrack(n, 1, []);
  return result;
}


console.log(JSON.stringify(sums(1))); // [[1]]
console.log(JSON.stringify(sums(2))); // [[1,1],[2]]
console.log(JSON.stringify(sums(3))); // [[1,1,1],[1,2],[3]]
console.log(JSON.stringify(sums(4))); // [[1,1,1,1],[1,1,2],[1,3],[2,2],[4]]
console.log(JSON.stringify(sums(5)));