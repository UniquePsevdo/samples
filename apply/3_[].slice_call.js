let argsToArray = function(){
    console.log(arguments);
    console.log([].slice.call(arguments))
}

argsToArray(1,2,3)