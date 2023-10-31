import { Link } from "react-router-dom";
import { Category } from "../../utils";

export default function CategoryItem({ name, code, img }: Category) {
  return (
    <>
      <Link
        to={`/category/` + code}
        className="flex flex-col w-full h-full rounded-xl hover:shadow-xl"
      >
        <div className="relative w-full overflow-hidden pb-[100%]">
          <img
            className="absolute top-0 left-0 w-full h-full object-cover object-center rounded-xl scale-75"
            src={img}
          />
        </div>

        <h5 className="line-clamp-1 mb-5 mt-2 font-medium text-center text-gray-900">
          {name}
        </h5>
      </Link>
    </>
  );
}
