//a function using recursion to check if a number is even

function isEven(number)
{
  if (number < 0) 
  {
    number = Math.abs(number) //if the number is less than zero, apply absolute (ignores if positive or negative)
  }
  if (number===0) 
  {
    return true //if number is zero then yes
  }
  if (number===1) 
  {
    return false //if number is 1 then no
  }
  else 
  {
    number = number - 2 //number keeps subtracting 2 from itself until it reaches either 1 or 0, where it is decided if its even or odd.
    return isEven(number)
  }
}
console.log(isEven(234))
console.log(isEven(-45))
