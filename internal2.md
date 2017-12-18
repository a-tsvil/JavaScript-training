# Task2: Modularity

The goal of this task is better understand modular system of javascript (or, it's absence for browsers which not implement ESM yet)

## 1. Create modules with using of CommonJS (inside NodeJS e.g.) 
Which should have default export, few named exports which include some constants, functions, and objects, also some module-private constants and functions. 
Create few App files and import module content in various ways: import whole module, import only default, import few named, import all inside one object, import aliased.

## 2. Impliment same with using of ECMAScript 6 Module System.
Add few modules for same directory and create barrel file (index.js), use shorter import path.

## 3. Impliment your own module system, called - Modulus.
Modulus is browser based module system, which after including in you web app (just import it in index.html with script tag) will
manage code modules for you.
**Modulus** provide simple API for users, two global functions

 `retrieve :: String key -> func|{obj}|[array]|any // function which search for module by some string key, if no module with such name found, raise an error - "No module found!"`
 
 `store :: String key?, func|{obj}|[array]|any -> void // function which store module in Modulus module register, if no key passed when it's required error is raised - "Key is requred!"`
  
Everything can be a module, function, object, primitive, in case if we passing named function to the store, it's name will be used as module key,
passing function with same name or string key later - overwrite existing module. Key parameter is mandatory for any other data structures excepts functions.
Modules should have public APIs and private functions, each should have own namepspace.

Good luck!
