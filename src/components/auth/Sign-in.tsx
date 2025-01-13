import React from 'react'
import { Button } from '../ui/button'
import {auth, googleProvider, } from "../../../config/firebase";
import { signInWithPopup,signOut } from 'firebase/auth';
const SignIn = () => {
    console.log(auth?.currentUser?.displayName);
    const SignInWithGoogle = async () => {
        try{
            await signInWithPopup(auth,googleProvider);
        }
        catch(err){
            console.error(err);
        }
    }
    const LogOut = async() => {
        try{
            await signOut(auth);
        }
        catch(err){
            console.error(err);
        }
    }
  return (
    <div className='flex justify-center items-center flex-row'>
        <Button onClick={SignInWithGoogle}>SignIn with Google</Button>
        <Button onClick={LogOut}>Logout</Button>
    </div>
  )
}

export default SignIn