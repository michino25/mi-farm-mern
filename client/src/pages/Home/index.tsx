import { useEffect } from "react";
import Carousel from "./Carousel";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";

export default function Home() {
  useEffect(() => {
    // Set the title when the component mounts
    document.title = "Trang chủ | miFarm";
  }, []);

  return (
    <div className="pt-5">
      <div className="rounded-xl shadow-xl overflow-hidden">
        <Carousel />
      </div>

      <div className="pt-5">
        <CategoryList />
      </div>

      <div className="pt-5">
        <ProductList />
      </div>

      <div className="pt-5"></div>
    </div>
  );
}
