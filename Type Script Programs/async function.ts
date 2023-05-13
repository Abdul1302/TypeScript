/* async keyword also allows the function to return a promise.
When the function is called, it returns a promise that 
resolves with the value returned by the function. 
If the function throws an error, the promise is rejected
with that error.*/
async function myCallBack(text: string) {
    console.log("inside myCallback " + text);
}

function callingFunction(initialText: string, callback: (text: string) => void)
{
    callback(initialText);
}

callingFunction("myText", myCallBack);