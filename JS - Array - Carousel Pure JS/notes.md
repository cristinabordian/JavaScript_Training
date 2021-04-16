CONST naming in CAPS

Why we name a CONST value in CAPS

1. The value of a const can't be changed via reassignment and we cannot re-declare it. 

2. A const's scope can be global or local to a block of code in which it is declared. 

3. A cosnt must be initialized. Must specify the value of the const when it is declared. 

4. A const cannot cannot share its name with a function or variable

5. We can declare a CONST with uppercase or lowercase, but common convention is to use all-uppercase letters so they can be easily distinguished. 

6. Google JS Guide recommends naming const in uppercase
https://google.github.io/styleguide/javascriptguide.xml#Constants




TIMER IN JS

Any functions in JS can be executed at a set interval. In JS we can set a timer, a repetive execution at a set interval. When we want to set the interval ->

function (f)
setInterval( f, duration)