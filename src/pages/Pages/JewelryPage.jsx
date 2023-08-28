import Product from "./Product";
import useJewelry from "../../hooks/useJewelry.js";
import LoadingPage from "../LoadingPage";
import { useOutletContext } from "react-router-dom";
import NetworkError from "./NetworkError";

function JewelryPage() {
  const { products, error, loading } = useJewelry();
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

export default JewelryPage;
