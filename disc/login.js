
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { 
getAuth ,
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
sendEmailVerification,
onAuthStateChanged,
signOut
}from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOIJm1q698o1rco1VQyMHTuS1GDKVEt9c",
  authDomain: "pre1-ebc72.firebaseapp.com",
  projectId: "pre1-ebc72",
  storageBucket: "pre1-ebc72.appspot.com",
  messagingSenderId: "1074051314058",
  appId: "1:1074051314058:web:2c80db352265eda25e5873"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
document.getElementById("signup").addEventListener('click' ,function(){
const email=document.getElementById("email").value
const password=document.getElementById("pass").value

createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {


// Signed in 
const user = userCredential.user;

sendEmailVerification(auth.currentUser)
  .then(() => {
    // Email verification sent!
    // ...
  });
// ...
console.log("created")
 window.location.href="./FinProject.html";
})
.catch((error) => {
const errorCode = error.code;
const errorMessage1 = error.message;
const errorMessage = 'An account with this email already exists.';
document.getElementById('error-message').innerHTML = errorMessage;
console.log(errorCode + errorMessage1)
});


})

//login

document.getElementById("login").addEventListener('click' , function(){
const email1=document.getElementById("loginemail").value
const password1=document.getElementById("loginpass").value
signInWithEmailAndPassword(auth, email1, password1)
.then((userCredential) => {
// Signed in 
const user = userCredential.user;
// ...
console.log("welcome")

window.location.href="./FinProject.html";
})
.catch((error) => {

const errorCode = error.code;
const errorMessage = error.message;

if (error.code === 'auth/wrong-password') {
  
  const errorMessage1 = 'Invalid email or password.';
  document.getElementById('loginpassworder').innerHTML = errorMessage1;
} else if (error.code === 'auth/user-not-found') {
  
  const errorMessage1 = 'User account not found.';
  document.getElementById('loginpassworder').innerHTML = errorMessage1;
}

console.log(errorCode + errorMessage)
});


})

//signout

// document.getElementById("logout").addEventListener('click', function(){
// signOut(auth).then(() => {
//   window.location.href="./pre.html";
//   // Sign-out successful.
// }).catch((error) => {
//   // An error happened.
// });

// })

// const logoutButton = document.getElementById("logout")
// logoutButton.addEventListener('click', () => {
//   signOut(auth)
//     .then(() => {
//       console.log('user signed out')
//     })
//     .catch(err => {
//       console.log(err.message)
//     })
// })



// onAuthStateChanged(auth, (user) => {

// // console.log(user.email + " login")

// if (user) {
//   document.getElementById('loginbot').style.display = 'none';
//   document.getElementById('logoutbot').style.display = 'block';
// } else {
// // User is signed out
// // ...
// }
// });







//------   validation      -------//
var emailspan = document.querySelector("#emailer");
const passwordspan = document.querySelector("#passworder"); 

emailspan.style.display='none';
passwordspan.style.display='none';

const emailInput = document.getElementById("loginemail");
const passwordInput = document.getElementById("loginpass");

emailInput.addEventListener('input', () => {
  if (emailInput.value === '') {
    emailspan.style.display = 'none';
  } else if (!validateEmail(emailInput.value)) {
    emailspan.style.display = 'block';
  } else {
    emailspan.style.display = 'none';
  }
});

passwordInput.addEventListener('input', () => {
  if (passwordInput.value === '') {
    passwordspan.style.display = 'none';
  } else if (passwordInput.value.length < 8) {
    passwordspan.style.display = 'block';
  } else {
    passwordspan.style.display = 'none';
  }
});




document.getElementById("login").addEventListener('click',(e) => {
e.preventDefault();

const email12=document.getElementById("loginemail").value
const password12=document.getElementById("loginpass").value


if (!email12 || !validateEmail(email12)) {
  emailspan.style.display = 'block';
} else {
  emailspan.style.display = 'none';
}

if (!password12 || password12.length < 8) {
  passwordspan.style.display = 'block';
} else {
  passwordspan.style.display = 'none';
}

if (email12 && validateEmail(email12) && password12 && password12.length >= 8) {

  console.log('Logged in successfully!');
}



});

function validateEmail(email12) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email12);
}





//------  signup validation      -------//
var siemailspan = document.querySelector("#siemailer");
const sipasswordspan = document.querySelector("#sipassworder"); 

siemailspan.style.display='none';
sipasswordspan.style.display='none';

const siemailInput = document.getElementById("email");
const sipasswordInput = document.getElementById("pass");

siemailInput.addEventListener('input', () => {
  if (siemailInput.value === '') {
    siemailspan.style.display = 'none';
  } else if (!sivalidateEmail(siemailInput.value)) {
    siemailspan.style.display = 'block';
  } else {
    siemailspan.style.display = 'none';
  }
});

sipasswordInput.addEventListener('input', () => {
  if (sipasswordInput.value === '') {
    sipasswordspan.style.display = 'none';
  } else if (sipasswordInput.value.length < 8) {
    sipasswordspan.style.display = 'block';
  } else {
    sipasswordspan.style.display = 'none';
  }
});




document.getElementById("signup").addEventListener('click',(e) => {
e.preventDefault();

const email123=document.getElementById("email").value
const password123=document.getElementById("pass").value


if (!email12 || !sivalidateEmail(email123)) {
  siemailspan.style.display = 'block';
} else {
  siemailspan.style.display = 'none';
}

if (!password123 || password123.length < 8) {
  sipasswordspan.style.display = 'block';
} else {
 sipasswordspan.style.display = 'none';
}

if (email123 && sivalidateEmail(email123) && password123 && password123.length >= 8) {

  console.log('Logged in successfully!');
}



});

function sivalidateEmail(email123) {
  //const re = /\S+@\S+\.\S+/;
    const re=/^[a-z]+@(gmail\.com|yahoo\.com)$/i;
    //const re=/^[a-z]+@[^\s@]+\.[^\s@]+$/i;
  return re.test(email123);
}















