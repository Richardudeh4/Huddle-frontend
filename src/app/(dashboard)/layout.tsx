import Sidebar from "@/components/shared/sidebar";
import Notificationbar from "@/components/shared/notifcation-bar";
import Head from "next/head";

export default function DashBoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full h-screen grid grid-cols-6  ">
      <Head>
        <title>Huddle io</title>
      </Head>
      <Sidebar />
      <div className="col-span-4 overflow-scroll h-screen">{children}</div>
      <Notificationbar />
    </main>
  );
}
