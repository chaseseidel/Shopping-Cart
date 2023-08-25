import Product from "./Product";
import useMensProducts from "../../hooks/useMensProducts";
import LoadingPage from "../LoadingPage";

function MensPage() {
  const { products, error, loading } = useMensProducts();

  if (loading) {
    return <LoadingPage />;
  }

  if (error) {
    return <div className="loading">A network error was encountered.</div>;
  }

  return (
    <main className="products">
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </main>
  );
}

export default MensPage;
