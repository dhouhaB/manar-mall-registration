// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};


import { initializeApp } from "firebase/app";

export const firebaseConfig = {
  apiKey: "AIzaSyAT1uo0ZB4Q-ByKfO8MpZ3snmKYveNaMWo",
  authDomain: "testdb-b6d40.firebaseapp.com",
  projectId: "testdb-b6d40",
  storageBucket: "testdb-b6d40.appspot.com",
  messagingSenderId: "385413049568",
  appId: "1:385413049568:web:f920ce80c2dda5b82cf485"
};

// Initialize Firebase
/*const app = initializeApp(firebaseConfig);*/