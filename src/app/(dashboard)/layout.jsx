import { redirect } from "next/navigation";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#F9F9F9]">
      <aside className="h-full shrink-0 z-40 border-r border-[#E0E0E0] bg-white">
        <Sidebar />
      </aside>

      <div className="flex flex-col flex-1 min-w-0 h-full">
        <div className="h-23.5 w-full shrink-0 z-30 bg-white">
          <Header />
        </div>

        <main className="flex-1 overflow-y-auto px-6 py-10">{children}</main>
      </div>
    </div>
  );
}
