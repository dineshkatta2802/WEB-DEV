/*
IIFE - Immediately Invoked Function Expression
An IIFE is a function which executes immediately after itis defined that is it doesn't need to be called explictly

Syntax:
        (function(parameters...){
            ...statemets...
        })(Arguments...)

Easy way to remeber
1. write a function just like Function Expression w/o assigning it to the variable and no semicolon at the end
function(){..statements...}

2. now wrap the whole thing(funtion) in a paranthesis just like below
(function(){..statements...})

3.Add argumnets at the end and add semicolon at the end
(function(){..statements...})(Arguments);
-Since the argumnents atre given in the same line so there is no need to call the function explictly

Check out the below example
*/

(function(n,m){console.log(n+m);
})(5,10);
//15