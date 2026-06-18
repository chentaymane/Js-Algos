# JavaScript Skills

A record of what I learned working through JavaScript exercises across 8 topic areas.

---

## Async JavaScript

The biggest shift here was understanding that async is about *coordination*, not just waiting. I learned to think in terms of what runs concurrently vs. sequentially, and how to control that.

- Rebuilt `Promise.all` and `Promise.race` from scratch — which forced me to understand how promises actually resolve and reject internally, not just how to consume them
- Understood the difference between running tasks in **series** (one finishes, then the next starts) vs. in **parallel** (all start at once), and when each makes sense
- Learned **debounce** and **throttle** — two of the most practical patterns in frontend work. Debounce delays execution until input stops; throttle limits how often something can fire. Also implemented the leading-edge variant of debounce, which fires immediately then blocks further calls
- Built retry logic — attempting an operation multiple times before giving up, which taught me how to chain promises in a loop
- Practiced tagged template literals that resolve promise values — an unusual but sharp use of async + string interpolation

---

## Rebuilding Built-ins

The point of this section was to stop treating `map`, `filter`, and `reduce` as black boxes.

- By implementing `filter`, `reject`, and `partition` manually I understood that they're all just loops with a condition — nothing magic
- Rebuilding `reduce` made it clear why it's the most powerful of the three: any transformation on a list can be expressed as a fold
- Implemented **currying** — converting a function that takes multiple arguments into a chain of single-argument functions. This unlocked understanding of partial application and why functional code can be so composable
- Implemented **function composition** (left-to-right pipeline) — learned to think about data flowing through a series of transformations rather than nested function calls

---

## Data Types and Language Fundamentals

This is where I got comfortable with JavaScript's actual behavior, not assumptions about it.

- Got clear on `const` vs `let` vs mutation — `const` prevents reassignment but doesn't freeze the value; `Object.freeze` is needed for true immutability
- Learned the difference between **value types** (primitives) and **reference types** (objects, arrays) and why this matters when passing things to functions
- Practiced type coercion edge cases — when JavaScript silently converts types and when to use strict equality (`===`) to avoid bugs from it
- Worked with number utilities (sign, absolute value, min/max) in ways that made arithmetic logic feel routine rather than error-prone

---

## DOM Manipulation

This section taught me to build interfaces without any framework — just the browser APIs.

- Learned to create, style, and append elements entirely in JavaScript using `document.createElement`, `classList`, and inline styles — the same operations frameworks like React do invisibly
- Practiced **event-driven programming**: responding to clicks, key presses, mouse movement, form submissions, and slider input
- Learned how to keep UI in sync with data — when a slider changes, all affected elements update. This is the core idea behind reactive UI
- Built a complete form-to-DOM flow: user submits text → card is created → card appears on screen. Simple, but it covers the full loop
- Worked with keyboard events and learned that every key has a code — useful for building shortcuts or games

---

## Loops and Recursion

This section was about algorithmic thinking — solving problems that can't be done in a single expression.

- Learned to recognize when a problem is **recursive in nature** (the solution to a big problem is built from solutions to smaller versions of the same problem)
- Implemented **backtracking** — trying a path, going deeper, and undoing the step if it doesn't lead to a valid solution. Used it to find all combinations of numbers that sum to a target
- Practiced writing pattern generators (pyramids, triangles) which require thinking in terms of row/column math
- Rebuilt array utilities like `flat`, `chunk`, `indexOf`, and `slice` from scratch — each one forced me to think about edge cases (empty input, negative indices, nested structures)
- Got comfortable with recursion on nested data — traversing or transforming something that can be arbitrarily deep

---

## Objects

Working with objects is unavoidable in JavaScript. This section made object manipulation feel natural.

- Understood **deep copy vs shallow copy** — a shallow copy shares nested references (dangerous), a deep copy is fully independent. Implemented deep copy recursively, handling arrays, RegExp, and primitives correctly
- Learned to work with `Object.entries`, `Object.keys`, `Object.values` — treating an object as a list of key-value pairs opens up functional transformations on it
- Practiced **pick and omit** — returning a subset of an object's keys, which is a pattern used constantly in APIs and state management
- Learned to invert an object (swap keys and values), merge objects, and transform keys/values without mutating the original

---

## Regular Expressions

Regex went from intimidating to a reliable tool for pattern problems.

- Learned the core building blocks: character classes, quantifiers, anchors, groups, and alternation
- Practiced **capture groups** — extracting specific parts of a match, not just finding whether something matches
- Wrote a real IP address validator — which requires thinking carefully about what a valid octet looks like and how to distinguish valid/invalid formats in a string
- Built URL and price extractors — learned that greedy vs lazy matching makes a big difference in what gets captured
- Gained confidence that regex is the right tool when: the pattern is structural, the input is text, and you need extraction or validation

---

## Date and Time

The `Date` object in JavaScript has quirks. This section made them familiar rather than surprising.

- Learned the gotchas: months are 0-indexed, `getDay()` returns 0 for Sunday, and two `Date` objects for the same moment are not `===` equal
- Implemented a **cron expression matcher** — parsing a `* * * * *` string and checking each field against a real date's minutes, hours, day, month, and weekday. This tied together string parsing, type conversion, and date methods
- Calculated calendar values from scratch: day of the year, leap year detection, finding all Sundays in a month — each one required understanding how the calendar's arithmetic actually works
- Practiced **date arithmetic** — adding days/weeks, comparing dates, building date ranges — the operations that come up in any scheduling or calendar feature
