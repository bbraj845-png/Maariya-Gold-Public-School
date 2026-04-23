import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AdmissionPage from "./pages/AdmissionPage";
import FeesAcademicsPage from "./pages/FeesAcademicsPage";
import GalleryPage from "./pages/GalleryPage";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 style={{ color: "#0A192F" }}>404</h1>
      <p className="text-base mb-6" style={{ color: "#6b7280", fontFamily: "var(--font-sans)" }}>
        Page not found
      </p>
      <a
        href="/"
        className="px-6 py-3 rounded-xl text-sm font-semibold text-white"
        style={{ background: "#0A192F" }}
      >
        Go Home
      </a>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "admission", Component: AdmissionPage },
      { path: "fees-academics", Component: FeesAcademicsPage },
      { path: "gallery", Component: GalleryPage },
      { path: "*", Component: NotFound },
    ],
  },
]);