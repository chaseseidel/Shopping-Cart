import { useState, useEffect } from "react";

const useWomensProducts = () => {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/women's%20clothing")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { products, error, loading };
};

export default useWomensProducts;
