import {getAuth} from 'firebase/auth';

import {initializeApp} from 'firebase/app';


const firebaseConfig = {
  apiKey: 'AIzaSyC09iCXn_5yovcQ-Wg9AIFdrA5W-JEX5JM',
  authDomain: 'satisfying-you-1af3f.firebaseapp.com',
  projectId: 'satisfying-you-1af3f',
  storageBucket: 'satisfying-you-1af3f.appspot.com',
  messagingSenderId: '86664172283',
  appId: '1:86664172283:web:89e65069240bdccd53d65e',
};

const app = initializeApp(firebaseConfig);

const auth_mode = getAuth(app);

export {auth_mode};
