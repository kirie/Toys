/**
Write a function that returns true if a linked list contains a cycle, or false if it terminates somewhere.

Explanation:

Generally, we assume that a linked list will terminate in a null next pointer, as follows:

A -> B -> C -> D -> E -> null

A ‘cycle’ in a linked list is when traversing the list would result in visiting the same nodes over and over.

This is caused by pointing a node in the list to another node that already appeared earlier in the list. Example:

 A -> B -> C
      ^    |
      |    v
      E <- D
**/
var hasCycle = function (linkedList) {
  var landTurtle = linkedList
  var largeRabbit = linkedList.next
  while (true) {
    if (!largeRabbit || !largeRabbit.next) {
      return false
    }
    else if (largeRabbit === landTurtle || largeRabbit.next === landTurtle) {
      return true
    }
    else {
      landTurtle = landTurtle.next
      largeRabbit = largeRabbit.next.next
    }
  }
}

