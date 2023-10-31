import { Cart } from "../../utils";
import ProductItem from "./ProductItem";

interface Props {
  carts: Cart[];
}

export default function ProductCart({ carts }: Props) {
  return (
    <div className="flex flex-col w-full h-fit p-5 bg-white border border-gray-100 rounded-xl">
      <span className="font-medium text-lg pb-3">Giỏ Hàng</span>

      {carts.length === 0 ? (
        <div className="cart-no-item">
          <div className="flex flex-col items-center justify-center py-20">
            <img className="w-72" src="./empty.png" />
            <span className="text-gray-600 text-sm">
              Chưa có sản phẩm nào trong giỏ hàng của bạn
            </span>
          </div>
        </div>
      ) : (
        <div className="cart-have-item">
          {carts.map((cart) => (
            <ProductItem key={cart._id} {...cart} />
          ))}
          {/* <ProductItem /> */}
        </div>
      )}
    </div>
  );
}
