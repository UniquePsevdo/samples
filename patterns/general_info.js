// Each of the following options will create a new empty object:

var newObject = {};

// or
var newObject = Object.create( Object.prototype );

// or
var newObject = new Object();

/*
JavaScript doesn't support the concept of classes but it does support special constructor
 functions that work with objects. By simply prefixing a call to a constructor function with the keyword "new",
 we can tell JavaScript we would like the function to behave like a constructor and instantiate a new object
 with the members defined by that function.
Inside a constructor, the keyword this references the new object that's being created*/
