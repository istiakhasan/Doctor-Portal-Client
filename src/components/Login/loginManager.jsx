import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {  signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {  updateProfile } from "firebase/auth";
const app = initializeApp(firebaseConfig);



export const signInWithPasswordAndEmail=(email,password)=>{
   

const auth = getAuth();
return signInWithEmailAndPassword(auth, email, password)
  .then((res) => {
   
    const newUserInfo = res.user
    newUserInfo.success = true
    return newUserInfo
    
  })
  .catch((error) => {
    const newUserInfo = {}
    newUserInfo.success = false
    return newUserInfo
  });
}

export const googleSignInHandle=()=>{
 const provider = new GoogleAuthProvider();
  

const auth = getAuth();
return signInWithPopup(auth, provider)
  .then((res) => {
        const NewUser=res.user
        const {displayName, photoURL, email}=NewUser
        const SignInUser={
            isLoggedIn:true,
            name:displayName,
            email:email,
            photo:photoURL,
            success:true
        }
        return SignInUser
  }).catch((error) => {

    return error
    
    const errorCode = error.code;
    const errorMessage = error.message;
    
    const email = error.email;
    
    const credential = GoogleAuthProvider.credentialFromError(error);
    
  });
}



export const emailSignUphandle=(name,email,password)=>{
  

const auth = getAuth();
return createUserWithEmailAndPassword(auth, email, password)
  .then((res) => {
    const NewUser=res.user
    const {displayName, photoURL, email}=NewUser
    const SignInUser={
        isLoggedIn:true,
        name:name,
        email:email,
        photo:photoURL,
        success:true
    }
    updateName()
    return SignInUser
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

}


const updateName=(name)=>{
 
const auth = getAuth();
updateProfile(auth.currentUser, {
  displayName:name
}).then(() => {
  // Profile updated!
  // ...
}).catch((error) => {
  // An error occurred
  // ...
});
}