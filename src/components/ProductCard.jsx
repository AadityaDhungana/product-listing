import { FiCheck, FiShoppingCart } from "react-icons/fi";

const ProductCard = ({ product, onAddToCart, cart }) => {
  const isAdded = cart.some((item) => item.id === product.id);

  return (
    <div className="
      border rounded-xl shadow-sm bg-base-100 overflow-hidden 
      hover:shadow-md transition-all duration-200
      hover:-translate-y-1
    ">

      <div className="relative">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-36 object-cover"
        />
      </div>


      <div className="p-3">
 
        <h3 className="font-semibold text-sm line-clamp-2">
          {product.title}
        </h3>

        <p className="text-xs text-gray-500 capitalize mt-1">
          {product.category}
        </p>

        <p className="text-primary font-bold mt-1 text-sm">
          ${product.price}
        </p>

        {isAdded ? (
          <button
            className="
              btn btn-sm w-full mt-3 
              bg-green-500 text-white hover:bg-green-600 
              flex items-center justify-center gap-1
            "
            disabled
          >
            <FiCheck size={16} /> Added
          </button>
        ) : (
          <button
            className="
              btn btn-sm btn-primary w-full mt-3 
              flex items-center justify-center gap-1
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
