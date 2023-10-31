import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import SimpleFooter from "./components/SimpleFooter";

export default function SimpleLayout() {
  return (
    <main>
      <Navbar />
      <div className="px-5 md:px-12 lg:px-24 bg-gray-100">
        <Outlet />
      </div>
      <SimpleFooter />
    </main>
  );
}
