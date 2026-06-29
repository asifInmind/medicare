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
        {/* Fixed Header */}
        <div className="fixed top-0 left-0 right-0 h-16 z-50  ">
          <Header />
        </div>

        {/* Main Layout Wrapper (Pushed down by header height via pt-16) */}
        <div className="flex justify-start items-stretch gap-0 pt-16 min-h-[calc(100vh-64px)]">
          {/* Fixed Sidebar container using sticky positioning */}
          <aside className="sticky top-16 h-[calc(100vh-34px)] overflow-y-auto scrollbar-none z-40">
            <Sidebar />
          </aside>

          {/* Scrollable Main Content area */}
          <main className="flex-1 bg-[#F9F9F9]  px-6 py-10 min-h-full">
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
