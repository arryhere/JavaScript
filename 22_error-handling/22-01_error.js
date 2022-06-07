/*
• Error Handling

• JavaScript is a loosely-typed language
• Some times you will get a runtime error when you try to access an undefined variable or call undefined function etcb

• The 'try' statement defines a code block to run (to try)
• The 'catch' statement defines a code block to handle any error
• The 'finally' statement defines a code block to run regardless of the result
• The 'throw' statement defines a custom error

• Error Object
• JavaScript has a built in error object that provides error information when an error occurs
• 'name'	    Sets or returns an error name
• 'message'	    Sets or returns an error message (a string)

• throw 'Error'                     // generates an exception with a string value
• throw 42                          // generates an exception with the value 42
• true                              // generates an exception with the value true
• throw new Error('Error Msg')      // generates an error object with the message of Required

*/

try {
    console.log(arr[0]);
}
catch (error) {
    console.log(`${error.name} - ${error.message}`);
}
finally {
    console.log('Try again');
}

console.log("---------------------------------------------------------------------------------------------------------------------------------");

let x = 3;

try {
    if (x > 5) {
        throw 'Greater than 5';
    }
    else if (x < 5) {
        throw 'Lesser than 5';
    }
    else {
        throw 'Equal to 5';
    }
}
catch (error) {
    console.log(error);
}
finally {
    console.log('It works !');
}
