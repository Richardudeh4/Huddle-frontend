import Challenges from "@/components/shared/challenges";
import Sidebar from "@/components/shared/sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="bg-custom-whitesmoke w-full flex h-screen">
            <aside className="w-1/5 h-full overflow-y-auto scroll-hidden">
            <Sidebar
                name="Esther Howard"
                email="mitchell.rivera@example.com"
                online={!false}
            />
            </aside>
            <section className="w-3/5 h-full overflow-y-auto scroll-hidden">{children}</section>
            <aside className="w-1/5 overflow-y-auto scroll-hidden h-full"><Challenges /></aside>
        </main>
    );
}
