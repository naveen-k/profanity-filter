### Requirements
 It internally uses lodash , can be will be installed ``npm i @types/lodash``
 
### Code Example
 
``` 
import { Profanity } from 'src/app/core/profanity/profanity';
var message = "hi asshole you are a bloody camina";
var cleaned = Profanity.maskBadWords(message);
console.log(cleaned); // hi ******* you are a ***** *******
```

 
```
import { Profanity } from 'src/app/core/profanity/profanity';
var message = "hi asshole you are a bloody camina";
var cleaned = Profanity.isMessageDirty(this.title);
console.log(cleaned); // true
```
