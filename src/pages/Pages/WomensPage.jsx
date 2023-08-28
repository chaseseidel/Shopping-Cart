import Product from "./Product";
import useWomensProducts from "../../hooks/useWomensProducts.js";
import LoadingPage from "../LoadingPage";
import { useOutletContext } from "react-router-dom";
import NetworkError from "./NetworkError";

function WomensPage() {
  const { products, error, loading } = useWomensProducts();
  const [addItem] = useOutletContext();

  if (loading) {
    return <LoadingPage />;
  }

  if (error) {
    return <NetworkError />;
  }

  return (
    <main className="products">
      {products.map((product) => (
        <Product product={product} addItem={addItem} key={product.id} />
      ))}
    </main>
  );
}

export default WomensPage;
