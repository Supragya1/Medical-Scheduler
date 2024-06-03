    // import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {getAuth, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import{getFirestore, getDoc, doc} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js"
const firebaseConfig = {
    apiKey: "AIzaSyCc0wzuxgIfSYPiFrE8xtcPoS1Yrz8deAM",
    authDomain: "medi-scheduler.firebaseapp.com",
    projectId: "medi-scheduler",
    storageBucket: "medi-scheduler.appspot.com",
    messagingSenderId: "871932227510",
    appId: "1:871932227510:web:5f61c93d291fd2a81b5b17"
  };
 
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
 
  // Initialize Firebase

  const auth=getAuth();
  const db=getFirestore();

  onAuthStateChanged(auth, (user)=>{
    const loggedInUserId=localStorage.getItem('loggedInUserId');
    if(loggedInUserId){
        console.log(user);
        const docRef = doc(db, "users", loggedInUserId);
        getDoc(docRef)
        .then((docSnap)=>{
            if(docSnap.exists()){
                const userData=docSnap.data();
                document.getElementById('loggedUserFName').innerText=userData.firstName;
                document.getElementById('loggedUserEmail').innerText=userData.email;
                document.getElementById('loggedUserLName').innerText=userData.lastName;
                localStorage.setItem('firebaseName', userData.firstName+" "+userData.lastName);
            }
            else{
                console.log("no document found matching id")
            }
        })
        .catch((error)=>{
            console.log("Error getting document");
        })
    }
    else{
        console.log("User Id not Found in Local storage")
    }
  })

  const logoutButton=document.getElementById('logout');

  logoutButton.addEventListener('click',()=>{
    localStorage.removeItem('loggedInUserId');
    localStorage.removeItem('firebaseName');
    signOut(auth)
    .then(()=>{
        window.location.href='index.html';
    })
    .catch((error)=>{
        console.error('Error Signing out:', error);
    })
  })