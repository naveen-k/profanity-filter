#### Author : Naveen Kumar
This is a utiity class written on TypeScrip for dealing with profanity in english and hindi. This has functionalities for detecting bad words and cleaning them. 

Can be used in :
- AngularJS
- NodeJS
- Reactjs

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
var isDirty = Profanity.isMessageDirty(this.title);
console.log(isDirty); // true
```

### Contributors
Naveen Kumar

### License
MIT License
