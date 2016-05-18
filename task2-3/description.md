# JS Training task 2 and 3

I decide to merge this two tasks. Because you covered a lot of
basic array tasks in previous work. So there is will be task related
to Functional Programming and both array and objects in JavaScript.

## Functional pattern focus.

### Memoizer.
Given function which may receive one argument, like that
```JavaScript
function factorial(n) {
    var res = 1;
    while(n !== 1) {
        res *= n--;
    }
    return res;
}
```
Implement function which will return **memoized** version of any given function which can apply single argument. For testing you may use any of function which
you implemented during 1st task. For those who get **_Tremendous Respect_**
testing on SemiColonSON is **mandatory**!
Anyway, memoizer should work for ANY **(!!!)** function which is receive single argument.
- Advanced part:
    Create such function which will memoize function with arbitrary arguments count.

    ```JavaScript
    var factorialMemo = memoizer(factorial); //factorialMemo has caching now.
    ```

        Tip: Function.prototype.bind, Function.prototype.apply really can help you out!

### Is Array Like object checker.
Implement function which will determine is given object array like or not.

### Object Debehaviorizer.
Implement function which will receive object as argument, and remove any behavior related properties from it, leave object with only state related properties. In case if object properties (or object itself, Object.freeze()/seal()) is non-configurable try to perform appropriate actions, or create proper error, which can be handled by try/catch/finally. Function should return new object with only state within. Or mutate existing object and return array with all behavior in it depending on second boolean argument (_isBehaviorSeparate_) which is supplied or not;
```JavaScriptя 
var stateObj = debehaviorize(veryComplicatedObject);
var onlyBehavior = debehaviorize(veryComplicatedObject, true);
// veryComplicatedObject is now same to behaviorLess;
```
It must work recursively.

- Advanced part:
    Create function which is perform reverse of such action, or apply behavior to any other object.

### SemiColonSON Evolved (For those who created SemiColonSON or for those who didn't it's you chance now!)
If you have advanced version use only it.
Upgrade SemiColonSON so it can parse strings what contains object methods, there where Function really helps!
```JavaScript
var adder = new Function('a', 'b', 'return a + b');
// Yeah it's actually can create function with arguments;
adder(2, 3); //returns 5;
```
For method determination in string use following token:
```
";key,value;methodName,|return true|;" => { key: 'value',  method: function() {return true;} }
";key,value;methodName,|function (a) { return a + 1; }|;" => { key: 'value',  method: function(a) {return a + 1;} }
```
- Advanced part:
    Create Reverse version, to **stringify** objects, with or without methods.
    Also use second argument, callback - which is supplied will used to remove any functions from object to create data object.

### Utility Module (STKit)
All previously implemented functions must be added to your own utility module. Let's call it "STKit" ("STKit" for "STudentsKit", you can name it in you own way, but let be a clever people and give it some logical names:). Try to create it in _proper way_, remember about global scope, accessibility, maybe some additional configuration and enhancements. This is must be real utility library. Which anyone can use for their work, so don't forget about proper (documentation)[http://usejsdoc.org/]. This is where you can apply some of your creative thinking. But mandatory is what I can use library like that:
```JavaScript
var bhArr = STKit.debehaviorize(someObj);
myObject.someMethod = STKit.memoizer(myObject.someMethod);
```

## Task Requirements.
Since this task I will perform static code quality analysis, so you need install (somehow by yourself or ask for help, or ask me, whatever) JSHint and configure it with file (_.jshintrc_) which I will provide to you. *Check repo for it*.  In case, if I will find linter error in your code after it was submitted. This will affecting your mark, and there no excuse.
* All code must be written in single style. With using of **IIFE** (global scope is restricted!).
* Use hoisting based Revealing Module Pattern.
* ES6 Features (let and etc) is **restricted**.
* Use code style [guide](https://google.github.io/styleguide/javascriptguide.xml).
* Any naming styles except camel case is **restricted**.
* JSHint errors are **prohibited**.
* JSHInt warnings are allowed with **mandatory** comments for explanation.
* Use separate files, create logical structure for solution.
* And I beseech you, NO MORE CLIENT SIDE CODE! Please. ![No, Please](https://media.giphy.com/media/12XMGIWtrHBl5e/giphy.gif)

        Violation any of this rules will lead to penalty.

And remember: *Ignorance of the law is no excuse!*

#### Appendix
##### JSHint installation and usage.
This tool is really simple, you can find it online, I am integrated it in 3 different text editor (Sublme Text, Atom and Visual Studio Code) or integrate config in IDE (I knew what some of you use WebStorm, hope it's legal...), or you can just use it from command line with path to file which is you want to lint as arguments. So there is only one advice for those who will not use it within editor: don't use it only after all work is done. You will find wall of errors and warnings, some of it can be hard to fix without big reworks, so use it after some piece of work is performed, maybe for each task maybe more often.
* [Installation Guide can be found here](http://jshint.com/install/)
* [Usage and configuration ways](http://jshint.com/docs/)

If you will have questions about code styles, feel free to ask. **Good Luck!**
