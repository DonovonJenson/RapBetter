/*
  
  Inputs:

    attemptCB   <Function>       --  Takes in the data and successCB inputs from the parent function, 
                                     and the recursive trial function that controls the counter

    numRetries  <Number>         --  The maximum number of retries to perform

    data        <User Choice>    --  input can be any type, but must be expected within the 'attemptCB' function

    successCB   <Function>       --  passed into the attemptCB to be called when a successful attempt occurs

    errorCB     <Function>       __  if the maximum number of retries occurs, call this function
  
*/

module.exports.retry = (attemptCB, numRetries, data, successCB, errorCB) => {
  // start the counter at 1
  let counter = 1;
  // start a collection for all the errors
  let errors = [];
  /*
    Create the recursive function that will be passed into the attempt callback,
    and will be invoked if the inside function encounters an error, 
    assing in the error message into the next invocation of the trial function
    
    When the successCB is invoked inside of the attemptCB, the retry loop ends

    The counter is accessed and maintainted via closure

    We have to call attemptCB after the trial definition to start off the retry loop
  */
  let trial = (error) => {
    if (counter <= numRetries) {
      errors.push(error);
      counter++;
      attemptCB(data, successCB, trial);
    } else {
      errorCB(errors);
    }
  };
  attemptCB(data, successCB, trial);
};