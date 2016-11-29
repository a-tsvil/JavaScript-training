# JS Training Task 1

> Syntax, expressions and statements basics tasks. You may choose few (not less than 3 for 1st, 6 for 2n and 1 for 3d group) or perform all available,
and get my tremendous respect.

Main goal of this tasks is teach you how to use JS Statements, learn some syntax, and get brief look on JS typecasting features.
All mandatory tasks need to be performed until next **friday** (13/5/2016). Please pay attention, overdue without serious reasons and explanations
will reflects in your course feedback.

Tasks will be divided on three groups:
- String Tasks
- Array Tasks
- Statements and typecasting Tasks

## String Tasks

All you need is create function to perform following actions, this function will take string and return string exclude last one which will return object:

* Reverse String
* Check if string ends with
* Check if string begins with
* Check if string is in camelCase (CamelClass)
* Check if string is in Pascal_Case (pascal_case_to)

## Array Tasks

Classical array tasks which you possible with familiar:

* Array sorting
    * Insertion sort
    * Quicksort
    * Merge sort
    * Bubble sort
    * Shell sort
    * Counting sort
* Finding max, min, avg for square arrays;
* Printing some triangles with zeroes and ones;
```javascript
/*
1 1 1 1 1     1 0 0 0 0
0 1 1 1 0     1 1 0 0 0
0 0 1 0 0     1 1 1 0 0
0 1 1 1 0     1 1 0 0 0
1 1 1 1 1     1 0 0 0 0
*/
```
* Sort array of objects by properties count, ascending and descending;

```javascript
// Input data
var obj1 = { a: 2, c: 3, d: 3};
var obj2 = { a: 1 };
var obj3 = { a: 2, c: 3};
var arOfObj = [obj1, obj2, obj3];
// Calling method
var res = objSort(arOgObj, 'asc');
// Result will be like
res = [
    obj2, obj3, obj1
];
```

## Statements Tasks

* Given two strings(digits which maybe separated by letters), return sum of all numbers in this strings, don't forget to check if string is a hexadecimal number. For advanced part you may want to create sum of all digits in parsed numbers include hexadecimal digits (A, B, C, D, E, F);
```javascript
var str1 = '123x1z13', str2 = 'a123';
// 123113 + 0xA123 = 64364
```
* **SemiColonSON (CommaColonSON)** Given the following data, separate by commas and semicolons, parse
it in JS object in following way
```javascript
var data = ";key,value;key1,value;key3,value3;";
var output = {
    key: 'value',
    key1: 'value1',
    key3: 'value3'
};
```

    * Advanced part: if there is colon (":") next part will be treats as array of objects;

  ```javascript
  var data = ";key,value;key1,value;arrayHere:k1,v1;k2,v2;k3,v3";
  var output = {
      key: 'value',
      key1: 'value1',
      arrayHere: [
          { k1: 'v1' },
          { k2: 'v2' },
          { k3: 'v3' }
      ]
  };
  ```
## Important Note!
All tasks **must be** performed in **browser independent style**, best way it's to implement it and test under **NodeJS**. Send pure JS files with your task solutions (count of file depends on you).
## Helpful Information
NodeJS distributive and guides can be found [here](https://nodejs.org/en/) and [here](https://nodejs.org/en/download/package-manager/). 
After you install it, you need to verify your installation - run in comand line following:
```sh
$ node -v
```
Assuming valid install and existing node variable in system PATH, you should see something like this(it's depends on selected version, I reccomend to choose LTS):
```sh
v6.5.0
```
After this you can run your code simply:
```sh
$ node your-script.js
```
To debug your code you can use console.log().
