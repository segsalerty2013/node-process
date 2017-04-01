[![Build Status](https://travis-ci.org/segsalerty2013/node-process.svg?branch=master)](https://travis-ci.org/segsalerty2013/node-process)

# Node Process
Milti threading/tasking and background task helper module for nodejs.

### Description
Read about the use and motivation behing this here: 
[https://github.com/segsalerty2013/node-process/wiki](https://github.com/segsalerty2013/node-process/wiki)

### Installation

```bash
$ npm install node-process;
```

### Usage

```javascript
//for one sub process/thread
let node_process = require('node_process');
node_process.fork('path_to_valid_module', ['array of arg required by module'], true)
.then((response)=>{
    //response is string|object sent from the module back to the main thread
    //such response will be sent with process.send('string|object');
    console.log(response);
})
.catch((error)=>{
    //error occurred.
    console.log(error);
});

//for a sticky process/thread that never ends until main thread is dead
node_process.fork('path_to_valid_module', ['array of arg required by module'], false)
.then((response)=>{
    //response is string|object sent from the module back to the main thread
    //such response will be sent with process.send('string|object', 'Handler' ()=>{}, {keepOpen:true});
    //note the Handler i.e Empty ()=>{}
    //and the {keepOpen:true} options
    console.log(response);
})
.catch((error)=>{
    //error occurred.
    console.log(error);
});
```
### Submit an issue, feedback or a feature request
- Any issue topics are welcome.

### CONTRIBUTING
 - Fork it!
 - Clone your fork
 - Create your feature branch: `git checkout -b my-new-feature;`
 - Add a test for each new code
 - Add add your new code
 - Run the tests: `npm test;`
 - Commit your changes: `git commit -am 'Add some feature/fix';`
 - Push to the branch: `git push origin my-new-feature;`
 - Submit a pull request: 
