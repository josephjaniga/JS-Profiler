"use strict";

var mil = 1e6; // scientific notation is more better

var i = 0,
    results = [],
    totalCalls = 0,
	iterations = 50;

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
    
    console.log("Total time:", totesTime, " ms");
    console.log("Average time:", totesTime/(iterations), " ms");
}

// Gary is an IIFE ( immediately invoked function expression )
// who watches the sausage making process to invoke a timeout
// and repeat testing and timing the sausage making process.
(function Gary(){
    
    // generate a random number 1 million times
    var diff = makeSausage(function(){
        for( var c = 0; c < mil; c++ ){
            Math.random();
        }
    });
    
    results.push(diff);
    
    i++
    
    // make sausage 1000 times
    if ( i < iterations ){
        setTimeout( Gary, 0 ); 
    } else { 
        done();
    }
    
})();
