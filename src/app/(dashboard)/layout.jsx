// app/(dashboard)/layout.jsx
import { redirect } from "next/navigation";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function DashboardLayout({ children }) {
  //   // 1. Check user authentication here (using Auth.js / Supabase / JWT)
  //   const isAuthenticated = true; // Replace with your actual auth state logic

  //   if (!isAuthenticated) {
  //     redirect("/login"); // Instantly boot unauthorized users out to login
  //   }

  return (
    <>
      <div className="relative min-h-screen flex flex-col">
        <div className="fixed top-0 left-0 right-0 h-16 z-50  ">
          <Header />
        </div>

        <div className="flex justify-start items-stretch gap-0 pt-16 min-h-[calc(100vh-64px)] overflow-x-clip">
          <aside className="sticky top-16 h-[calc(100vh-64px)] overflow-y-auto scrollbar-none z-40 shrink-0">
            <Sidebar />
          </aside>

          <main className="flex-1 min-w-0 bg-[#F9F9F9] px-6 py-10 min-h-full">
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
