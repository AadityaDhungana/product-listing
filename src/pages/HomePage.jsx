import { useEffect, useState, useCallback } from "react";
import { getAllProducts } from "../lib/api";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";

const HomePage = ({ addToCart, cart }) => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [sort, setSort] = useState("");

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const [skip, setSkip] = useState(0);
  const [limit] = useState(16);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    if (!hasMore || loading) return;
    setLoading(true);

    const data = await getAllProducts({ skip, limit });
    if (data?.products?.length > 0) {
      setProducts((prev) => [...prev, ...data.products]);
      setSkip((prev) => prev + data.products.length);

      if (skip + data.products.length >= data.total) {
        setHasMore(false);
      }
    } else {
      setHasMore(false);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    let temp = [...products];

    if (search.trim()) {
      temp = temp.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.trim()) {
      temp = temp.filter((p) => p.category === category);
    }

    if (sort === "price-asc") temp.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") temp.sort((a, b) => b.price - a.price);

    setFiltered(temp);
  }, [products, search, category, sort]);

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 50
    ) {
      fetchProducts();
    }
  }, [skip, hasMore, loading]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <div className="p-4">
      <SearchBar
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        categories={categories}
        sort={sort}
        setSort={setSort}
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
        {filtered.map((p, i) => (
          <ProductCard
            key={`${p.id}-${i}`}
            product={p}
            onAddToCart={addToCart}
            cart={cart}
          />
        ))}
      </div>

      {loading && (
        <div className="text-center py-4 text-gray-500">Loading more products...</div>
      )}
      {!hasMore && (
        <div className="text-center py-4 text-gray-500">No more products</div>
      )}
    </div>
  );
};

export default HomePage;
