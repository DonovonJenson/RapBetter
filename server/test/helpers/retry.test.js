const { retry } = require('../../helpers/retry');

test('Retry function should call the success callback when it succeeds', () => {

  const mockSuccess = jest.fn();
  const mockError = jest.fn();

  const mockAttempt = (data, success, retry) => {
    // This is where we would do anything async, and if we have data, call the success function
    success();
  };

  retry(mockAttempt, 1, 'test', mockSuccess, mockError);

  expect(mockSuccess).toHaveBeenCalled();
  expect(mockError).not.toHaveBeenCalled();

});

test('Retry function should call the error callback when it fails', () => {

  const mockSuccess = jest.fn();
  const mockError = jest.fn();

  const mockAttempt = (data, success, retry) => {
    retry();
  };

  retry(mockAttempt, 1, 'test', mockSuccess, mockError);

  expect(mockSuccess).not.toHaveBeenCalled();
  expect(mockError).toHaveBeenCalled();

});

test('Retry function should call retry function equal to the number of times the user supplies', () => {

  let counter = 0;
  const numAttempts = 10;

  const mockSuccess = jest.fn();
  const mockError = jest.fn();

  const mockAttempt = (data, success, retry) => {
    counter += 1;
    retry();
  };

  retry(mockAttempt, numAttempts, 'test', mockSuccess, mockError);

  expect(counter).toBe(numAttempts + 1); // add 1 to account for the initial attempt

  expect(mockSuccess).not.toHaveBeenCalled();
  expect(mockError).toHaveBeenCalled();

});

test('Retry function should return an array of error messages into the error callback', () => {

  let counter = 0;
  let messages;
  const numAttempts = 10;

  const mockSuccess = jest.fn();

  const mockError = (errors) => {
    messages = errors;
  };

  const mockAttempt = (data, success, retry) => {
    let message = `error message ${counter}`;
    counter += 1;
    retry(message);
  };

  retry(mockAttempt, numAttempts, 'test', mockSuccess, mockError);

  expect(mockSuccess).not.toHaveBeenCalled();

  expect(messages.length).toBeGreaterThan(0);
  expect(messages.length).toBe(numAttempts + 1); // add 1 for the initial attempt

  console.log('error messages:');
  messages.forEach(message => {
    console.log('message: ', message);
  });

});





























