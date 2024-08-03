import Sidebar from "@/components/shared/sidebar";
import Notificationbar from "@/components/shared/notifcation-bar";


export default function DashBoardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        <main className="w-full h-full min-h-screen grid grid-cols-6 ">
            <Sidebar />
            <div className="col-span-4 px-16 pt-8 pb-10">{children}</div>
            <Notificationbar />
        </main>
    );
}