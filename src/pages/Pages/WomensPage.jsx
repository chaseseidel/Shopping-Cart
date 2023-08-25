import Product from "./Product";
import useWomensProducts from "../../hooks/useWomensProducts";
import LoadingPage from "../LoadingPage";

function WomensPage() {
  const { products, error, loading } = useWomensProducts();

  console.log(products);

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

export default WomensPage;
