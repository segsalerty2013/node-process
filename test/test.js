const thread = require('../index');
const assert = require('assert');

describe('Thread', ()=>{
    describe('Successful Fork()', ()=>{
        it('should return the string "okay"', ()=>{
            thread.fork('test/success.js', [])
            .then((response)=>{
                assert.equal('okay', response);
            });
        });
    });
    describe('Failed Fork()', ()=>{
        it('should throw an error', ()=>{
            thread.fork('success.js', [])
            .catch((error)=>{
                assert.ifError(error);
            });
        })
    });
});