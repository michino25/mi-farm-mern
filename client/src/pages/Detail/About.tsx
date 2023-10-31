import { Product } from "../../utils";

export default function About({ name, description }: Product) {
  return (
    <div className="flex w-full h-full mt-5 p-5 bg-white border border-gray-100 rounded-xl">
      <div className="flex flex-col">
        <h3 className="font-bold text-lime-600 text-lg p-2 uppercase self-center">
          Mô Tả Sản Phẩm
        </h3>

        <p className="font-medium pt-3 pb-1">{name}</p>
        <p className="text-sm py-1">{description}</p>

        <p className="font-medium pt-3 pb-1">Chính sách TriFarm</p>
        <p className="text-sm py-1">
          Với sản phẩm tươi sống, trọng lượng thực tế có thể chênh lệch khoảng
          10%.
        </p>
        <p className="text-sm py-1">
          Giá sản phẩm trên TriFarm đã bao gồm thuế theo luật hiện hành. Bên
          cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có
          thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng
          kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị
          trên 1 triệu đồng).
        </p>
      </div>
    </div>
  );
}
