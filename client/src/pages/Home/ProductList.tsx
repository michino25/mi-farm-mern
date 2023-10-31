import { useEffect, useRef } from "react";
import {
  useSelector,
  useDispatch,
  selectProducts,
  getProducts,
  getMoreProducts,
  AppDispatch,
} from "../../redux";
import ProductItem from "../../components/ProductItem";

export default function ProductList() {
  const page = useRef(1);
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const seeMore = () => {
    dispatch(getMoreProducts(page.current));
    page.current = page.current + 1;
  };

  return (
    <div className="flex w-full h-full p-5 bg-white border border-gray-100 rounded-xl">
      <div className="flex flex-col">
        <div className="flex items-center title uppercase text-lime-600 font-bold text-xl mb-4">
          <svg
            className="w-4 h-4 mr-1"
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            enableBackground="new 0 0 64 64"
            fill="currentColor"
          >
            <path
              fill="currentColor"
              d="M62.799,23.737c-0.47-1.399-1.681-2.419-3.139-2.642l-16.969-2.593L35.069,2.265 C34.419,0.881,33.03,0,31.504,0c-1.527,0-2.915,0.881-3.565,2.265l-7.623,16.238L3.347,21.096c-1.458,0.223-2.669,1.242-3.138,2.642 c-0.469,1.4-0.115,2.942,0.916,4l12.392,12.707l-2.935,17.977c-0.242,1.488,0.389,2.984,1.62,3.854 c1.23,0.87,2.854,0.958,4.177,0.228l15.126-8.365l15.126,8.365c0.597,0.33,1.254,0.492,1.908,0.492c0.796,0,1.592-0.242,2.269-0.72 c1.231-0.869,1.861-2.365,1.619-3.854l-2.935-17.977l12.393-12.707C62.914,26.68,63.268,25.138,62.799,23.737z"
            ></path>
          </svg>
          <span>Sản phẩm nổi bật</span>
        </div>
        <div className="flex flex-wrap items-stretch justify-start -m-2">
          {products.length > 0 &&
            products.map((product) => (
              <div
                key={product._id}
                className="w-1/2 sm:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 p-1"
              >
                <ProductItem {...product} />
              </div>
            ))}
        </div>
        <div className="flex justify-center mt-5">
          <button
            type="button"
            onClick={seeMore}
            className="w-full md:w-1/3 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:text-lime-600 hover:border-lime-600 focus:ring-0"
          >
            Xem thêm
          </button>
        </div>
      </div>
    </div>
  );
}
