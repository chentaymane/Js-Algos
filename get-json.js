async function getJSON(path, params = {}) {

  // 1. build query string
  
    let query = ""

if (Object.keys(params).length > 0) {
  query = "?" + new URLSearchParams(params).toString()
}

  const url = path + query

  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(response.statusText)
  }


  const result = await response.json()


  if (result.error) {
    throw new Error(result.error)
  }

  return result.data
}