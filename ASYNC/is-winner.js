async function isWinner(country) {

  let winner;
  try {
    winner = await db.getWinner(country);
  } catch {
    return `${country} never was a winner`;
  }

 
  if (winner.continent !== 'Europe') {
    return `${country} is not what we are looking for because of the continent`;
  }

  let results;
  try {
    results = await db.getResults(winner.id);
  } catch {
    return `${country} never was a winner`;
  }

  if (results.length < 3) {
    return `${country} is not what we are looking for because of the number of times it was champion`;
  }

  const years = results.map(r => r.year).join(', ');
  const scores = results.map(r => r.score).join(', ');
  return `${country} won the FIFA World Cup in ${years} winning by ${scores}`;
}