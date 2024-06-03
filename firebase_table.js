// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";  
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
const firebaseConfig = {
    apiKey: "AIzaSyCc0wzuxgIfSYPiFrE8xtcPoS1Yrz8deAM",
    authDomain: "medi-scheduler.firebaseapp.com",
    projectId: "medi-scheduler",
    storageBucket: "medi-scheduler.appspot.com",
    messagingSenderId: "871932227510",
    appId: "1:871932227510:web:5f61c93d291fd2a81b5b17"
  };
 
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.database();