function findIP(str) {
  const results = [];
  const matches = str.match(/[\d.:]+/g) || [];

  for (const part of matches) {
    const [host, port] = part.split(':');
    const octets = host.split('.');

    if (octets.length !== 4) continue;

    if (!octets.every(o => o === String(+o) && +o >= 0 && +o <= 255)) continue;

    if (port && (+port < 1 || +port > 65535)) continue;

    results.push(part);
  }

  return results;
}