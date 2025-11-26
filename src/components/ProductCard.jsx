import { FiCheck, FiShoppingCart } from "react-icons/fi";

const ProductCard = ({ product, onAddToCart, cart }) => {
  const isAdded = cart.some((item) => item.id === product.id);

  return (
    <div
      className="
        rounded-2xl border border-gray-200 
        shadow-lg bg-white overflow-hidden 
        hover:shadow-xl hover:-translate-y-2 
        transition-all duration-300
      "
    >
      {/* Image */}
      <div className="relative">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-40 object-cover"
        />

        {/* Category Badge */}
        <span
          className="
            absolute top-2 left-2 
            bg-gradient-to-r from-indigo-500 to-purple-500
            text-white text-xs font-semibold
            px-3 py-1 rounded-full shadow-md
          "
        >
          {product.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-sm text-gray-800 line-clamp-2">
          {product.title}
        </h3>

        {/* Price */}
        <p
          className="
            text-lg font-bold mt-2 
            bg-gradient-to-r from-blue-600 to-purple-600 
            bg-clip-text text-transparent
          "
        >
          ${product.price}
        </p>

        {/* Button */}
        {isAdded ? (
          <button
            className="
              w-full mt-3 py-2 rounded-xl text-white 
              bg-green-500 flex items-center justify-center gap-2 
              cursor-not-allowed
            "
            disabled
          >
            <FiCheck size={16} /> Added to Cart
          </button>
        ) : (
          <button
            className="
              w-full mt-3 py-2 rounded-xl text-white 
              bg-gradient-to-r from-blue-600 to-purple-600
              hover:opacity-90 
              flex items-center justify-center gap-2
              transition
            "
            onClick={() => onAddToCart(product)}
          >
            <FiShoppingCart size={16} /> Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
