"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full h-screen flex  justify-center items-center"
    >
      <h1>Welcome To Huddle Dashboard</h1>
      <Button>Hello world</Button>
    </motion.div>
  );
}
