import { Outlet } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#FDFBF7" }}>
      <Header />
      <main className="flex-1 pt-16 md:pt-20">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
