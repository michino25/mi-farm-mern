import { Link } from "react-router-dom";
import { formatCurrency, Product } from "../utils";

export default function ProductItem({
  _id,
  name,
  photo,
  price,
  star,
  old_price,
  sold,
}: Product) {
  return (
    <>
      <Link
        to={`/product/` + _id}
        className="flex flex-col w-full h-full rounded-xl hover:shadow-xl"
      >
        <div className="relative w-full overflow-hidden pb-[100%]">
          <img
            className="absolute top-0 left-0 w-full h-full object-contain object-center rounded-xl scale-75"
            src={photo}
          />
        </div>

        <div className="p-4">
          <h5 className="line-clamp-1 mb-1 font-medium">{name}</h5>

          <div className="flex justify-between items-end">
            <span className="hidden sm:flex text-gray-600 line-through text-sm">
              {formatCurrency(old_price)}
            </span>
            <span className="text-lime-600/90 font-semibold">
              {formatCurrency(price)}
            </span>
          </div>

          <div className="flex items-center justify-between py-1">
            <div className="flex items-center">
              <span className="mr-1 text-sm font-medium text-gray-700">
                {star / 10}
              </span>
              <svg
                className="w-3 h-3 text-yellow-300 mr-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </div>

            <div className="flex mt-1">
              <p className="hidden sm:flex text-sm text-gray-700">
                Đã bán {sold}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
