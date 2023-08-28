import Product from "./Product";
import useElectronics from "../../hooks/useElectronics.js";
import LoadingPage from "../LoadingPage";
import { useOutletContext } from "react-router-dom";
import NetworkError from "./NetworkError";

function ElectronicsPage() {
  const { products, error, loading } = useElectronics();
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

export default ElectronicsPage;
