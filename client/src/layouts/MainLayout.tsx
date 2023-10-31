import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function MainLayout() {
  return (
    <main>
      <Navbar />
      <div className="px-5 md:px-12 lg:px-24 bg-gray-100">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}
