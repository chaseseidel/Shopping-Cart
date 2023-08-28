import Product from "./Product";
import useMensProducts from "../../hooks/useMensProducts.js";
import LoadingPage from "../LoadingPage";
import { useOutletContext } from "react-router-dom";
import NetworkError from "./NetworkError";

function MensPage() {
  const { products, error, loading } = useMensProducts();
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

export default MensPage;
