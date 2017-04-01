const child_process = require('child_process');
const path = require('path');
const fs = require('fs');

var Thread = function(){

};

/**
 * This currently forks the parent process in use and create a child process 
 * to communicate with the parent process.
 * {module} - The module to fork
 * {arg} - Array of arg the module require to execute
 * {autoKill} - (Optional) boolean to tell if the child process to be killed when it handles a single
 * message or not. default value is false.
 */
Thread.prototype.fork = (module, arg, autoKill) => {
    let promise = new Promise((resolve, reject)=>{
        let module_contructed_path = path.join(process.cwd(), '/') + module;
        if(fs.existsSync(module_contructed_path)){
            let pr = child_process.fork(module_contructed_path, 
                Array.from(arg), {silent:false, execPath: process.execPath});
            let pid = pr.pid;
            pr.on('message', (message)=>{
                resolve(message);
                if(autoKill){
                    pr.disconnect();
                    pr.kill();
                }
            });
            pr.on('close', (ev) => {
                console.log('process closed', pid);
            });
        }
        else{
            reject(Error('Module cannot be found, Please confirm the path: '
                +module_contructed_path));
        }
    });
    return promise;
};

module.exports = new Thread();