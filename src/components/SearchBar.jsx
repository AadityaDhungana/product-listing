import React from "react";

const SearchBar = ({
  search,
  setSearch,
  category,
  setCategory,
  categories,
  sort,
  setSort,
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 mb-4">

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="input input-bordered w-full sm:w-1/3"
      />

      <select
        className="select select-bordered w-full sm:w-1/3"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map((cat, i) => (
          <option key={i} value={cat}>{cat}</option>
        ))}
      </select>


      <select
        className="select select-bordered w-full sm:w-1/3"
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="">Sort By</option>
        <option value="price-asc">Price: Low → High</option>
        <option value="price-desc">Price: High → Low</option>
      </select>

    </div>
  );
};

export default SearchBar;
