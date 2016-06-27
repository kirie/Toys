let LinkedList = function (val) {
  let list = {}
  list.head = null
  list.tail = null

  list.addToTail = function (val) {
    let newNode = Node(val)
    if (!list.head) {
      list.head = newNode
    }
    if (list.tail) {
      list.tail.next = newNode
    }
    list.tail = newNode
  }

  list.removeHead = function (val) {
    if (!list.head) {
      return null
    }
    let temp = list.head
    list.head = list.head.next
    return temp
  }

  list.contains = function (val) {
    let node = list.head
    while (node) {
      if (node.value === val) {
        return true
      }
      node = node.next
    }
    return false
  }
  return list
}

let Node = function (val) {
  let node = {}
  node.value = val
  node.next = null
  return node
}
