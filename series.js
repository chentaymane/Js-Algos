const series = async (fns) => {
  const results = [];
  for (const fn of fns) {
    results.push(await fn());
  }
  return results;
};