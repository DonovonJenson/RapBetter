const { retry } = require('../../helpers/retry');

test('Retry function should call the success callback when it succeeds', () => {

  const mockSuccess = jest.fn();
  const mockError = jest.fn();

  const mockAttempt = (data, success, retry) => {
    // do nothing with the data or retry
    // call the success callback
    success();
  };

  retry(mockAttempt, 1, 'test', mockSuccess, mockError);

  expect(mockSuccess).toHaveBeenCalled();
  expect(mockError).not.toHaveBeenCalled();

});

/*

Inputs:

  attemptCB   <Function>       --  Takes in the data and successCB inputs from the parent function, 
                                   and the recursive trial function that controls the counter

  numRetries  <Number>         --  The maximum number of retries to perform

  data        <User Choice>    --  input can be any type, but must be expected within the 'attemptCB' function

  successCB   <Function>       --  passed into the attemptCB to be called when a successful attempt occurs

  errorCB     <Function>       __  if the maximum number of retries occurs, call this function

*/

// var attempt = (data, success, retry) => {

//   // data serves as a way to make sure that the function is called.

//   // do something async, if it worked callback success with results
//   // if it fails, retry, passin in the error.

// };

// create the attempt
// set a number of retries
// build some mock data
// create a function to run on success
// create a function to run on error

/*

  What to test:

    - success callback gets invoked when attempt function completes
    - Is the retry retrying for the number of times supplied
    - Is the retry actually launching 

*/