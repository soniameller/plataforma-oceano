import axios from 'axios';

const instance = axios.create({
  baseURL: '/authentication',
});

const signUp = (data) =>
  new Promise((resolve, reject) => {
    instance
      .post('/sign-up', data)
      .then((result) => {
        const user = result.data.user;
        resolve(user);
      })
      .catch(reject);
  });

const signIn = (data) =>
  new Promise((resolve, reject) => {
    instance
      .post('/sign-in', data)
      .then((result) => {
        const user = result.data.user;
        resolve(user);
      })
      .catch((error) => {
        alert(error.response.data.error.message);
      });
  });

const signOut = () =>
  new Promise((resolve, reject) => {
    instance
      .post('/sign-out')
      .then((result) => {
        resolve();
      })
      .catch(reject);
  });

const loadUserInformation = () =>
  new Promise((resolve, reject) => {
    instance
      .get('/user-information')
      .then((result) => {
        const user = result.data.user;
        resolve(user);
      })
      .catch(reject);
  });

export { signUp, signIn, signOut, loadUserInformation };
