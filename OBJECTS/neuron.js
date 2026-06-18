function neuron(data) {
  const result = {}

  for (const entry of data) {
    // Split into "Type: content" and response text
    const [typePart, response] = entry.split(' - Response: ')

    // Split type and content
    const colonIdx = typePart.indexOf(': ')
    const type     = typePart.slice(0, colonIdx).trim()
    const content  = typePart.slice(colonIdx + 2).trim()

    // Category key: lowercase the type as-is ("Questions" -> "questions")
    const category = type.toLowerCase()

    // Item key: lowercase, strip punctuation, spaces to underscores
    const itemKey = content.toLowerCase().replace(/[?!]/g, '').trim().replace(/\s+/g, '_')

    // Label key: singular form of category ("questions" -> "question", "affirmations" -> "affirmation")
    const labelKey = category.endsWith('s') ? category.slice(0, -1) : category

    if (!result[category]) result[category] = {}

    if (!result[category][itemKey]) {
      result[category][itemKey] = { [labelKey]: content, responses: [] }
    }

    result[category][itemKey].responses.push(response.trim())
  }

  return result
}

// // Test
// console.log(JSON.stringify(neuron([
//   'Questions: what is ounces? - Response: Ounce, unit of weight in the avoirdupois system',
//   'Questions: what is ounces? - Response: equal to 1/16 pound (437 1/2 grains)',
//   'Questions: what is Mud dauber - Response: Mud dauber is a name commonly applied to a number of wasps',
//   'Orders: shutdown! - Response: Yes Sr!',
//   'Orders: Quote something! - Response: Pursue what catches your heart, not what catches your eyes.',
// ]), null, 2))

// console.log(JSON.stringify(neuron([
//   'Questions: how are you? - Response: well thanks, and you?',
//   'affirmations: i am fine - Response: cool',
//   'affirmations: i am fine - Response: awesome',
//   'Orders: turn on the lights! - Response: done',
// ]), null, 2))