"use strict";

var mil = Math.pow(10,6);

var i = 0,
    results = [],
    totalCalls = 0;

function makeSausage( subject ){
    var start = +new Date();
    subject();
    var end = +new Date();
    return end - start;
}

function done() {
    
    console.log(results);
    var totesTime  = 0;
    
    for (var i = 0; i < results.length; i++ ){
        totesTime += results[i]; 
    }
    
    console.log("the total time for all ", totalCalls, " calls was:", totesTime, " ms"); 
}

// Gary is an IIFE ( immediately invoked function expression )
// who watches the sausage making process to invoke a timeout
// and repeat testing and timing the sausage making process.
(function Gary(){
    
    // generate a random number 1 million times
    var diff = makeSausage(function(){
        for( var i = 0; i < mil; i++ ){
            Math.random();
            totalCalls++;
        }
    });
    
    results.push(diff);
    
    i++
    
    // make sausage 1000 times
    if ( i < 100 ){
        setTimeout( Gary, 0 ); 
    } else { 
        done();
    }
    
})();
