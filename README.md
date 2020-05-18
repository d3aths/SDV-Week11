# SDV-Week11

## Linked Lists
Linked lists are a way to organize data in javascript. They have two different kinds, single linked list and double linked list. You can think of them as kinda like a snake, each one will have a head and a tail, and inbetween is the nodes. Each object in the list holds data. It is quite similar to an array but the advantage of using a linked list instead is that you can easily add, remove, and replace elements without disrupting the entire array. A disadvantage would be that when you search through a linked list, you must do it sequentially, so starting from the head all the way to the tail, you can't just access whatever node you want without having to go through all the previous ones.

Cases where using a linked list would be valuable would be in game development, where you have items that need to be rendered based on proximity to the player/camera, and they need to render in and out accordingly. A GPS giving instructions to a location could store each step in a single linked list, passing through it as you arrive at each step. Back and forward buttons on a browser could use a double linked list, as would undo and redo functions in image editing software.

![Linked lists](https://miro.medium.com/max/1230/1*iMYmkYDCSrXXdwpbqm-ekA.jpeg)

*An example of both kinds of linked lists, from an article on medium.com*


`const otherlist = new LinkedList();
  otherlist.addToHead(100);
  otherlist.addToHead(200);
  console.log(otherlist);`

This is a piece of code taken from hackernoon.com's article on linked lists, showing how you add information to your list. That code will put the first line you entered down at the *tail* of the list, since it's value is going in first, it gets shoved to the end. So the list will end up like this, which seems somewhat backwards to me. Alternatively you can use the same code but addToTail (of course you need the function first before both of these will work) for a code that will add your first line to the head, then work its way left to right with the rest of the input.
Head | Node | Tail
-----|------|-----
300 | 200 | 100


## Recursion
