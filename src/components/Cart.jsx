
const Cart = ({ isOpen, onClose, cartItems, removeFromCart }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-72 bg-base-200 shadow-xl transform transition-transform duration-300 z-50
      ${isOpen ? "translate-x-0" : "translate-x-full"}`}
    >

      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="font-bold text-lg">Your Cart</h2>
        <button className="btn btn-sm btn-outline" onClick={onClose}>
          Close
        </button>
      </div>

      <div className="p-4 space-y-3 overflow-y-auto h-[calc(100%-70px)]">
        {cartItems.length === 0 && (
          <p className="text-center text-gray-500">No items yet</p>
        )}

        {cartItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-2 rounded bg-base-100 shadow-sm"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-14 h-14 object-cover rounded"
            />
            <div className="flex-1">
              <h4 className="text-sm font-semibold">{item.title}</h4>
              <p className="text-xs text-gray-500">${item.price}</p>
            </div>
            <button
              className="btn btn-xs btn-error"
              onClick={() => removeFromCart(item.id)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
