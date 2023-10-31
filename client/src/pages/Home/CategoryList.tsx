import CategoryItem from "./CategoryItem";
import {
  useSelector,
  useDispatch,
  getAllCategories,
  selectCategories,
  AppDispatch,
} from "../../redux";
import { useEffect } from "react";

export default function CategoryList() {
  const dispatch = useDispatch<AppDispatch>();
  const categories = useSelector(selectCategories);

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);
  return (
    <div className="flex w-full h-full p-5 bg-white border border-gray-100 rounded-xl">
      <div className="flex flex-col">
        <div className="flex items-center title uppercase text-lime-600 font-bold text-xl pb-4">
          <svg
            className="w-6 h-6 mr-1"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Vector"
              d="M5 17H13M5 12H19M11 7H19"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <span>Danh mục</span>
        </div>
        <div className="flex flex-wrap items-stretch justify-start -m-2">
          {categories.length > 0 &&
            categories.map((category) => (
              <div
                key={category._id}
                className=" w-1/3 sm:w-1/4 md:w-1/6 lg:w-1/8 xl:w-1/12 p-1"
              >
                <CategoryItem {...category} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
