const Hashtable = function () {
  let table = {}
  let storage = []
  let storagelimit = 1000

  table.insert = function (key, value) {
    let index = hashingfn (key, storagelimit)
    storage[index] = storage[index] || []

    let bucket = storage[index]
    for (let i = 0; i < bucket.length; i++) {
      let pair = bucket[i]
      if (pair[0] === key) {
        pair[1] = value
      }
    }
    bucket.push([key, value])
  }
}
