import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './index.css';
import * as firebase from 'firebase';


var config = {
  apiKey: "AIzaSyB7KUYEpnVAkvSAHCbsUuclRrkXkhbM1mI",
  authDomain: "square-bef05.firebaseapp.com",
  databaseURL: "https://square-bef05.firebaseio.com",
  projectId: "square-bef05",
  storageBucket: "square-bef05.appspot.com",
  messagingSenderId: "1058596072614"
};

firebase.initializeApp(config);


ReactDOM.render(<App />, document.getElementById('root'));

