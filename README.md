# blackjack.js

# Module patron in JS - Immediately Invoked Function Expression IIFE

Is the most common patron used because:
- Is compatible with any browsers 
- Let isolate the code / encapsulation


## IIFE Syntax
```js
(()=>{

})()

(function(){

})()
```

Example:
```js
(()=>{
  'use strict'
  const persons = ["Uva","Lila","Ana"];
  console.log(persons)
})()

```
