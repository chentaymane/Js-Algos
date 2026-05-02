function findIP(str) {
  const results = [];
  const parts = str.split(/\s+/);

  for (const part of parts) {
    const [host, port] = part.split(':');
    const octets = host.split('.');

    if (octets.length !== 4) continue;

    const validIP = octets.every(o => {
      if (o !== String(parseInt(o, 10))) return false; // rejects leading zeros
      const n = parseInt(o, 10);
      return n >= 0 && n <= 255;
    });

    if (!validIP) continue;

    if (port !== undefined) {
      const p = parseInt(port, 10);
      if (isNaN(p) || p < 1 || p > 65535) continue;
    }

    results.push(part);
  }

  return results;
}