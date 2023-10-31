import { Cart, formatCurrency } from "../../utils";

interface Props {
  carts: Cart[];
}

export default function Total({ carts }: Props) {
  return (
    <>
      <div className="flex flex-col w-full h-fit p-5 bg-white border border-gray-100 rounded-xl">
        <div className="flex flex-col">
          <div className="flex justify-between">
            <span className="py-2 font-semibold">Tổng tiền hàng</span>
            <span className="py-2 font-semibold">
              {formatCurrency(
                carts.reduce(
                  (total, cartItem) =>
                    total + cartItem.product.price * cartItem.quantity,
                  0
                )
              )}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="py-1 text-sm text-gray-600">
              Voucher từ Trifarm
            </span>
            <span className="py-1 text-sm text-gray-600">
              (10%) -
              {formatCurrency(
                carts.reduce(
                  (total, cartItem) =>
                    total + (cartItem.product.price * cartItem.quantity) / 10,
                  0
                )
              )}
            </span>
          </div>

          <div className="flex justify-between mt-8">
            <span className="py-2 font-semibold">Tổng Thanh Toán</span>
            <span className="py-2 font-semibold">
              {formatCurrency(
                carts.reduce(
                  (total, cartItem) =>
                    total +
                    ((cartItem.product.price * cartItem.quantity) / 10) * 9,
                  0
                )
              )}
            </span>
          </div>
        </div>

        <div className="flex flex-col mt-12">
          <button
            type="button"
            className="w-full focus:outline-none text-white bg-lime-600 hover:bg-lime-700 focus:ring-0 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          >
            Thanh toán
          </button>
          <button
            type="button"
            className="w-full py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:text-lime-600 hover:border-lime-600 focus:ring-0"
          >
            Tiếp tục mua sắm
          </button>
        </div>
      </div>
    </>
  );
}
