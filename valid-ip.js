function findIP(str) {
  const reg = /\b(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})(:\d{1,5})?\b/g

  let matches = str.match(reg) || []

  
  return matches.filter(ip => {
    if (!ip.includes(':')) return true
    let port = parseInt(ip.split(':')[1])
    return port <= 65535
  })
}