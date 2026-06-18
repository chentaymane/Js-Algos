function queryServers(serverName, q) {
  return Promise.race([
    getJSON(`/${serverName}?q=${q}`),
    getJSON(`/${serverName}_backup?q=${q}`)
  ]);
}

async function gougleSearch(q) {
  const timeout = new Promise((_, reject) =>
    setTimeout(() => reject(Error('timeout')), 80)
  );

  const search = Promise.all(['web', 'image', 'video'].map(server =>
    queryServers(server, q)
  ));

  const [web, image, video] = await Promise.race([search, timeout]);
  return { web, image, video };
}