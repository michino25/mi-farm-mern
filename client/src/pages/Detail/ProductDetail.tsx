import Quantity from "../../components/Quantity";
import { Cart, formatCurrency, Product } from "../../utils";
import {
  useDispatch,
  AppDispatch,
  addCart,
  useSelector,
  selectUserInfo,
} from "../../redux";
import { UserInfo } from "../../utils";
import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function ProductDetail({
  _id,
  photo,
  name,
  location,
  star,
  review,
  sold,
  price,
  old_price,
}: Product) {
  const [quantity, setQuantity] = useState(1);
  const [toLogin, setToLogin] = useState(false);
  const [toCart, setToCart] = useState(false);
  const user: UserInfo = useSelector(selectUserInfo);
  const dispatch = useDispatch<AppDispatch>();

  async function addCartHandler(e: React.FormEvent) {
    e.preventDefault();
    if (user._id) {
      dispatch(
        addCart({
          user: user._id,
          productId: _id,
          quantity,
        } as Cart)
      );
      setToCart(true);
    } else setToLogin(true);
  }

  if (toLogin) return <Navigate to="/login" />;
  if (toCart) return <Navigate to="/cart" />;

  const decrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
    else setQuantity(1);
  };
  const increase = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="flex flex-col md:flex-row w-full h-full p-5 bg-white border border-gray-100 rounded-xl">
      <div className="md:w-1/2">
        <div className="relative overflow-hidden pb-[100%] shadow-xl rounded-xl mr-5">
          <img
            className="absolute top-0 left-0 w-full h-full object-cover object-center rounded-xl scale-75"
            src={photo}
          />
        </div>
      </div>

      <div className="md:w-1/2 py-5">
        <h1 className="text-xl font-medium text-lime-600">{name}</h1>

        <div className="text-sm py-2">
          <span className="">Xuất xứ:</span>
          <span className="text-lime-600 pl-1">{location}</span>
        </div>

        <div className="flex flex-wrap justify-evenly text-sm">
          <div className="flex items-baseline">
            <span className="hover:text-lime-600 text-base border-b border-transparent hover:border-lime-600">
              {star / 10}
            </span>
            <div className="flex items-center space-x-1 ml-1">
              <svg
                className="w-3 h-3 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </div>
          </div>

          <div className="flex items-baseline">
            <span className="hover:text-lime-600 text-base hover:border-b hover:border-lime-600">
              {review}
            </span>
            <span className="ml-1">Đánh Giá</span>
          </div>

          <div className="flex items-baseline">
            <span className="hover:text-lime-600 text-base hover:border-b hover:border-lime-600">
              {sold}
            </span>
            <span className="ml-1">Đã Bán</span>
          </div>
        </div>

        <div className="flex flex-col p-5 rounded-xl bg-gray-100 my-5">
          <div className="flex flex-wrap items-end space-x-2">
            <p className="font-semibold text-3xl text-lime-600/90">
              {formatCurrency(price)}
            </p>
            <p className="line-through text-gray-600 text-sm">
              {formatCurrency(old_price)}
            </p>
            <p className="font-medium text-sm text-lime-600/90">
              -{100 - Math.floor((price / old_price) * 100)}%
            </p>
          </div>
          <div className="flex items-center text-lime-600/90 mt-2">
            <svg
              className="w-4 h-4 mr-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
            >
              <path d="M256,0C201.824,56.96,122.944,65.816,79.104,65.816c-19.8,0-32.432-1.808-32.432-1.808s0,92,0,224S256,512,256,512 s209.328-92,209.328-224s0-224,0-224s-12.632,1.808-32.432,1.808C389.056,65.816,310.208,56.96,256,0L256,0z"></path>
              <polygon
                fill="#fff"
                points="340.176,134.728 222.8,279.552 173.472,230.832 140.952,266.672 226.608,351.256 376.296,166.584 "
              ></polygon>
            </svg>
            <span className="uppercase text-sm font-bold">
              rẻ hơn hoàn tiền
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-semibold">Số lượng</span>
          <Quantity {...{ quantity, setQuantity, increase, decrease }} />
        </div>

        <div className="flex mt-5">
          <button
            onClick={addCartHandler}
            type="button"
            className="flex focus:outline-none text-white bg-lime-600 hover:bg-lime-700 focus:ring-0 font-medium rounded-lg text-sm px-8 py-2.5 mb-2 mt-2"
          >
            <svg
              className="w-5 h-5 mr-2"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.04047 2.29242C2.6497 2.15503 2.22155 2.36044 2.08416 2.7512C1.94678 3.14197 2.15218 3.57012 2.54295 3.7075L2.80416 3.79934C3.47177 4.03406 3.91052 4.18961 4.23336 4.34802C4.53659 4.4968 4.67026 4.61723 4.75832 4.74609C4.84858 4.87818 4.91828 5.0596 4.95761 5.42295C4.99877 5.80316 4.99979 6.29837 4.99979 7.03832L4.99979 9.64C4.99979 12.5816 5.06302 13.5523 5.92943 14.4662C6.79583 15.38 8.19028 15.38 10.9792 15.38H16.2821C17.8431 15.38 18.6236 15.38 19.1753 14.9304C19.727 14.4808 19.8846 13.7164 20.1997 12.1875L20.6995 9.76275C21.0466 8.02369 21.2202 7.15417 20.7762 6.57708C20.3323 6 18.8155 6 17.1305 6H6.49233C6.48564 5.72967 6.47295 5.48373 6.4489 5.26153C6.39517 4.76515 6.27875 4.31243 5.99677 3.89979C5.71259 3.48393 5.33474 3.21759 4.89411 3.00139C4.48203 2.79919 3.95839 2.61511 3.34187 2.39838L3.04047 2.29242ZM13 8.25C13.4142 8.25 13.75 8.58579 13.75 9V10.25H15C15.4142 10.25 15.75 10.5858 15.75 11C15.75 11.4142 15.4142 11.75 15 11.75H13.75V13C13.75 13.4142 13.4142 13.75 13 13.75C12.5858 13.75 12.25 13.4142 12.25 13V11.75H11C10.5858 11.75 10.25 11.4142 10.25 11C10.25 10.5858 10.5858 10.25 11 10.25H12.25V9C12.25 8.58579 12.5858 8.25 13 8.25Z"
                fill="currentColor"
              ></path>
              <path
                d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z"
                fill="currentColor"
              ></path>
              <path
                d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z"
                fill="currentColor"
              ></path>
            </svg>

            <span>Thêm Vào Giỏ Hàng</span>
          </button>
        </div>
      </div>
    </div>
  );
}
