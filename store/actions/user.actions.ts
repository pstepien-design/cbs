export const SIGNUP = 'SIGNUP';

export const signup = (email: string, password: string) => {
  console.log('singing up');
  return async (
    dispatch: (arg0: { type: string; payload: string }) => void
  ) => {
    console.log(process.env.REACT_APP_API_KEY)
    const API_KEY = process.env.REACT_APP_API_KEY;
    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          //javascript to json
          //key value pairs of data you want to send to server
          // ...
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      }
    );

    if (!response.ok) {
      //There was a problem..
    } else {
      const data = await response.json(); // json to javascript
      console.log('data from the server', data);
      dispatch({ type: SIGNUP, payload: 'something to pass to reducer' });
    }
  };
};
