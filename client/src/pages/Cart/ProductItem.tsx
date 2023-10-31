import { Link } from "react-router-dom";
import Quantity from "../../components/Quantity";
import { formatCurrency, UserInfo, Cart } from "../../utils";
import {
  useDispatch,
  AppDispatch,
  updateCart,
  useSelector,
  selectUserInfo,
} from "../../redux";

export default function ProductItem({ product, quantity }: Cart) {
  const user: UserInfo = useSelector(selectUserInfo);
  const dispatch = useDispatch<AppDispatch>();

  const setQuantity = (num: number) => {
    dispatch(
      updateCart({
        user: user._id,
        productId: product._id,
        quantity: num,
      } as Cart)
    );
  };

  const decrease = () => {
    if (quantity > 0) setQuantity(quantity - 1);
    else setQuantity(0);
  };
  const increase = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="flex mt-5">
      <div className="w-32">
        <div className="relative overflow-hidden pb-[100%] shadow-xl rounded-xl">
          <img
            className="absolute top-0 left-0 right-0 object-contain rounded-xl"
            src={product.photo}
          />
        </div>
      </div>

      <div className="flex flex-1 pl-5">
        {/*  */}
        <div className="flex flex-col">
          <Link to={`/product/` + product._id} className="font-medium">
            {product.name}
          </Link>

          <div>
            <span className="text-sm text-gray-700">
              {formatCurrency(product.price)}
            </span>
          </div>

          <div className="flex my-2">
            <div className="flex items-center px-2 py-0.5 bg-lime-500/20 text-lime-600 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <circle cx="7" cy="17" r="2"></circle>
                <circle cx="17" cy="17" r="2"></circle>
                <path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5"></path>
              </svg>
              <span className="text-xs pl-1">Freeship</span>
            </div>
          </div>

          <div className="scale-75 origin-left">
            <Quantity {...{ quantity, setQuantity, increase, decrease }} />
          </div>
        </div>
      </div>

      {/*  */}
      <div className="flex flex-col justify-between items-end pb-2">
        <span className="hidden sm:flex font-medium">
          {formatCurrency(product.price * quantity)}
        </span>

        <button
          onClick={() => setQuantity(0)}
          className="hover:text-lime-600 hover:font-medium"
        >
          <span className="hidden sm:flex">Xoá</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="flex sm:hidden w-5 h-5"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="1"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <line x1="4" y1="7" x2="20" y2="7"></line>
            <line x1="10" y1="11" x2="10" y2="17"></line>
            <line x1="14" y1="11" x2="14" y2="17"></line>
            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
