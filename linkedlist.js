function LinkedList()
    {
    this.head = null
    this.tail = null
    }
    //constructs the head and tail of the list, assigns the values null to them

function Node(value, next, prev)
    {
    this.value = value
    this.next = next
    this.prev = prev
    }
    //constructs the nodes and adds prev and next methods to them, being a double linked list

LinkedList.prototype.addToHead = function(value)
    {
    const newNode = new Node(value, this.head, null) //creates a variable in which to store a new node object. value will be the value we want to put in the node. next we have this.head which means the next property is this.head, and null is moved to prev, which means every value we pass will be a new head (since if prev is null that means you have a head
    if (this.head) this.head.prev = newNode  //if a head node exists then the previous value is going to be a new node
    else this.tail = newNode //if there isnt, then the tail is created
    this.head = newNode
    }
    //creates the addToHead method inside linkedlist.prototype so as to not to duplicate the method and save memory

const list = new LinkedList()
list.addToHead(100)
list.addToHead(200)
list.addToHead(300)
//adds each value to the list

console.log(list)


console.log(`Middle node value: ${list.head.next.value}`);
//a code to access the middlde nod's value

LinkedList.prototype.addToTail = function(value)
{
    const newNode = new Node(value, null, this.tail)
    if (this.tail) this.tail.next = newNode
    else this.head = newNode
    this.tail = newNode
}
//the same code as addToHead but this time we're adding to the tail, which imo is easier since the values you pass go in better order

const newlist = new LinkedList()
newlist.addToTail(1)
newlist.addToTail(2)
newlist.addToTail(3)
newlist.addToTail(4)
newlist.addToTail(5)

console.log(newlist)
//note that console logging the list here doesn't display all the values, only the head and tail and the nodes beside it?

console.log(`Middle node value: ${newlist.head.next.next.value}`)
//a budget way of displaying the middle node (3 is next to the node thats next to the head)


LinkedList.prototype.search = function(searchValue)
{
    let currentNode = this.head //currentnode starts from the head
    
    while(currentNode) {
      if (currentNode.value === searchValue) return currentNode; //if the value of the currentnode is whatever you search for, then display it
      currentNode = currentNode.next;  //keep searching the next node until you find search value
    }
    return null; //otherwise disply null
  }
  //code for searching the list for a value

console.log(newlist.search(3))


//code examples from hackernoon