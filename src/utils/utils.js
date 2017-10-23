export function makeReactive (source) {
  const target = {}
  const keys = Object.keys(source)

  for (let i = 0; i < keys.length; i++) {
    let prop = keys[i]

    Object.defineProperty(target, prop, {
      enumerable: true,
      get: () => source[prop],
      set: (val) => { source[prop] = val }
    })
  }

  return target
}

