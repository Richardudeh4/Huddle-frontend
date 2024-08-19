import Sidebar from "@/components/shared/sidebar";
import Notificationbar from "@/components/shared/notifcation-bar";
import GoLiveCounter from "@/components/shared/golive-components/golive-counter";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Hudddle io",
  //description: "Generated by create next app",
};
export default function DashBoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full h-screen grid grid-cols-6  ">
      <Sidebar />
      <div className="col-span-4 overflow-scroll scroll-hidden h-screen">
        <GoLiveCounter />
        {children}
      </div>
      <Notificationbar />
    </main>
  );
}
