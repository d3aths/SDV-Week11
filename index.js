/*recursion function (repeatedly calls itself until asked to stop)

function recuFunc (param)
{
    recuFunc(param)
}

function recuFuncOne(param)
{
    recuFunctionTwo(param)
}

function recuFunctionTwo(param)
{
    recuFuncOne(param)
}


must have a stopping point otherwise will continue forever which is called base function/case
*/
/*
function test (x)
{
    const result = ("Is this a recursion function?")
    if (result === true)
    {
        //begin
    }
    test(param) //call recursive here
}
*/


//factorial function
function number(num)
{
    let total = 1
    for (let n = num; n > 1; n--)
    {
        total = total * n
    }
    return total
}
console.log(number(4))
//honestly no idea what this code does, maths hurt my brain
//apparently takes each number and multiples it by the numbers before it
//so 4 * 3 * 2 for 4

function countDownFrom(number)
{
    for (let i = number; i > 0; i--)
    {
        console.log(i);
    }
}
countDownFrom(5)
//this function using a for loop counts down from 5 using the loop

//we can do this even simpler with a recursion function as so
//even though it has more lines of code, it doesnt work with making new variables like the loop does

function recuCountDownFrom(number)
{
    if (number === 0)
    {
        return
    }
    console.log(number)
    recuCountDownFrom(number - 1)
}
recuCountDownFrom(5)

//the if statement here is the base case which makes it stop when the number hits zero

function test(n) //initialize test function
{
    if(n === 1 || n === 0) //if n equals 1 or 0
    {
        return 1 //display 1
    }
    return n * test(n-1) //if n isnt 1 or 0 then display factorial of (n)
}
console.trace(test(3)) //output test function
//still lost on this function, dont think i would be able to use it no matter how much its explained
//dont know how this n-1 ends up making a factorial or whatever