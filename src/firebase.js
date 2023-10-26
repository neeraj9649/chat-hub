import firebase from 'firebase/app';
const config = {
  apiKey: 'AIzaSyCKWWED0tuURKMlAu2wmNbgRwz29XTYgwk',
  authDomain: 'chat-web-hub.firebaseapp.com',
  projectId: 'chat-web-hub',
  storageBucket: 'chat-web-hub.appspot.com',
  messagingSenderId: '156130255170',
  appId: '1:156130255170:web:6eb94c7df6343259f068db',
};
const app = firebase.initializeApp(config)
app.