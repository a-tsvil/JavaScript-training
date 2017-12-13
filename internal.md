# Task 1: Essentials

You will need to create some (maybe weird) functions which signed by Haskell-like function definitions signatures (not real Haskell Functions definition!)

  -> arrow stands for `return`
  
  Either on | two reads like 'one or two'

## 1. Create function called mapAny

`mapAny :: Either arr | (Either {obj} | {arr-like}), (el -> newEl), Bool toArray -> Either {obj} | [arr]`

Arguments:
* array, object or [array-like object](http://www.nfriedly.com/techblog/2009/06/advanced-javascript-objects-arrays-and-array-like-objects/)
* functions which is called for each element, return value of this function could be a property of newly created data,
* toArray - boolean value, if set to **true** function should always return new array regardless which data structure was supplied.
Function should iterate over all iterable props (exclude for inherited ones) or elements of array, in case if ther both, iterable properties and indexed elements it should iterate both

## 2. Create function called composeZ

`composeZ :: ...(a -> any) -> a -> b`

Function accpets any count of argumets which is [depeneds](https://stackoverflow.com/questions/22747068/is-there-a-max-number-of-arguments-javascript-functions-can-accept) which should be functions itself. Functions should be composed in spiral way - like so `composeZ(f, g, z, x, y) = f(y(g(x(z))))`

## 3. Create function called merge

`merge :: {obj1}, {obj2} -> {obj3}`

Functions accepts two objects and create new one which represents merged version of them, 2nd object properties if same exists in 
1st one, should overwrite it.

*Advanced part: create function version which accepts any count of objects*

## 4. Create function called normalizer

`normalizer :: {input} -> {output}`

Function should accept object, and create new one where all properties until nesting level 3 is normalized.

Example: 
```js
const input = { 
  field: 1,
  obj2: {
   field2: 2,
  },
  field3: 3,
  obj3: {
    obj4: { 
     obj5: {},
     field: 4,
    },
  },  
}
  
const output = {
  field2: 2,
  field3: 3,
  obj5: {},
  field: 4,  
};
```

*Advanced part: add shouldNotOverwrite boolean as 2nd argument to function. If set to true resulting object keys should be recomposed
in following way: [object-key_property-key]*

## 5. Create function called autoCurry

`autoCurry :: (...a -> a) -> (n, ...a) -> Either res | (n, ...a -> a)`

Function take function as argument and return it's auto curried version, which should accept any count of arguments (from 1 to n) 
and return partial applied version of function until complete list of arguments should be reached, than it's will return results.

Good Luck!




 
