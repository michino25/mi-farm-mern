import Product from "./Product";
import Total from "./Total";
import {
  useDispatch,
  AppDispatch,
  getCarts,
  useSelector,
  selectCarts,
  selectUserInfo,
} from "../../redux";
import { useEffect, useState } from "react";
import { Cart, UserInfo } from "../../utils";
import { Navigate } from "react-router-dom";

export default function CartPage() {
  const dispatch = useDispatch<AppDispatch>();
  const carts: Cart[] = useSelector(selectCarts);
  const [toLogin, setToLogin] = useState(false);
  const user: UserInfo = useSelector(selectUserInfo);

  useEffect(() => {
    if (user._id) {
      dispatch(getCarts(user._id));
      /* eslint-disable */
    } else setToLogin(true);
  }, []);

  if (toLogin) return <Navigate to="/login" />;

  return (
    <div className="flex flex-col lg:flex-row py-5 gap-5">
      <div className="lg:w-2/3">
        <Product carts={carts} />
      </div>
      <div className="lg:w-1/3">
        <Total carts={carts} />
      </div>
    </div>
  );
}
