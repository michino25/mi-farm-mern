import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductItem from "../../components/ProductItem";
import {
  useSelector,
  useDispatch,
  selectProducts,
  getProducts,
  AppDispatch,
  getAllCategories,
  selectCategoryByCode,
} from "../../redux";

interface Prop {
  type: string;
}

export default function SearchPage({ type }: Prop) {
  const { id } = useParams();
  const [title, setTitle] = useState("");

  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector(selectProducts);
  const cat = useSelector(selectCategoryByCode(id));

  useEffect(() => {
    dispatch(getProducts(`?${type}=${id}`));

    switch (type) {
      case "category": {
        dispatch(getAllCategories());
        if (cat?.name) setTitle("Loại sản phẩm: " + cat.name);
        else setTitle("Chủ đề " + id);
        break;
      }
      case "search": {
        setTitle("Từ khóa '" + id + "'");
        break;
      }
    }
  }, [dispatch, type, id, cat]);

  return (
    <div className="py-5">
      <div className="flex flex-col w-full h-full p-5 bg-white border border-gray-100 rounded-xl">
        <div className="flex items-center title uppercase text-lime-600 font-bold text-xl pb-4">
          <svg
            className="w-4 h-4 mr-2"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <span>{title}</span>
        </div>

        <div className="flex flex-wrap items-stretch justify-start -m-2">
          {products.length > 0 ? (
            products.map((post) => (
              <div
                key={post._id}
                className="w-1/2 sm:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 p-1"
              >
                <ProductItem {...post} />
              </div>
            ))
          ) : (
            <div className="flex flex-col justify-center items-center w-full py-5">
              <img
                className="grayscale-[20%] max-w-xs"
                src="https://i.imgur.com/NNMf4gs.png"
              />
              <span className="text-lg text-lime-600 font-semibold py-3">
                Không tìm thấy sản phẩm
              </span>
              <span className="text-sm text-gray-800">
                miFarm không tìm thấy sản phẩm khớp với từ khoá của bạn. Hãy thử
                lại bằng từ khoá khác.
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
