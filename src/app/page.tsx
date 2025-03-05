"use client";

import SignUp from "@/app/auth/Sign-up/page";
import { Button } from "@/components/ui/button";
import { getAuth } from "firebase/auth";
import Link from "next/link";
import Dashboard from "./(dashboard)/dashboard/page";


export default function Home() {
 const auth = getAuth();

 const user = auth.currentUser;

 if(user){
  return <Dashboard/>
 }

  return (
    <div className="">
      <SignUp/>
      {/* <Link href={'/dashboard'}>
        <Button>Dashboard</Button>
      </Link> */}
    </div>
  );
}
// w-full  min-h-screen grid place-content-center
