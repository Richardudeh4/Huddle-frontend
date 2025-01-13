"use client";
import SignIn from "@/components/auth/Sign-in";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Home() {
  return (
    <div className="w-full  h-screen grid place-content-center">
      <SignIn/>
      {/* <Link href={'/dashboard'}>
        <Button>Dashboard</Button>
      </Link> */}
    </div>
  );
}
