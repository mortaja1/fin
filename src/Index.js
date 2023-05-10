import { initializeApp} from 'firebase/app'


import { 
getAuth ,
createUserWithEmailAndPassword ,
signOut,
signInWithEmailAndPassword
}from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyBKG2qtqPsODLeK2dWRAG5J2AvsgYycANA",
    authDomain: "financial-ff8f2.firebaseapp.com",
    projectId: "financial-ff8f2",
    storageBucket: "financial-ff8f2.appspot.com",
    messagingSenderId: "736165260971",
    appId: "1:736165260971:web:8d4a7f5fd7f49e593e91ee"
}
//init app
initializeApp(firebaseConfig)

//init services
const auth =getAuth()



//signing users up
const signupForm =document.querySelector('.signup')
signupForm.addEventListener('submit',(e) =>{ 
e.preventDefault()

const email=signupForm.email.value
const passwoed=signupForm.password.value


createUserWithEmailAndPassword(auth,email,passwoed)
.then((cred) =>{

console.log('user created',cred.user)
signupForm.reset()
})
.catch((err) =>{
console.log(err.message)

})

})



// logging in and out
// const logoutButton = document.querySelector('.logout')
// logoutButton.addEventListener('click', () => {
// signOut(auth)
//     .then(() => {
// console.log('user signed out')
//     })
//     .catch(err => {
// console.log(err.message)
//     })
// })

const loginForm = document.querySelector('.login')
loginForm.addEventListener('submit', (e) => {
e.preventDefault()

const email = loginForm.email.value
const password = loginForm.password.value

signInWithEmailAndPassword(auth, email, password)
    .then(cred => {
console.log('user logged in:', cred.user)
loginForm.reset()
    })
    .catch(err => {
console.log(err.message)
    })
})











