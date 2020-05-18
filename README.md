# SDV-Week11

## Linked Lists
Linked lists are a way to organize data in javascript. They have two different kinds, single linked list and double linked list. You can think of them as kinda like a snake, each one will have a head and a tail, and inbetween is the nodes. Each object in the list holds data. It is quite similar to an array but the advantage of using a linked list instead is that you can easily add, remove, and replace elements without disrupting the entire array. A disadvantage would be that when you search through a linked list, you must do it sequentially, so starting from the head all the way to the tail, you can't just access whatever node you want without having to go through all the previous ones.

Cases where using a linked list would be valuable would be in game development, where you have items that need to be rendered based on proximity to the player/camera, and they need to render in and out accordingly. A GPS giving instructions to a location could store each step in a single linked list, passing through it as you arrive at each step. Back and forward buttons on a browser could use a double linked list, as would undo and redo functions in image editing software.

![Linked lists](https://miro.medium.com/max/1230/1*iMYmkYDCSrXXdwpbqm-ekA.jpeg)  
*An example of both kinds of linked lists, from an article on medium.com*


`const otherlist = new LinkedList();`  
`otherlist.addToHead(100);`  
`otherlist.addToHead(200);`  
`console.log(otherlist);`  

This is a piece of code taken from hackernoon.com's article on linked lists, showing how you add information to your list. That code will put the first line you entered down at the *tail* of the list, since it's value is going in first, it gets shoved to the end. So the list will end up like this, which seems somewhat backwards to me. Alternatively you can use the same code but addToTail (of course you need the function first before both of these will work) for a code that will add your first line to the head, then work its way left to right with the rest of the input.
Head | Node | Tail
-----|------|-----
300 | 200 | 100


## Recursion
Recursion is a function that calls on itself until asked to stop. For example some use cases would be searching for something until you find it. If you find it, stop, if you don't, keep going (using the recursive code) until you do.
Advantages to using recursive code is that it can sometimes be simpler and less cluttery than writing a loop function or whatever other solution you have. It is also better at following a tree structure, ie folders then subfolders, like traversing down a family tree until it finds the entry it's looking for.  
The disadvantages are that it can actually sometimes be slower and use more memory than a regular code, depending on how complicated your data is that you use recursion for.

![Recursion](https://miro.medium.com/max/1400/1*dXFC8vq6xJ8Ud1Zeu24eUQ.png)  
*An image comparing complexity of loops vs recursion, from freecodecamp*

A stack is the data structure that works with recursion, it operates with Last In, First Out. Recursion stores all the varibles it has gone over in the stack as it works, and then goes back over them to solve the problem. Below is a diagram of how this works

![Recursion stack](https://helloacm.com/wp-content/uploads/2018/05/first-in-last-out-stack.jpg)  
*Recurison stack from helloacm.com*

There is quite a few real world examples of recursion. A simple one would be looking at russian dolls.
`function openDoll(doll)`  
`{`  
`if (doll(isEmpty())`  
`return doll`  
`}`  
`openDoll(doll.open)`  
If the dolls are empty, stop, if not, keep opening. Another simple one without code is cutting up meat to fit in a dish. If the meat fits, stop, if there is still more room, keep cutting.
