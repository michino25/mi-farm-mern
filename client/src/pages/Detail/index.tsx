import About from "./About";
import ProductDetail from "./ProductDetail";
import { useParams } from "react-router-dom";
import {
  useSelector,
  useDispatch,
  selectProductById,
  getProductById,
  AppDispatch,
} from "../../redux";
import { useEffect } from "react";

export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const product = useSelector(selectProductById(id));

  useEffect(() => {
    if (!product) dispatch(getProductById(id));
  }, [dispatch, product, id]);

  return (
    <div className="py-5">
      {product && (
        <>
          <ProductDetail {...product} />
          <About {...product} />
        </>
      )}
    </div>
  );
}
