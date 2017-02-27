//IIFE - Immediately-Invoked Function Expressions,
//http://benalman.com/news/2010/11/immediately-invoked-function-expression/

// Either of the following two patterns can be used to immediately invoke a function expression, utilizing the function's execution context to
// create "privacy."
(function(){ /* code */ }()); // Crockford recommends this one
(function(){ /* code */ })(); // But this one works just as well

// Because the point of the parens is to disambiguate  between function expressions and function declarations, they can be
// omitted when the parser already expects an expression (but please see the "important note" below).
var i = function(){ return 10; }();
true && function(){ /* code */ }();
0, function(){ /* code */ }();

// If you don't care about the return value, or the possibility of making  your code slightly harder to read, you can save a byte by just prefixing
// the function with a unary operator.
!function(){ /* code */ }();
~function(){ /* code */ }();
-function(){ /* code */ }();
+function(){ /* code */ }();
